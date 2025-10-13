import type { RouterContext } from "@koa/router";
import type { User } from "../types/user";
import { userList, userInfoMap } from "../constants/userList";
import { badRequest, requestError, requestSuccess } from "./common.controller";
import { encryptText } from "../helpers/encryption";
import { checkAuthorization } from "../helpers/authorization";

export const getLogin = async (ctx: RouterContext): Promise<void> => {
  try {
    const { name, password } = ctx.request.body as User;

    const user = userList.find(
      (user) => (user.name === name || user.email === name) && user.password === password,
    );

    if (user) {
      void requestSuccess(ctx, { authentication: encryptText(userInfoMap.get(user.name)!) });
    } else {
      void badRequest(ctx, new Error("账号密码错误"));
    }
  } catch {
    void requestError(ctx, new Error("服务器异常"));
  }
};

export const testAuthorization = async (ctx: RouterContext): Promise<void> => {
  const user = checkAuthorization(ctx.request.headers?.authorization ?? "");

  if (user) {
    requestSuccess(ctx, "认证成功");
  } else {
    badRequest(ctx, new Error("认证失败"));
  }
};

export default {
  getLogin,
  testAuthorization,
};
