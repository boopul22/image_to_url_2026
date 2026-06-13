import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to URL Converter — Free, No Signup | ImageToURL",
    "metaDescription": "Free image to URL converter. Upload a JPG, PNG, WebP or GIF and get a permanent direct link that embeds cleanly in Discord, Reddit and forums. No signup.",
    "schemaName": "Image to URL Converter",
    "schemaDescription": "A free image to URL converter that turns any image into a permanent, direct link. No account, no watermark, fast global CDN.",
    "badge": "IMAGE TO URL",
    "h1Pre": "Image to URL Converter — ",
    "h1Highlight": "Free, No Signup",
    "intro": "This image to URL converter turns any picture into a direct, shareable link in a couple of seconds. Drop in a JPG, PNG, WebP or GIF and you get a clean image to URL link you can paste anywhere - no account, no watermark, and nothing stripped out of your file.",
    "howTitle": "How the image to URL converter works",
    "steps": [
      {
        "title": "Drop in your image",
        "body": "Drag a file onto the box or click to browse. The converter takes JPG, PNG, WebP and GIF, up to 10MB each."
      },
      {
        "title": "Get a direct link",
        "body": "Your file lands on a fast global CDN and a permanent image to URL link is generated right away. Nothing is compressed, so the image stays exactly as you uploaded it."
      },
      {
        "title": "Copy and paste it anywhere",
        "body": "Grab the URL and use it in a Discord message, a Reddit post, an HTML page, a Markdown file, or an email. It loads as a real image, not an attachment."
      }
    ],
    "whyTitle": "Why use this image to URL converter",
    "whyItems": [
      {
        "title": "No signup, ever",
        "body": "There's no account to make and no email to hand over. Imgur dropped anonymous uploads, so a lot of people came looking for something simpler - this is it. Upload and you're done."
      },
      {
        "title": "Links that embed cleanly",
        "body": "The URL points straight at the image, so Discord, Reddit and most forums render it inline instead of showing a gallery page or a download attachment."
      },
      {
        "title": "Permanent and untouched",
        "body": "Your link stays the same and keeps working, and the file isn't re-compressed or watermarked. What you upload is what people see."
      }
    ],
    "useCasesTitle": "What you can do with an image to URL converter link",
    "useCasesIntro": "Once your picture has a direct link, it slots into pretty much anywhere on the web:",
    "useCases": [
      {
        "title": "Post in Discord and forums",
        "body": "Paste the link into a Discord channel or a forum thread and it shows up as the actual image. No attachment, no extra click to see it."
      },
      {
        "title": "Embed in sites and docs",
        "body": "Drop the URL into your HTML, a website builder, a Notion page or a README and the image loads inline with no separate hosting to set up."
      },
      {
        "title": "Share in email and chats",
        "body": "Add the link to an email signature or send it in a chat. It hotlinks straight to the file, so the picture appears instead of a vague placeholder."
      }
    ],
    "faqTitle": "Image to URL converter FAQ",
    "faqs": [
      {
        "q": "How do I convert an image to a URL?",
        "a": "Upload your image in the box above. The converter puts it on our CDN and gives you a direct link within a few seconds, ready to copy and paste."
      },
      {
        "q": "Is the image to URL converter free?",
        "a": "Yes. It's free to use, with no watermark added to your image and no hidden limits beyond the 10MB per-file size."
      },
      {
        "q": "Do I need an account?",
        "a": "No. There's no signup and no login. Uploads are anonymous, which is why people switched here after Imgur ended anonymous posting."
      },
      {
        "q": "Will the link embed in Discord or Reddit?",
        "a": "It should. The URL points directly at the image file, so Discord, Reddit and most forums render it inline as a picture instead of a download or a gallery page."
      },
      {
        "q": "How long does the link last?",
        "a": "Links are permanent for normal sharing. Files are kept for a good while and then eventually cleared, so it's best for sharing rather than as your only backup."
      },
      {
        "q": "Does it compress my image?",
        "a": "No. The file you get back is the file you uploaded - no re-compression and no quality loss. It supports JPG, PNG, WebP and GIF."
      }
    ],
    "ctaTitle": "Try the image to URL converter now",
    "ctaBody": "Upload a JPG, PNG, WebP or GIF and get a permanent, direct link in seconds. No signup, no watermark.",
    "ctaButton": "Upload Image Now"
  }
} as LandingContentMap;
