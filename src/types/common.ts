export interface ResponseBody {
  message: string;
  code?: string;
  data?: any;
  timestamp?: string;
}

export interface ErrorResponseBody {
  message: string;
  code?: string;
  timestamp?: string;
}
