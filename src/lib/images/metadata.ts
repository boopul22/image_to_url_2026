// Embed attribution metadata (Creator / Credit / Source = imagetourl.cloud) into
// uploaded images so our brand travels with the file and Google Images can show
// us as the credit. Pure-JS, Worker-safe byte surgery — NO decode/re-encode, so
// it's fast and never changes the visible pixels. Existing metadata is preserved
// (we only append our chunks/segments). Any failure returns the original bytes
// unchanged — embedding attribution must never break an upload.
//
// Coverage: PNG (text + XMP) and JPEG (XMP APP1). WebP/GIF/SVG pass through
// untouched (their metadata containers need more surgery for little payoff; the
// branded PNG copy still carries full metadata regardless).

const SITE = 'imagetourl.cloud';
const SITE_URL = 'https://imagetourl.cloud';

// One static XMP packet, reused for every image.
const XMP_PACKET =
  `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>` +
  `<x:xmpmeta xmlns:x="adobe:ns:meta/">` +
  `<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">` +
  `<rdf:Description rdf:about=""` +
  ` xmlns:dc="http://purl.org/dc/elements/1.1/"` +
  ` xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"` +
  ` xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/">` +
  `<dc:creator><rdf:Seq><rdf:li>${SITE}</rdf:li></rdf:Seq></dc:creator>` +
  `<dc:rights><rdf:Alt><rdf:li xml:lang="x-default">Hosted on ${SITE}</rdf:li></rdf:Alt></dc:rights>` +
  `<dc:description><rdf:Alt><rdf:li xml:lang="x-default">Free image hosting — ${SITE}</rdf:li></rdf:Alt></dc:description>` +
  `<dc:subject><rdf:Bag><rdf:li>${SITE}</rdf:li><rdf:li>free image hosting</rdf:li><rdf:li>image to url</rdf:li></rdf:Bag></dc:subject>` +
  `<photoshop:Credit>${SITE}</photoshop:Credit>` +
  `<photoshop:Source>${SITE_URL}</photoshop:Source>` +
  `<xmpRights:WebStatement>${SITE_URL}</xmpRights:WebStatement>` +
  `<xmpRights:Marked>True</xmpRights:Marked>` +
  `</rdf:Description></rdf:RDF></x:xmpmeta>` +
  `<?xpacket end="w"?>`;

// Human-readable text fields (PNG tEXt). Latin-1/ASCII only.
const TEXT_FIELDS: [string, string][] = [
  ['Title', `Image hosted on ${SITE}`],
  ['Author', SITE],
  ['Description', `Free image hosting at ${SITE_URL}`],
  ['Copyright', `Hosted on ${SITE}`],
  ['Source', SITE_URL],
  ['Software', SITE],
];

const enc = new TextEncoder();

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function concat(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

// ── PNG ──────────────────────────────────────────────────────────────────────
const PNG_SIG = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const typeBytes = enc.encode(type); // 4 ASCII bytes
  const out = new Uint8Array(12 + data.length);
  const dv = new DataView(out.buffer);
  dv.setUint32(0, data.length);
  out.set(typeBytes, 4);
  out.set(data, 8);
  const crcInput = new Uint8Array(4 + data.length);
  crcInput.set(typeBytes, 0);
  crcInput.set(data, 4);
  dv.setUint32(8 + data.length, crc32(crcInput));
  return out;
}

function pngTextChunk(keyword: string, text: string): Uint8Array {
  return pngChunk('tEXt', concat([enc.encode(keyword), new Uint8Array([0]), enc.encode(text)]));
}

function pngXmpChunk(): Uint8Array {
  // iTXt: keyword \0 compFlag(0) compMethod(0) langTag \0 transKeyword \0 text(UTF-8)
  return pngChunk(
    'iTXt',
    concat([
      enc.encode('XML:com.adobe.xmp'),
      new Uint8Array([0, 0, 0]), // null + compression flag + compression method
      new Uint8Array([0]), // empty language tag + null
      new Uint8Array([0]), // empty translated keyword + null
      enc.encode(XMP_PACKET),
    ]),
  );
}

function injectPng(bytes: Uint8Array): Uint8Array {
  for (let i = 0; i < 8; i++) if (bytes[i] !== PNG_SIG[i]) return bytes;
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  // Walk chunks to find IEND; insert our chunks right before it.
  let off = 8;
  let iendStart = -1;
  while (off + 8 <= bytes.length) {
    const len = dv.getUint32(off);
    const type = String.fromCharCode(bytes[off + 4], bytes[off + 5], bytes[off + 6], bytes[off + 7]);
    if (type === 'IEND') { iendStart = off; break; }
    off += 12 + len;
  }
  if (iendStart < 0) return bytes;

  const additions = concat([...TEXT_FIELDS.map(([k, v]) => pngTextChunk(k, v)), pngXmpChunk()]);
  return concat([bytes.subarray(0, iendStart), additions, bytes.subarray(iendStart)]);
}

// ── JPEG ─────────────────────────────────────────────────────────────────────
function injectJpegXmp(bytes: Uint8Array): Uint8Array {
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return bytes; // not SOI
  const header = enc.encode('http://ns.adobe.com/xap/1.0/\0');
  const xmp = enc.encode(XMP_PACKET);
  const payload = concat([header, xmp]);
  const segLen = payload.length + 2; // length field counts itself
  if (segLen > 0xffff) return bytes; // too big for one APP1 (won't happen for us)

  const seg = new Uint8Array(4 + payload.length);
  seg[0] = 0xff;
  seg[1] = 0xe1; // APP1
  seg[2] = (segLen >> 8) & 0xff;
  seg[3] = segLen & 0xff;
  seg.set(payload, 4);

  // Insert right after the SOI marker (FFD8). Readers accept APP segments in any order.
  return concat([bytes.subarray(0, 2), seg, bytes.subarray(2)]);
}

// Dispatch by MIME. Always returns valid image bytes — original on anything unexpected.
export function embedAttribution(bytes: Uint8Array, mime: string): Uint8Array {
  try {
    if (mime === 'image/png') return injectPng(bytes);
    if (mime === 'image/jpeg') return injectJpegXmp(bytes);
  } catch {
    // fall through — never break the upload over metadata
  }
  return bytes;
}
