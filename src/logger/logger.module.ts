import { DynamicModule, Module } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { createOptionProvider, LOG4J_OPTION } from "./logger.constant";
import { LoggerModuleOptions } from "./logger.interface";
import { log4jConfig } from "../config/log4j";

@Module({
  providers: [LoggerService],
  exports: [LoggerService]
})
export class LoggerModule {
  static footRoot(options?: LoggerModuleOptions): DynamicModule {
    const log4jConfiguration = Object.keys(options.log4jConfiguration).length
      ? options.log4jConfiguration
      : log4jConfig;

    const optionProvider = createOptionProvider(log4jConfiguration);

    return {
      module: LoggerModule,
      global: options.isGlobal,
      providers: [LoggerService, optionProvider],
      exports: [LoggerService]
    };
  }
}
