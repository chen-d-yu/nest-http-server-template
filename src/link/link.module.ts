import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { LinkMiddleware } from './components/link.middleware';

@Module({
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LinkMiddleware).forRoutes('link');
  }
}
