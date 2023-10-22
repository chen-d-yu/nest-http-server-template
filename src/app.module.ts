import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [PipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
