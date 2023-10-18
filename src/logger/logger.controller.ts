import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { LoggerService } from './logger.service';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';
import { LoggerInterceptor } from './logger.interceptor';

@Controller('logger')
//@UseInterceptors(LoggerInterceptor)
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Get()
  @UseInterceptors(LoggerInterceptor)
  findAll() {
    return this.loggerService.findAll();
  }
}
