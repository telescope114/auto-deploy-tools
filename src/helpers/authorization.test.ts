import { describe, expect, it } from "vitest";
import { checkAuthorization } from "./authorization";
import { userList } from "../constants/userList";

describe("checkAuthorization", () => {
  it("check authorization", () => {
    const encryptedText =
      "U2FsdGVkX1/LsnR8AIZjbhdsBt1KhUHh354PWiQ3/XhIhlhU5EH+bVtl7eh7nJFUfscgi9EkA3sh41w6f95UAr7WsBpZ4ZjtcV8zx3Yml9ARUeCRR2GTEGB4nuydQmOr";
    const errorEncryptedText = "error";

    expect(checkAuthorization(encryptedText)).toEqual(userList[0]);
    expect(checkAuthorization(errorEncryptedText)).toBe(false);
  });
});
