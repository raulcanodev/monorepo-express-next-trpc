import { router, publicProcedure } from '@repo/trpc';
import { prisma } from '@repo/database';
import { z } from 'zod';

export const userRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}`;
    }),

  // Get all posts
  getPosts: publicProcedure.query(async () => {
    return await prisma.post.findMany();
  }),
});