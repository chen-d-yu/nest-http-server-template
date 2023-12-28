import { Inject, Injectable } from '@nestjs/common';
import { ConfigOptions, EnvConfig } from './interfaces';
import { MODULE_OPTIONS_TOKEN } from './config.module-definition';
import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: ConfigOptions) {
    // TODO 书写逻辑读取options的filePath
    // const isProd = process.env.NODE_ENV === 'production';
    //
    // const filePath = `.env.${!isProd ? 'development' : 'production'}`;
    // const envFile = path.resolve(
    //   __dirname,
    //   '../../src',
    //   options.folder,
    //   filePath,
    // );
    // this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    // console.log(this.envConfig); // 读取配置文件结果
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
