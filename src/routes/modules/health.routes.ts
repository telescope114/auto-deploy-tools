import Router from "@koa/router";
import { getHealth } from "../../controllers/health.controller";

export function registerHealthRoutes(router: Router): void {
  router.get("/health", getHealth);
}
