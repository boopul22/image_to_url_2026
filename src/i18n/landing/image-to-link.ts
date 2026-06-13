import type { LandingContentMap } from './types';

// Non-English entries maintained by scripts/translate-landing.mjs.
// Re-run with --force to overwrite.

export const content: LandingContentMap = {
  "en": {
    "metaTitle": "Image to Link — Free Direct Image Link Generator | ImageToURL",
    "metaDescription": "Turn any image to link free with no signup. Get a direct, hotlinkable link that renders as the image in Discord, Reddit, and forums. Permanent and anonymous.",
    "schemaName": "Image to Link Generator",
    "schemaDescription": "Convert any image to a direct, shareable link that loads as the image itself in Discord, Reddit, forums, and chat. Free, no signup, no compression.",
    "badge": "IMAGE TO LINK",
    "h1Pre": "Image to Link — ",
    "h1Highlight": "a direct link that shows your image",
    "intro": "This image to link tool gives you a direct, hotlinkable URL that loads as the picture itself, not a webpage or a gallery page. Paste it into Discord, Reddit, a forum post, or a chat and people see the image inline. No signup, no watermark, nothing to click through.",
    "howTitle": "How the image to link tool works",
    "steps": [
      {
        "title": "Upload your image",
        "body": "Drag in a JPG, PNG, WebP, or GIF up to 10MB, or click to browse. There is no account to create and no email to hand over."
      },
      {
        "title": "Copy the direct link",
        "body": "We store the file on a global CDN and hand back a direct link in a second or two. It points straight at the image file, so it embeds cleanly wherever you drop it."
      },
      {
        "title": "Paste it anywhere",
        "body": "Drop the link into Discord, Reddit, a forum, an email, or a doc. Sites that auto-embed will render it as the actual image instead of a plain attachment."
      }
    ],
    "whyTitle": "Why use this image to link generator",
    "whyItems": [
      {
        "title": "Links that render as the image",
        "body": "The whole point of an image link generator is a URL that ends in the file, so Discord, Reddit, and most forums show the picture inline rather than a link card or download prompt."
      },
      {
        "title": "Anonymous and free",
        "body": "No signup, no login wall. Imgur quietly pulled anonymous uploads and started breaking older links, so people came looking for something steadier. Here you just upload and copy."
      },
      {
        "title": "No compression, fast worldwide",
        "body": "Your image is served at full quality with no re-encoding, off a CDN with edge nodes around the world, so it loads quickly no matter where the viewer is."
      }
    ],
    "useCasesTitle": "Where an image to link converter helps",
    "useCasesIntro": "A direct image link works in the places that expect a real file URL:",
    "useCases": [
      {
        "title": "Discord and chat",
        "body": "Paste the link in a Discord channel or DM and it expands into the image preview. Handy for memes, screenshots, and reference shots you do not want to attach as files."
      },
      {
        "title": "Reddit and forums",
        "body": "Many subreddits and old-school forums accept a direct image link and inline it for you, instead of forcing readers onto a separate gallery or hosting page."
      },
      {
        "title": "Signatures, bug reports, and docs",
        "body": "Use the link in a forum signature, a GitHub issue, a Google Doc, or an email. Because it loads as an image, the reader sees it without downloading anything."
      }
    ],
    "faqTitle": "Image to link FAQ",
    "faqs": [
      {
        "q": "How do I turn an image into a link?",
        "a": "Upload your image in the box above. We generate a direct link in a couple of seconds that you can copy and paste anywhere. No signup is needed."
      },
      {
        "q": "What is an image link generator?",
        "a": "It is a tool that takes your uploaded picture and gives back a direct URL pointing at the file. That link is what you share, and supported sites render it as the image."
      },
      {
        "q": "Will the link show the image in Discord, Reddit, or forums?",
        "a": "Yes. The link points straight at the image file, so Discord, most subreddits, and typical forums embed it as the picture rather than showing a plain attachment or a gallery page."
      },
      {
        "q": "Is it free and anonymous?",
        "a": "Both. There is no charge, no account, and no email required. Upload, copy your link, and go."
      },
      {
        "q": "Is the link permanent?",
        "a": "Your link is permanent and shareable for normal use. Files are kept on the CDN and then eventually cleared, so it is meant for sharing rather than long-term archival storage."
      },
      {
        "q": "What is the difference between an image link and an image URL?",
        "a": "In practice they are the same thing. Both are a direct link that loads the image file itself. People say \"image to link\" when they specifically want a URL that embeds as the picture in Discord, Reddit, and forums."
      }
    ],
    "ctaTitle": "Get your image to link now",
    "ctaBody": "Upload a JPG, PNG, WebP, or GIF and copy a direct link that shows the image. Free, no signup, no watermark.",
    "ctaButton": "Upload Image Now"
  }
} as LandingContentMap;
