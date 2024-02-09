import { Inject, Injectable, LoggerService as NestLoggerService } from "@nestjs/common";
import { getLogger, Logger, shutdown, configure, Configuration } from "log4js";
import { LOG4J_OPTION } from "./logger.constant";
import StackTrace from "stacktrace-js";
import Path from "path";

@Injectable()
export class LoggerService implements NestLoggerService {
  private loggers: Map<string, Logger>;

  constructor(@Inject(LOG4J_OPTION) log4jConfig?: Configuration) {
    this.loggers = new Map();

    configure(log4jConfig);
  }

  private getLogger(categoryName: string = "default"): Logger {
    let logger = this.loggers.get(categoryName);
    if (!logger) {
      logger = getLogger(categoryName);
      this.loggers.set(categoryName, logger);
    }
    return logger;
  }

  private getContext(...args: any[]) {
    const lastArg = args.at(-1);
    if (typeof lastArg === "object" && "name" in lastArg) {
      return lastArg.name;
    }
  }

  // 日志追踪，可以追溯到哪个文件、第几行第几列
  private getStackTrace(deep = 2): string {
    const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
    const stackInfo: StackTrace.StackFrame = stackList[deep];

    const lineNumber: number = stackInfo.lineNumber;
    const columnNumber: number = stackInfo.columnNumber;
    const fileName: string = stackInfo.fileName;
    const basename: string = Path.basename(fileName);
    return `${basename}(line: ${lineNumber}, column: ${columnNumber}): \n`;
  }

  public trace(...args: any[]) {
    this.getLogger(this.getContext(args)).trace(this.getStackTrace(), ...args);
  }

  public debug(...args) {
    this.getLogger(this.getContext(args)).debug(this.getStackTrace(), ...args);
  }

  public log(...args) {
    this.getLogger(this.getContext(args)).log(this.getStackTrace(), ...args);
  }

  public info(...args) {
    this.getLogger(this.getContext(args)).info(this.getStackTrace(), ...args);
  }

  public warn(...args) {
    this.getLogger(this.getContext(args)).warn(this.getStackTrace(), ...args);
  }

  public error(...args) {
    this.getLogger(this.getContext(args)).error(this.getStackTrace(), ...args);
  }

  public fatal(...args) {
    this.getLogger(this.getContext(args)).fatal(this.getStackTrace(), ...args);
  }

  public access(...args) {
    this.getLogger("http").info(this.getStackTrace(), ...args);
  }

  public flushall(cb?: () => void) {
    shutdown(() => {
      cb && cb();
    });
  }
}
