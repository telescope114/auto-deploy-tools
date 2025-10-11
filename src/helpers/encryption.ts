import CryptoJS from "crypto-js";

export const encryptedKey = "longlonglongtest";

export const encryptionUserInfo = (unencryptedText: string) => {
  return CryptoJS.AES.encrypt(unencryptedText, encryptedKey).toString();
};

export const decryptionUserInfo = (encryptedText: string) => {
  return CryptoJS.AES.decrypt(encryptedText, encryptedKey).toString(CryptoJS.enc.Utf8);
};
