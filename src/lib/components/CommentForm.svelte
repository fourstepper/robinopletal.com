<script lang="ts">
  export let postSlug: string;
  export let onSubmitSuccess: () => void;

  let authorName = '';
  let authorEmail = '';
  let content = '';
  let isSubmitting = false;
  let errorMessage = '';
  let successMessage = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();

    // Reset messages
    errorMessage = '';
    successMessage = '';

    // Client-side validation
    if (!authorName.trim() || authorName.trim().length < 2) {
      errorMessage = 'Please enter your name (at least 2 characters)';
      return;
    }

    if (!authorEmail.trim() || !isValidEmail(authorEmail)) {
      errorMessage = 'Please enter a valid email address';
      return;
    }

    if (!content.trim() || content.trim().length < 3) {
      errorMessage = 'Please enter a comment (at least 3 characters)';
      return;
    }

    isSubmitting = true;

    try {
      const response = await fetch(`/api/comments/${postSlug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author_name: authorName,
          author_email: authorEmail,
          content: content
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit comment');
      }

      // Success
      successMessage = 'Comment posted successfully!';

      // Clear form
      authorName = '';
      authorEmail = '';
      content = '';

      // Notify parent component
      onSubmitSuccess();

    } catch (error: any) {
      errorMessage = error.message || 'An error occurred. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
</script>

<form on:submit={handleSubmit} class="comment-form">
  <h3>Leave a Comment</h3>

  {#if errorMessage}
    <div class="message error">{errorMessage}</div>
  {/if}

  {#if successMessage}
    <div class="message success">{successMessage}</div>
  {/if}

  <div class="form-group">
    <label for="author-name">
      Name <span class="required">*</span>
    </label>
    <input
      id="author-name"
      type="text"
      bind:value={authorName}
      placeholder="Your name"
      required
      disabled={isSubmitting}
      maxlength="100"
    />
  </div>

  <div class="form-group">
    <label for="author-email">
      Email <span class="required">*</span>
      <span class="hint">(will not be published)</span>
    </label>
    <input
      id="author-email"
      type="email"
      bind:value={authorEmail}
      placeholder="your.email@example.com"
      required
      disabled={isSubmitting}
      maxlength="255"
    />
  </div>

  <div class="form-group">
    <label for="content">
      Comment <span class="required">*</span>
    </label>
    <textarea
      id="content"
      bind:value={content}
      placeholder="Share your thoughts..."
      required
      disabled={isSubmitting}
      rows="6"
      maxlength="5000"
    ></textarea>
    <div class="char-count">
      {content.length} / 5000
    </div>
  </div>

  <button type="submit" disabled={isSubmitting} class="submit-btn">
    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
  </button>
</form>

<style lang="scss">
  .comment-form {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;

    h3 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }
  }

  .form-group {
    margin-bottom: 1.25rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333;

      .required {
        color: #d00;
      }

      .hint {
        font-size: 0.85rem;
        color: #666;
        font-weight: normal;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.2s;

      &:focus {
        outline: none;
        border-color: #4a90e2;
      }

      &:disabled {
        background: #f0f0f0;
        cursor: not-allowed;
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }

  .char-count {
    text-align: right;
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.25rem;
  }

  .submit-btn {
    padding: 0.75rem 2rem;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;

    &:hover:not(:disabled) {
      background: #357abd;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  .message {
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;

    &.error {
      background: #fee;
      color: #c00;
      border: 1px solid #fcc;
    }

    &.success {
      background: #efe;
      color: #060;
      border: 1px solid #cfc;
    }
  }

  .note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }
</style>
