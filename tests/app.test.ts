import request from "supertest";
import { describe, it, expect } from "vitest";
import { createApp } from "../src/app";

describe("GET /health", () => {
  it("returns ok", async () => {
    const app = createApp();
    const response = await request(app.callback()).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});
