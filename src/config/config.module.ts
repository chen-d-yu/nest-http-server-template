import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigurableModuleClass } from './config.module-definition';
import { ConfigOptions } from './interfaces';
import * as path from 'path';
import * as fs from 'fs';
import * as process from 'process';
import * as dotenv from 'dotenv';
import * as _ from 'lodash';

@Module({
  providers: [ConfigService]
})
export class ConfigModule extends ConfigurableModuleClass {
  static forRoot(options?: ConfigOptions): DynamicModule {
    // 1.读取env配置文件，如未传递文件名称，默认以 root/.env 作为配置文件名称
    const envFilename = !options?.envFilename ? '.env' : options.envFilename;
    const filepath: string = !fs.existsSync(options.folder)
      ? path.resolve(process.cwd(), envFilename)
      : path.resolve(options.folder, envFilename);

    try {
      // 2.将env配置文件的内容设置到process.env中
      const configData = fs.readFileSync(filepath, 'utf-8');
      const envConfig = dotenv.parse(configData);
      this.assignVariablesToProcess(envConfig);
    } catch (e) {
      console.log(e);
    }

    return {
      ...super.forRoot(options)
    };
  }

  /**
   * 将env配置文件的key-value合并到process.env中
   * @param envConfig 配置文件的key-value
   * @private
   */
  private static assignVariablesToProcess(envConfig: Record<string, unknown>) {
    if (!_.isObject(envConfig)) {
      return;
    }

    const keys = Object.keys(envConfig).filter((key) => !(key in process.env));

    keys.forEach((key) => {
      const value = envConfig[key];

      if (typeof value === 'string') {
        process.env[key] = value;
      } else if (typeof value === 'boolean' || typeof value === 'number') {
        process.env[key] = `${value}`;
      }
    });
  }
}
