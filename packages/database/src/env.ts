export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development'
} as const;