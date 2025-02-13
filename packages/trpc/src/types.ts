import { type initTRPC } from '@trpc/server';

export type BaseRouter = ReturnType<ReturnType<typeof initTRPC.create>['router']>;