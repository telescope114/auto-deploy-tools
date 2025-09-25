import Koa from "koa";
import Router, { RouterContext } from "@koa/router";
import bodyParser from "koa-bodyparser";

export function createApp(): Koa {
  const app = new Koa();
  const router = new Router();

  app.use(bodyParser());

  router.get("/health", async (ctx: RouterContext) => {
    ctx.status = 200;
    ctx.body = { status: "ok" };
  });

  router.get("/", async (ctx: RouterContext) => {
    ctx.body = { message: "Hello from Koa + TypeScript" };
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
}
