import type Router from "@koa/router";
import { getHealth } from "../../controllers/health.controller";

export const registerHealthRoutes = (router: Router): void => {
  router.get("/health", getHealth);
};
