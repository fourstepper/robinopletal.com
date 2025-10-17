# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based personal website and blog for Robin Opletal (robinopletal.com). The site is statically generated and deployed via Docker containers.

## Development Commands

### Development Server

```bash
npm run dev
```

### Building

```bash
npm run build
```

### Build and Preview

```bash
npm run build && npm run preview
```

### Type Checking

```bash
npm run check           # One-time check
npm run check:watch     # Watch mode
```

### Linting and Formatting

```bash
npm run lint            # Check formatting and linting
npm run format          # Auto-format code with Prettier
```

## Architecture

### Content Management System

Blog posts are Markdown files stored in `src/lib/posts/` with frontmatter metadata:

- **Format**: `.md` files processed by mdsvex
- **Required frontmatter fields**: `title`, `date`, `tags`, `description`
- **Dynamic imports**: Posts are loaded using Vite's `import.meta.glob()` pattern
- **Sorting**: Posts automatically sorted by date (newest first)

### Key Helper Functions

**`fetchPosts()` (src/lib/helpers/fetchPosts.ts)**

- Dynamically loads all markdown posts from `/src/lib/posts/*.md`
- Returns sorted post metadata with slug derived from filename
- Used by both the blog listing page and API endpoint

**RSS Feed (src/lib/helpers/rss.ts)**

- Generates RSS XML feed from all blog posts
- Exposed via `/rss.xml` route

### Route Structure

- **`src/routes/+page.svelte`**: Homepage
- **`src/routes/posts/+page.svelte`**: Blog listing page
- **`src/routes/posts/[slug]/+page.ts`**: Dynamic post loader - imports markdown files by slug
- **`src/routes/posts/tags/[tag]/+page.ts`**: Tag filtering - fetches from API and filters client-side
- **`src/routes/api/posts.json/+server.ts`**: JSON API endpoint (prerendered)
- **`src/routes/rss.xml/+server.ts`**: RSS feed endpoint (prerendered)

### Prerendering

Routes using `export const prerender = true`:

- `/api/posts.json` - Static JSON of all posts
- `/rss.xml` - Static RSS feed

### Configuration

**Site config (src/lib/config.ts)**

- Centralized site metadata: title, description, URL, author
- Navigation items

**mdsvex config (mdsvex.config.js)**

- Markdown processing with rehype plugins for heading slugs and auto-linking
- Smartypants enabled for typography

### Deployment

- Uses `@sveltejs/adapter-node` for Node.js server deployment
- Docker image built and published via GitHub Actions on every push
- Published to GitHub Container Registry (ghcr.io)

## Important Notes

- Blog post slugs are derived from filenames (without `.md` extension)
- All markdown files must be in `src/lib/posts/` for the glob patterns to work
- The site uses SCSS for styling with variables in `src/variables.scss`
- TypeScript is enabled with strict mode

## Git Commits

All git commits should be semantic and as concise as possible. Use conventional commit format when appropriate and keep commit messages clear and descriptive. Commit messages must be a single line only - do not include multi-line descriptions, bullet points, or additional metadata like "Generated with Claude Code" or "Co-Authored-By" lines.
