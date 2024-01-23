// 异常枚举
class ErrorCode {
  readonly #code: number;
  readonly #message: string;
  readonly #errorCode: string;
  constructor(code: number, errorCode: string, msg: string) {
    this.#code = code;
    this.#message = msg;
    this.#errorCode = errorCode;
  }

  get message() {
    return this.#message;
  }

  get code() {
    return this.#code;
  }
  get errorCode() {
    return this.#errorCode;
  }
}

export const AUTH_TOKEN_EXPIRED = new ErrorCode(4030000002, "AUTH_TOKEN_EXPIRED", "TOKEN 已经过期或失效");
export const AUTH_PWD_OR_ACCOUNT_ERROR = new ErrorCode(4030000003, "AUTH_PWD_OR_ACCOUNT_ERROR", "账号或密码错误");
