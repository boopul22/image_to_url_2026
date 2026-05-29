-- Branded share variants. The /share page generates a copy of an uploaded image
-- with a white "imagetourl.cloud" strip added on top (marketing), uploads it as a
-- normal image row, and links it back to the original via branded_of.
--   images.branded_of -> id of the original image this is a branded copy of
-- Lets us dedupe (reuse an existing branded variant instead of re-uploading) and
-- distinguishes derived variants from real uploads. NULL for ordinary uploads.
ALTER TABLE images ADD COLUMN branded_of TEXT;

CREATE INDEX IF NOT EXISTS idx_images_branded_of
  ON images(branded_of)
  WHERE branded_of IS NOT NULL;
