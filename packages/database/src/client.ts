import { PrismaClient } from '@prisma/client';

const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development'
} as const;

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" 
        ? ["query", "error", "warn"] 
        : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;