import { userInfoMap } from "../constants/userList";
import type { User } from "../types/user";
import { decryptText } from "./encryption";

export const checkAuthorization = (encryptedAuthorizationText: string): User | false => {
  try {
    const decryptedUserInfo = JSON.parse(decryptText(encryptedAuthorizationText)) as User;
    const userInfo = userInfoMap.get(decryptedUserInfo.name);

    if (userInfo) return JSON.parse(userInfo);

    return false;
  } catch {
    return false;
  }
};
