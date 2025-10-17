<script lang="ts">
  import CommentItem from "./CommentItem.svelte";
  import CommentForm from "./CommentForm.svelte";
  import type { CommentDisplay } from "$lib/types/comment";

  export let postSlug: string;
  export let initialComments: CommentDisplay[] = [];

  let comments = initialComments;
  let isLoading = false;
  let errorMessage = "";

  async function refreshComments() {
    isLoading = true;
    errorMessage = "";

    try {
      const response = await fetch(`/api/comments/${postSlug}`);

      if (!response.ok) {
        throw new Error("Failed to load comments");
      }

      comments = await response.json();
    } catch (error: any) {
      errorMessage = error.message || "Failed to load comments";
      console.error("Error loading comments:", error);
    } finally {
      isLoading = false;
    }
  }

  function handleSubmitSuccess() {
    // Refresh comments to show the newly posted comment
    refreshComments();
  }
</script>

<section class="comments-section">
  <h2 class="comments-title">
    Comments
    {#if comments.length > 0}
      <span class="count">({comments.length})</span>
    {/if}
  </h2>

  <CommentForm {postSlug} onSubmitSuccess={handleSubmitSuccess} />

  <div class="comments-list">
    {#if isLoading}
      <div class="loading">Loading comments...</div>
    {:else if errorMessage}
      <div class="error-message">
        {errorMessage}
        <button on:click={refreshComments} class="retry-btn">Retry</button>
      </div>
    {:else if comments.length === 0}
      <p class="no-comments">
        No comments yet. Be the first to share your thoughts!
      </p>
    {:else}
      {#each comments as comment}
        <CommentItem {comment} depth={0} />
      {/each}
    {/if}
  </div>
</section>

<style lang="scss">
  .comments-section {
    margin-top: 3rem;
    border-top: 2px solid #e0e0e0;
  }

  .comments-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;

    .count {
      font-size: 1rem;
      color: #666;
      font-weight: normal;
    }
  }

  .comments-list {
    margin-top: 2rem;
  }

  .loading {
    padding: 2rem;
    text-align: center;
    color: #666;
    font-style: italic;
  }

  .error-message {
    padding: 1rem;
    background: #fee;
    color: #c00;
    border: 1px solid #fcc;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .retry-btn {
    padding: 0.5rem 1rem;
    background: #c00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background: #a00;
    }
  }

  .no-comments {
    padding: 2rem;
    text-align: center;
    color: #666;
    font-style: italic;
  }
</style>
