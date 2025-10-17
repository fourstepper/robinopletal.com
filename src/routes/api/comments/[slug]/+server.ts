import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getComments, createComment } from '$lib/db/client';
import { validateComment, sanitizeCommentInput, isLikelySpam } from '$lib/utils/validation';
import { checkRateLimit, incrementRateLimit, getClientIP } from '$lib/utils/rateLimit';

/**
 * GET /api/comments/[slug]
 * Fetch all approved comments for a post
 */
export const GET: RequestHandler = async ({ params }) => {
  try {
    const comments = await getComments(params.slug);
    return json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    throw error(500, 'Failed to fetch comments');
  }
};

/**
 * POST /api/comments/[slug]
 * Submit a new comment
 */
export const POST: RequestHandler = async ({ request, params }) => {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit
    const rateLimitResult = await checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      throw error(429, {
        message: 'Too many comments. Please try again later.',
        resetTime: rateLimitResult.resetTime?.toISOString()
      });
    }

    // Parse request body
    const body = await request.json();
    const commentData = {
      ...body,
      post_slug: params.slug
    };

    // Validate input
    const validation = validateComment(commentData);
    if (!validation.valid) {
      throw error(400, {
        message: 'Invalid comment data',
        errors: validation.errors
      });
    }

    // Check for spam
    if (isLikelySpam(commentData.content)) {
      throw error(400, { message: 'Comment appears to be spam' });
    }

    // Sanitize input
    const sanitizedData = sanitizeCommentInput(commentData);

    // Create comment
    const commentId = await createComment(sanitizedData);

    // Increment rate limit counter
    await incrementRateLimit(clientIP);

    return json({
      success: true,
      message: 'Comment posted successfully!',
      id: commentId
    }, { status: 201 });

  } catch (err: any) {
    console.error('Error creating comment:', err);

    // If it's already an error with status, rethrow it
    if (err.status) {
      throw err;
    }

    // Otherwise, return generic error
    throw error(500, 'Failed to submit comment');
  }
};
