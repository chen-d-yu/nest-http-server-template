import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkFilter } from './components/link.filter';
import { LinkInterceptor } from './components/link.interceptor';
import { LinkPipe } from './components/link.pipe';
import { LinkGuard } from './components/link.guard';
import { IsNotEmpty } from 'class-validator';

class XXDTO {
  @IsNotEmpty()
  name: string;
}

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  @UseInterceptors(LinkInterceptor)
  @UseGuards(LinkGuard)
  getHello(@Body(LinkPipe) body: XXDTO) {
    console.log('方法内部');
    return 'hello';
  }
}
