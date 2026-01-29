import type { RouterContext } from "@koa/router";

export const getLogs = async (ctx: RouterContext): Promise<void> => {
  try {
    const query = ctx.request.query;

    if (query.month) {
    }
  } catch (error) {}
};
