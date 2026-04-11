-- Seed blog categories for ImageToURL
INSERT OR IGNORE INTO categories (id, name, slug, color, description, sort_order) VALUES
  ('cat_guides', 'Beginner Guides', 'beginner-guides', 'primary', 'Getting started with image URLs and basic concepts', 1),
  ('cat_tutorials', 'Tutorials', 'tutorials', 'tertiary', 'Step-by-step how-to guides and walkthroughs', 2),
  ('cat_hosting', 'Image Hosting', 'image-hosting', 'secondary', 'Image hosting services, comparisons, and tools', 3),
  ('cat_webdev', 'Web Development', 'web-development', 'primary', 'Developer-focused guides, APIs, and integrations', 4),
  ('cat_seo', 'SEO & Performance', 'seo-performance', 'tertiary', 'Search engine optimization and website performance tips', 5),
  ('cat_usecases', 'Use Cases', 'use-cases', 'secondary', 'Real-world usage for education, business, social media, and more', 6),
  ('cat_technical', 'Technical Deep Dives', 'technical-deep-dives', 'primary', 'In-depth technical explainers and comparisons', 7),
  ('cat_security', 'Security & Privacy', 'security-privacy', 'tertiary', 'Protecting your images, link expiry, and best practices', 8);
