import type { RouterContext } from "@koa/router";

// 错误响应体类型定义
export interface ErrorResponseBody {
  message: string;
  code?: string;
  timestamp?: string;
}

// 获取服务器异常响应体
export const getServerErrorBody = (error: Error): ErrorResponseBody => {
  return {
    message: error.message,
    code: "SERVER_ERROR",
    timestamp: new Date().toISOString(),
  };
};

// 获取认证失败响应体
export const getAuthenticationFailedBody = (): ErrorResponseBody => {
  return {
    message: "Authentication failed",
    code: "AUTH_FAILED",
    timestamp: new Date().toISOString(),
  };
};

// 处理服务器异常
export const requestError = async (ctx: RouterContext, error: Error): Promise<void> => {
  ctx.status = 500;
  ctx.body = getServerErrorBody(error);
};

// 处理认证失败
export const authenticationFailed = async (ctx: RouterContext): Promise<void> => {
  ctx.status = 401;
  ctx.body = getAuthenticationFailedBody();
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
  };
};
