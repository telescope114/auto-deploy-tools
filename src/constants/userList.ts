import type { User } from "../types/user";

export const userList: User[] = [
  {
    name: "张三",
    email: "san.zhang@example.com",
    password: "123456",
  },
  {
    name: "李四",
    email: "si.li@example.com",
    password: "password",
  },
];

export const userInfoList: Map<string, string> = new Map(
  userList.map((user) => [user.name, JSON.stringify(user)]),
);
