import Router from "@koa/router";
import { registerHealthRoutes } from "./modules/health.routes";

export function createRootRouter(): Router {
  const router = new Router();

  registerHealthRoutes(router);

  router.get("/", async (ctx) => {
    ctx.body = { message: "Hello from Koa + TypeScript" };
  });

  return router;
}
