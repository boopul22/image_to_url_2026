import type { LandingContentMap } from './types';

// Head-term landing page targeting "mp3 to url" plus the wider upload-and-host
// cluster: mp3 to link, host an mp3 file, free mp3 hosting, direct mp3 link,
// "how to get a url for an mp3". Deliberately NOT targeting "url to mp3" /
// "youtube url to mp3" — that's the opposite (ripping audio from a link), a
// different product we don't offer. English authored here; non-English filled
// by scripts/translate-landing.mjs. Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "MP3 to URL - Turn an MP3 Into a Link Free, No Sign-Up | ImageToURL",
    "metaDescription": "Turn an MP3 into a URL for free. Upload an audio file and get a direct link that plays in Discord, an HTML player or a browser. Free MP3 hosting, no account, up to 50MB.",
    "schemaName": "MP3 to URL",
    "schemaDescription": "A free MP3 to URL tool that uploads an audio file and returns a direct, full-quality link. Free MP3 hosting, no account, no re-encoding.",
    "badge": "MP3 TO URL",
    "h1Pre": "MP3 to URL:",
    "h1Highlight": "free, no sign-up needed",
    "intro": "Want to turn an MP3 into a URL without signing up for anything? Upload the file in the box above and you get a direct link in about two seconds. That link is the audio's own web address, the kind that plays in Discord, in an HTML audio player, or straight in a browser. It's free MP3 hosting, files go up to 50MB, and nothing gets re-encoded on the way through. Copy the link and paste it wherever you need the sound.",
    "specsTitle": "MP3 to URL at a glance",
    "specs": [
      { "label": "Price", "value": "Free" },
      { "label": "Sign-up", "value": "Not required" },
      { "label": "Format", "value": "MP3 (audio/mpeg)" },
      { "label": "Max size", "value": "50 MB" },
      { "label": "Output", "value": "Direct CDN link" }
    ],
    "howTitle": "How to get a URL for your MP3",
    "steps": [
      {
        "title": "Upload your MP3",
        "body": "Drag the audio file onto the box or click to pick one from your device. One file at a time, up to 50MB. The same uploader takes images too, so you can use it for both."
      },
      {
        "title": "Copy the link",
        "body": "Your MP3 goes onto a fast global CDN and a direct link comes back right away. It ends in .mp3, which is what turns the file into a playable URL instead of a download page."
      },
      {
        "title": "Paste it anywhere",
        "body": "Drop the URL into a Discord chat, an HTML audio tag, an email or a forum post. Click it and the audio plays, no attachment and no extra hop."
      }
    ],
    "whyTitle": "Why host an MP3 as a direct link",
    "whyItems": [
      {
        "title": "No account, no email",
        "body": "There's nothing to sign up for. Upload, copy the link, done. Most file lockers make you log in before they hand over a share link, and half the time it points at a preview page anyway."
      },
      {
        "title": "A real direct MP3 link",
        "body": "Because the URL ends in .mp3 and points at the raw file, Discord shows an inline player and a browser opens its built-in one. Compare that to a Google Drive link, which lands people on a viewer page first."
      },
      {
        "title": "Same file, same quality",
        "body": "We host the MP3 exactly as you uploaded it. No re-encoding, no bitrate drop, no silent conversion. The 192kbps file you put in is the 192kbps file people hear."
      },
      {
        "title": "Honest about how long links last",
        "body": "Anonymous links stick around for a couple of weeks at least. If you need MP3 hosting that never expires, make a free account and pick 'keep forever' when you upload."
      }
    ],
    "comparisonTitle": "Free MP3 hosting compared",
    "comparisonIntro": "Plenty of services will host an audio file. Where they differ is whether you need an account, how big a file fits, and whether the result is a direct MP3 link that plays on its own or just a download page. Here's the short version.",
    "comparisonColumns": [
      "Host",
      "No sign-up",
      "Max file size",
      "Direct .mp3 link",
      "Plays inline",
      "Link lifetime"
    ],
    "comparisonRows": [
      { "cells": ["ImageToURL", "Yes", "50 MB", "Yes", "Yes", "Weeks free, forever when signed in"] },
      { "cells": ["mp3tourl.com", "Yes", "2 MB", "Yes", "Yes", "Permanent"] },
      { "cells": ["Google Drive", "No", "15 GB", "No (viewer page)", "No", "Tied to your account"] },
      { "cells": ["Dropbox", "No", "2 GB", "Only with ?dl=1 trick", "No", "Tied to your account"] }
    ],
    "useCasesTitle": "Where an MP3 to URL link comes in handy",
    "useCasesIntro": "Once your audio has a direct link, it slots into the same places a normal link does:",
    "useCases": [
      {
        "title": "Discord and group chats",
        "body": "Share a beat, a voice clip or a sound effect and people press play right in the channel. No download, no 'what app opens this'."
      },
      {
        "title": "Your own website",
        "body": "Drop the link into an HTML <audio> tag, a Notion page or a site builder and the player loads inline. No separate audio host to set up."
      },
      {
        "title": "Tools and automations",
        "body": "Plenty of apps and AI services want an audio file as a URL rather than an upload. A direct .mp3 link is exactly what they expect."
      }
    ],
    "sections": [
      {
        "heading": "What is an MP3 URL?",
        "body": "An MP3 URL is a direct web address that ends in .mp3 and points at the audio file itself, not at a page about it. Because it links to the raw file, anything that understands a URL can play it: a browser opens its audio player, Discord shows an inline one, and an HTML <audio src> tag streams it. That's the difference between a real MP3 URL and a normal share link. One plays the sound, the other opens a page you have to click through first. This tool hands you the first kind."
      },
      {
        "heading": "MP3 to URL vs URL to MP3: not the same thing",
        "body": "These get mixed up a lot, so it's worth being clear. MP3 to URL, which is what this page does, takes an audio file you already have and gives it a direct link you can share or embed. URL to MP3 is the opposite: it tries to pull audio out of a YouTube, Spotify or SoundCloud link and save it as a file. We don't do that second one. If you have an MP3 (or you can export one) and you want to host it and get a link, you're in the right place."
      },
      {
        "heading": "MP3 to URL, MP3 to link, direct MP3 link: same result",
        "body": "People search for this in a dozen ways. 'Turn an MP3 into a link', 'get a URL for an MP3', 'host an MP3 file', 'direct MP3 link', 'MP3 link generator'. They all describe the same job: a clean, hotlinkable address that ends in .mp3 and plays where you paste it. Whichever phrase brought you here, the steps are the same. Upload, copy, paste."
      },
      {
        "heading": "Are the audio links safe to share?",
        "body": "Every link is served over HTTPS and points only at your file, with no redirect pages or trackers bolted on. Keep in mind that an anonymous upload is public to anyone who has the link, so don't post anything private, and hang on to your own copy since free links get cleared on a regular schedule."
      }
    ],
    "faqTitle": "MP3 to URL FAQ",
    "faqs": [
      {
        "q": "How do I get a URL for an MP3?",
        "a": "Upload the MP3 in the box at the top of this page. It lands on our CDN and you get a direct link ending in .mp3 within a few seconds, ready to copy. No account and no payment."
      },
      {
        "q": "How do I turn an MP3 into a link?",
        "a": "Same three steps: drop the file in, let it upload, then copy the link it gives back. That link is a direct MP3 URL, so it plays the moment someone opens it instead of starting a download."
      },
      {
        "q": "What is an MP3 URL?",
        "a": "It's the direct web address of an audio file, like https://imagetourl.cloud/abc12345.mp3. Open it in a browser and it plays; drop it into an <audio> tag and it streams. You get one by uploading the MP3 to a host that returns a direct link."
      },
      {
        "q": "Can I host an MP3 file for free?",
        "a": "Yes. This is free MP3 hosting with no account needed. Anonymous uploads stay live for a couple of weeks. If you want a file hosted permanently, sign in (also free) and choose 'keep forever' when you upload."
      },
      {
        "q": "What's the difference between MP3 to URL and URL to MP3?",
        "a": "MP3 to URL hosts a file you already have and gives you a link to it. URL to MP3 tries to rip audio out of a YouTube or streaming link. This tool only does the first one, so it's for files you can upload, not for downloading from other sites."
      },
      {
        "q": "Will the link play in Discord?",
        "a": "Yes. Discord reads a direct .mp3 link and shows an inline player, so people can press play without leaving the chat. The same goes for any browser, which opens its built-in audio player."
      },
      {
        "q": "Can I use the URL in an HTML audio player?",
        "a": "Yes. The link is a plain direct MP3 URL, so it works in an HTML <audio src> tag, in a site builder that accepts an audio link, and in most embed fields that ask for a file URL."
      },
      {
        "q": "Does it re-encode or compress my audio?",
        "a": "No. We host the file exactly as you uploaded it, at the same bitrate and quality. What you put in is what people get back."
      },
      {
        "q": "What's the file size limit?",
        "a": "50MB per file, which covers most songs, voice memos, loops and podcast clips. If a file is bigger, trim it or re-export it at a lower bitrate first."
      },
      {
        "q": "Can I host WAV or M4A audio too?",
        "a": "Right now the tool is built for MP3, which is the format almost everything plays without fuss. If you have a WAV or M4A, convert it to MP3 first and then drop it in here."
      },
      {
        "q": "Do the links expire?",
        "a": "Anonymous uploads stay live until our regular storage cleanup, so you get a couple of weeks at minimum and usually longer. Want one that never expires? Create a free account and choose 'keep forever' when you upload. Either way, keep your own copy as a backup."
      }
    ],
    "relatedTitle": "More tools",
    "related": [
      { "pageKey": "image-to-url", "label": "Image to URL" },
      { "pageKey": "photo-to-url", "label": "Photo to URL" },
      { "pageKey": "image-to-link", "label": "Image to Link" },
      { "pageKey": "image-hosting-for-discord", "label": "Image Hosting for Discord" }
    ],
    "howToSchema": true,
    "ctaTitle": "Turn your MP3 into a URL now",
    "ctaBody": "Upload an MP3 and get a direct link in seconds. Free MP3 hosting, no sign-up, no re-encoding, no quality loss.",
    "ctaButton": "Upload MP3 Now",
    "datePublished": "2026-06-27",
    "dateModified": "2026-06-27"
  }
} as LandingContentMap;
