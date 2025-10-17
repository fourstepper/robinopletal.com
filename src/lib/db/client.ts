import pg from 'pg';
import { DATABASE_URL } from '$env/static/private';
import type { Comment, CommentInput, CommentDisplay } from '$lib/types/comment';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

/**
 * Get all comments for a specific post
 */
export async function getComments(postSlug: string): Promise<CommentDisplay[]> {
  const query = `
    SELECT id, author_name, content, created_at, parent_id
    FROM comments
    WHERE post_slug = $1
    ORDER BY created_at ASC
  `;

  const result = await pool.query(query, [postSlug]);

  // Transform to CommentDisplay format
  const comments: CommentDisplay[] = result.rows.map(row => ({
    id: row.id,
    author_name: row.author_name,
    content: row.content,
    created_at: new Date(row.created_at).toISOString(),
    parent_id: row.parent_id
  }));

  // Organize into nested structure for replies
  return organizeComments(comments);
}

/**
 * Organize flat comments array into nested structure with replies
 */
function organizeComments(comments: CommentDisplay[]): CommentDisplay[] {
  const commentMap = new Map<number, CommentDisplay>();
  const rootComments: CommentDisplay[] = [];

  // First pass: create map and initialize replies arrays
  comments.forEach(comment => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // Second pass: organize into tree structure
  comments.forEach(comment => {
    const commentWithReplies = commentMap.get(comment.id)!;

    if (comment.parent_id) {
      const parent = commentMap.get(comment.parent_id);
      if (parent) {
        parent.replies!.push(commentWithReplies);
      }
    } else {
      rootComments.push(commentWithReplies);
    }
  });

  return rootComments;
}

/**
 * Create a new comment
 */
export async function createComment(data: CommentInput): Promise<number> {
  const query = `
    INSERT INTO comments (post_slug, author_name, author_email, content, parent_id, approved)
    VALUES ($1, $2, $3, $4, $5, true)
    RETURNING id
  `;

  const values = [
    data.post_slug,
    data.author_name,
    data.author_email,
    data.content,
    data.parent_id || null
  ];

  const result = await pool.query(query, values);
  return result.rows[0].id;
}

/**
 * Get comment count for a post
 */
export async function getCommentCount(postSlug: string): Promise<number> {
  const query = `
    SELECT COUNT(*) as count
    FROM comments
    WHERE post_slug = $1
  `;

  const result = await pool.query(query, [postSlug]);
  return parseInt(result.rows[0].count);
}

/**
 * Delete a comment by ID
 */
export async function deleteComment(id: number): Promise<void> {
  const query = 'DELETE FROM comments WHERE id = $1';
  await pool.query(query, [id]);
}

/**
 * Approve a comment
 */
export async function approveComment(id: number): Promise<void> {
  const query = 'UPDATE comments SET approved = true WHERE id = $1';
  await pool.query(query, [id]);
}
