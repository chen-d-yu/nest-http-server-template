import { Injectable } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class ConfigService {
  constructor() {}

  get(key: string): string {
    if (!(key in process.env)) {
      return undefined;
    }

    return process.env[key];
  }
}
