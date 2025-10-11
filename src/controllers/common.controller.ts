import type { RouterContext } from "@koa/router";
import type { ResponseBody, ErrorResponseBody } from "../types/common";

// 处理请求成功
export const requestSuccess = async (ctx: RouterContext, data: any): Promise<void> => {
  ctx.status = 200;
  ctx.body = {
    message: "Request Success",
    code: "REQUEST_SUCCESS",
    data,
    timestamp: new Date().toISOString(),
  } as ResponseBody;
};

// 处理客户端请求错误
export const badRequest = async (ctx: RouterContext, error?: Error): Promise<void> => {
  ctx.status = 400;
  ctx.body = {
    message: error?.message ?? "Bad Request",
    code: "BAD_REQUEST",
    timestamp: new Date().toISOString(),
  } as ErrorResponseBody;
};

// 处理认证失败
export const authenticationFailed = async (ctx: RouterContext): Promise<void> => {
  ctx.status = 401;
  ctx.body = {
    message: "Authentication failed",
    code: "AUTH_FAILED",
    timestamp: new Date().toISOString(),
  } as ErrorResponseBody;
};

// 处理服务器异常
export const requestError = async (ctx: RouterContext, error: Error): Promise<void> => {
  ctx.status = 500;
  ctx.body = {
    message: error.message,
    code: "SERVER_ERROR",
    timestamp: new Date().toISOString(),
  } as ErrorResponseBody;
};

// 通用错误处理函数
export const handleError = async (
  ctx: RouterContext,
  error: Error,
  statusCode: number = 500,
  customMessage?: string,
): Promise<void> => {
  ctx.status = statusCode;
  ctx.body = {
    message: customMessage || error.message,
    code: error.name || "UNKNOWN_ERROR",
    timestamp: new Date().toISOString(),
  } as ErrorResponseBody;
};
