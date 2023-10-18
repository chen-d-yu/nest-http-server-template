import { SetMetadata } from '@nestjs/common';
import { CACHE_KEY } from './canstant/cache';

export const IsCanCache = (canCache: boolean) =>
  SetMetadata(CACHE_KEY, canCache);
