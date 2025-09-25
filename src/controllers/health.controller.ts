import { RouterContext } from "@koa/router";
import { getHealthStatus } from "../services/health.service";

export async function getHealth(ctx: RouterContext): Promise<void> {
  const data = getHealthStatus();
  ctx.status = 200;
  ctx.body = data;
}
