import type { Configuration } from "log4js";

export interface LoggerModuleOptions {
  log4jConfiguration?: Configuration;
  isGlobal?: boolean;
}

export class LoggerContext {
  name: string;
}
