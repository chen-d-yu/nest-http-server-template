import { Configuration } from "log4js";
import { Provider } from "@nestjs/common";

export const LOG4J_OPTION = Symbol("LOG4JS_OPTION");
export function createOptionProvider(options?: Configuration): Provider {
  return {
    provide: LOG4J_OPTION,
    useFactory: function () {
      return options;
    }
  };
}
