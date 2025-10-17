<script lang="ts">
  import type { CommentDisplay } from '$lib/types/comment';

  export let comment: CommentDisplay;
  export let depth: number = 0;

  const maxDepth = 3; // Maximum nesting level for replies

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class="comment" class:nested={depth > 0} style="margin-left: {depth * 2}rem">
  <div class="comment-header">
    <strong class="author">{comment.author_name}</strong>
    <span class="date">{formatDate(comment.created_at)}</span>
  </div>

  <div class="comment-content">
    {comment.content}
  </div>

  {#if comment.replies && comment.replies.length > 0}
    <div class="replies">
      {#each comment.replies as reply}
        <svelte:self comment={reply} depth={depth + 1} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .comment {
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;

    &.nested {
      border-bottom: none;
      padding: 0.75rem 0;
    }
  }

  .comment-header {
    display: flex;
    gap: 0.75rem;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }

  .author {
    color: #333;
    font-size: 0.95rem;
  }

  .date {
    color: #666;
    font-size: 0.85rem;
  }

  .comment-content {
    color: #444;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .replies {
    margin-top: 0.5rem;
  }
</style>
