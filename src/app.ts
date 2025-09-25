import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { createRootRouter } from "./routes";

export function createApp(): Koa {
  const app = new Koa();
  const router = createRootRouter();

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
}
