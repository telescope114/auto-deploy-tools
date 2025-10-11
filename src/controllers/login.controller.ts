// import type { RouterContext } from "@koa/router";
// import { encryptionUserInfo } from "../helpers/encryption";
// import type { User } from "../types/user";
// import { userList, userInfoList } from "../constants/userList";
// import { handleError } from "./common.controller";
//
// export const getLogin = async (ctx: RouterContext): Promise<void> => {
//   try {
//     const { name, password } = ctx.request.body as User;
//
//     const user = userList.find(
//       (user) => (user.name === name || user.email === name) && user.password === password,
//     );
//
//     if (user) {
//       ctx.body = {
//         message: "success",
//         authentication: userInfoList.get(user.name),
//         timestamp: new Date().getTime(),
//       }
//     } else {
//       void handleError(ctx, new Error(""))
//     }
//   } catch (e) {}
// };
