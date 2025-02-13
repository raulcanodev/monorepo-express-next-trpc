## Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [NodeJS](https://nodejs.org/en/download/)

## First Step

### 1. Clone this repo

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up local database
This will create a docker container.

```bash
# Copy the environment file
cp packages/database/.env.example packages/database/.env
```

```bash
# Make the database script executable
chmod +x scripts/create-database.sh

# Start PostgreSQL in Docker
pnpm db:start
```

### Initialize database
```bash
# Generate Prisma Client
cd packages/database
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed the database (optional)
pnpm db:seed

# Return to root
cd ../..
```

## Start the development servers

```bash
pnpm dev
```

## The application should now be running at:

Frontend: http://localhost:3000

Backend: http://localhost:4000

## Project Structure

```md
.
├── apps/
│   ├── server/        # Express backend
│   └── web/          # Next.js frontend
├── packages/
│   ├── database/     # Prisma schema and client
│   └── trpc/        # tRPC router and types
└── scripts/
    └── create-database.sh        # Database setup script
```
