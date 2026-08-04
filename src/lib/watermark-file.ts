// Client-side watermarking for the upload workspace.
//
// The retired share screen used the same visual treatment: a white strip with
// "Uploaded on imagetourl.cloud" above the image. Keeping the transformation in
// the browser means the normal upload endpoint, expiry rules, and quotas continue
// to work without creating a second hosted copy.

const WATERMARKABLE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

export function canWatermarkFile(file: File): boolean {
  return WATERMARKABLE_TYPES.has(file.type);
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    const cleanUp = () => URL.revokeObjectURL(objectUrl);
    image.onload = () => {
      cleanUp();
      resolve(image);
    };
    image.onerror = () => {
      cleanUp();
      reject(new Error('This image could not be prepared for watermarking.'));
    };
    image.src = objectUrl;
  });
}

function canvasBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('The watermarked image could not be created.'));
      }, 'image/png');
    } catch {
      reject(new Error('The watermarked image could not be created.'));
    }
  });
}

export async function addBrandWatermark(file: File): Promise<File> {
  if (!canWatermarkFile(file)) {
    throw new Error('Watermark works with JPG, PNG and WebP images only.');
  }

  const image = await loadImage(file);
  if (!image.naturalWidth || !image.naturalHeight) {
    throw new Error('This image could not be prepared for watermarking.');
  }

  // Match the previous feature and keep generated PNGs at a practical size.
  const scale = Math.min(1, 2000 / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const stripHeight = Math.min(80, Math.max(60, Math.round(height * 0.11)));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height + stripHeight;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Watermarking is not supported in this browser.');

  const prefix = 'Uploaded on ';
  const brand = 'imagetourl.cloud';
  const fullText = prefix + brand;
  const fontFor = (size: number) =>
    `600 ${size}px "Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif`;

  try {
    await (document as Document & { fonts?: FontFaceSet }).fonts?.load(
      '600 24px "Space Grotesk Variable"',
    );
  } catch {
    // The system font fallback still produces a clear watermark.
  }

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, stripHeight);
  context.textBaseline = 'middle';
  context.textAlign = 'left';

  const maxTextWidth = width * 0.9;
  let fontSize = Math.round(stripHeight * 0.46);
  while (fontSize > 6) {
    context.font = fontFor(fontSize);
    if (context.measureText(fullText).width <= maxTextWidth) break;
    fontSize -= 1;
  }
  context.font = fontFor(fontSize);

  const centerY = stripHeight / 2 + 1;
  const fullWidth = context.measureText(fullText).width;

  if (fullWidth <= maxTextWidth) {
    const prefixWidth = context.measureText(prefix).width;
    const brandWidth = context.measureText(brand).width;
    const startX = (width - prefixWidth - brandWidth) / 2;
    context.fillStyle = '#171717';
    context.fillText(prefix, startX, centerY);
    context.fillStyle = '#e11d48';
    context.fillText(brand, startX + prefixWidth, centerY);
  } else {
    // Extremely narrow images cannot fit the full caption legibly. Keep the
    // brand itself centered instead of clipping the end of the watermark.
    while (fontSize > 5 && context.measureText(brand).width > maxTextWidth) {
      fontSize -= 1;
      context.font = fontFor(fontSize);
    }
    context.textAlign = 'center';
    context.fillStyle = '#e11d48';
    context.fillText(brand, width / 2, centerY);
  }
  context.drawImage(image, 0, stripHeight, width, height);

  const blob = await canvasBlob(canvas);
  const baseName = file.name.replace(/\.[^.]+$/, '') || 'image';
  return new File([blob], `${baseName}-watermarked.png`, {
    type: 'image/png',
    lastModified: Date.now(),
  });
}
