import Router from "@koa/router";
import authorizationController from "../../controllers/authorization.controller";

export const registerAuthorizationRoutes = (router: Router): void => {
  router.post("/login", authorizationController.getLogin);
  router.all("/test-authorization", authorizationController.testAuthorization);
};
