import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@repo/server'; 

export const trpc = createTRPCReact<AppRouter>();