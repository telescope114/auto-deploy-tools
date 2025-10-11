import CryptoJS from "crypto-js";

export const encryptionUserInfo = (unencryptedText: string, encryptedKey: string) => {
  return CryptoJS.AES.encrypt(unencryptedText, encryptedKey).toString();
};

export const decryptionUserInfo = (encryptedText: string, encryptedKey: string) => {
  return CryptoJS.AES.decrypt(encryptedText, encryptedKey).toString(CryptoJS.enc.Utf8);
};
