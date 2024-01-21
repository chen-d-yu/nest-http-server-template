class ErrorCode {
  readonly #code: number;
  readonly #msg: string;
  readonly #errorCode: string;
  constructor(code: number, errorCode: string, msg: string) {
    this.#code = code;
    this.#msg = msg;
    this.#errorCode = errorCode;
  }

  get msg() {
    return this.#msg;
  }

  get code() {
    return this.#code;
  }
  get errorCode() {
    return this.#errorCode;
  }
}

export const AUTH_TOKEN_EXPIRED = new ErrorCode(4030000002, "AUTH_TOKEN_EXPIRED", "TOKEN 已经过期或失效");
