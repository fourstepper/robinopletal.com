import type { CommentInput } from '$lib/types/comment';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_CONTENT_LENGTH = 3;
const MAX_CONTENT_LENGTH = 5000;

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

/**
 * Validate comment input data
 */
export function validateComment(data: any): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate author_name
  if (!data.author_name || typeof data.author_name !== 'string') {
    errors.push({ field: 'author_name', message: 'Name is required' });
  } else {
    const name = data.author_name.trim();
    if (name.length < MIN_NAME_LENGTH) {
      errors.push({ field: 'author_name', message: `Name must be at least ${MIN_NAME_LENGTH} characters` });
    }
    if (name.length > MAX_NAME_LENGTH) {
      errors.push({ field: 'author_name', message: `Name must be less than ${MAX_NAME_LENGTH} characters` });
    }
  }

  // Validate author_email
  if (!data.author_email || typeof data.author_email !== 'string') {
    errors.push({ field: 'author_email', message: 'Email is required' });
  } else if (!isValidEmail(data.author_email)) {
    errors.push({ field: 'author_email', message: 'Invalid email address' });
  }

  // Validate content
  if (!data.content || typeof data.content !== 'string') {
    errors.push({ field: 'content', message: 'Comment content is required' });
  } else {
    const content = data.content.trim();
    if (content.length < MIN_CONTENT_LENGTH) {
      errors.push({ field: 'content', message: `Comment must be at least ${MIN_CONTENT_LENGTH} characters` });
    }
    if (content.length > MAX_CONTENT_LENGTH) {
      errors.push({ field: 'content', message: `Comment must be less than ${MAX_CONTENT_LENGTH} characters` });
    }
  }

  // Validate post_slug
  if (!data.post_slug || typeof data.post_slug !== 'string') {
    errors.push({ field: 'post_slug', message: 'Post slug is required' });
  }

  // Validate parent_id (optional)
  if (data.parent_id !== undefined && data.parent_id !== null) {
    const parentId = parseInt(data.parent_id);
    if (isNaN(parentId) || parentId < 1) {
      errors.push({ field: 'parent_id', message: 'Invalid parent comment ID' });
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Check if email is valid
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Sanitize string input (basic HTML escape)
 */
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize comment input before saving to database
 */
export function sanitizeCommentInput(data: any): CommentInput {
  return {
    post_slug: sanitizeString(data.post_slug),
    author_name: sanitizeString(data.author_name),
    author_email: data.author_email.trim().toLowerCase(),
    content: data.content.trim(), // Keep content as-is for display
    parent_id: data.parent_id ? parseInt(data.parent_id) : null
  };
}

/**
 * Check for spam patterns (basic heuristics)
 */
export function isLikelySpam(content: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|poker|lottery)\b/i,
    /(http|https):\/\/.*\.(ru|cn|tk)/i, // Suspicious TLDs
    /\[url=/i, // BBCode links
    /<a href/i, // HTML links
  ];

  return spamPatterns.some(pattern => pattern.test(content));
}
