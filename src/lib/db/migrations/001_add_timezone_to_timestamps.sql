-- Migration: Add timezone support to timestamp columns
-- This converts TIMESTAMP columns to TIMESTAMPTZ, which stores timezone information

-- Update comments table
ALTER TABLE comments
    ALTER COLUMN created_at TYPE TIMESTAMPTZ
    USING created_at AT TIME ZONE 'UTC';

-- Update comment_rate_limits table
ALTER TABLE comment_rate_limits
    ALTER COLUMN window_start TYPE TIMESTAMPTZ
    USING window_start AT TIME ZONE 'UTC';
