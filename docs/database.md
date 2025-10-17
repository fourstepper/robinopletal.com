# Database Setup and Migrations

This document covers database setup, migrations, and management for the robinopletal.com project.

## Overview

The project uses PostgreSQL for data persistence, specifically for the comments system. The database runs in a Docker container managed by docker-compose.

## Initial Setup

### Starting the Database

```bash
docker-compose up -d
```

This will:
- Pull the PostgreSQL 16 image if not already present
- Create a persistent volume for data storage
- Initialize the database with the schema (on first run only)

### Environment Variables

Create a `.env` file in the project root with:

```env
DATABASE_URL=postgresql://robinopletal:dev_password_change_in_production@localhost:5432/robinopletal
```

**Important**: Change the password in production environments.

## Running Migrations

The `src/lib/db/schema.sql` file contains the database schema. Here's how to execute it:

### Option 1: Fresh Database (Development)

To start with a clean database:

```bash
# Stop and remove the database volume
docker-compose down -v

# Start fresh (schema.sql will auto-run)
docker-compose up -d
```

**Note**: This deletes all existing data.

### Option 2: Execute on Existing Database

To run migrations on an existing database without losing data:

```bash
# Execute the schema file directly
docker exec -i robinopletal-postgres psql -U robinopletal -d robinopletal < src/lib/db/schema.sql
```

Or connect interactively:

```bash
# Connect to the database
docker exec -it robinopletal-postgres psql -U robinopletal -d robinopletal

# Then run the file from within psql
\i /docker-entrypoint-initdb.d/01-schema.sql
```

### Option 3: Using Local psql (if installed)

If you have PostgreSQL tools installed locally:

```bash
psql -h localhost -U robinopletal -d robinopletal -f src/lib/db/schema.sql
```

## Database Schema

The current schema includes:

### Comments Table
- Stores user comments on blog posts
- Supports threaded replies via `parent_id`
- Includes approval workflow
- Indexed for performance

### Rate Limiting Table
- Tracks comment submission rates by IP
- Helps prevent spam

## Common Operations

### Connect to Database

```bash
docker exec -it robinopletal-postgres psql -U robinopletal -d robinopletal
```

### View Tables

```sql
\dt
```

### View Table Structure

```sql
\d comments
```

### Backup Database

```bash
docker exec robinopletal-postgres pg_dump -U robinopletal robinopletal > backup.sql
```

### Restore Database

```bash
docker exec -i robinopletal-postgres psql -U robinopletal -d robinopletal < backup.sql
```

## Future Migration Management

The current setup uses a single `schema.sql` file with `CREATE TABLE IF NOT EXISTS` statements, which is idempotent but simple. For more complex migration management as the project grows, consider:

### Recommended Tools

1. **[node-pg-migrate](https://github.com/salsita/node-pg-migrate)** - Lightweight migration tool for PostgreSQL
2. **[Kysely](https://kysely.dev/)** - Type-safe SQL query builder with migration support
3. **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM with excellent migration tooling

### Migration File Structure (Example)

```
src/lib/db/
  migrations/
    001_initial_schema.sql
    002_add_comment_moderation.sql
    003_add_user_notifications.sql
  schema.sql (current/combined schema)
```

### Migration Tracking

Most migration tools create a migrations table to track which migrations have been applied, preventing duplicate execution.

## Troubleshooting

### Cannot Connect to Database

Check if the container is running:

```bash
docker ps | grep robinopletal-postgres
```

Check container logs:

```bash
docker logs robinopletal-postgres
```

### Port Already in Use

If port 5432 is already in use, modify `docker-compose.yml` to use a different port:

```yaml
ports:
  - "5433:5432"
```

Then update your `DATABASE_URL` accordingly.

### Reset Database Completely

```bash
docker-compose down -v
docker-compose up -d
```

This removes all data and recreates the database from scratch.
