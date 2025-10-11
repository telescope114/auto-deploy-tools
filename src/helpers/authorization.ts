import { userInfoMap } from "../constants/userList";
import type { User } from "../types/user";
import { decryptionUserInfo } from "./encryption";

export const checkAuthorization = (encryptedAuthorizationText: string): User | false => {
  try {
    const decryptedUserInfo = JSON.parse(decryptionUserInfo(encryptedAuthorizationText)) as User;
    const userInfo = userInfoMap.get(decryptedUserInfo.name);

    if (userInfo) return JSON.parse(userInfo);

    return false;
  } catch {
    return false;
  }
};
