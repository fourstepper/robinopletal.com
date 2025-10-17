-- Comments table
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_slug VARCHAR(255) NOT NULL,
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved BOOLEAN DEFAULT FALSE,
    parent_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_post_slug ON comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_approved ON comments(approved);
CREATE INDEX IF NOT EXISTS idx_created_at ON comments(created_at);
CREATE INDEX IF NOT EXISTS idx_post_slug_approved ON comments(post_slug, approved);

-- Rate limiting table
CREATE TABLE IF NOT EXISTS comment_rate_limits (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    comment_count INTEGER DEFAULT 1,
    window_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(ip_address)
);

CREATE INDEX IF NOT EXISTS idx_ip_address ON comment_rate_limits(ip_address);
CREATE INDEX IF NOT EXISTS idx_window_start ON comment_rate_limits(window_start);
