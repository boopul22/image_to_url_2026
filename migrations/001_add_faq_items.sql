-- Add FAQ items column to posts table
ALTER TABLE posts ADD COLUMN faq_items TEXT NOT NULL DEFAULT '[]';
