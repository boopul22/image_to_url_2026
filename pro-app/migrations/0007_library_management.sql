-- Support cursor-paginated library queries and fast folder filtering.
CREATE INDEX IF NOT EXISTS idx_assets_user_status_created
  ON assets(user_id, status, created_at DESC, id DESC);

CREATE INDEX IF NOT EXISTS idx_assets_user_folder_status_created
  ON assets(user_id, folder_id, status, created_at DESC, id DESC);
