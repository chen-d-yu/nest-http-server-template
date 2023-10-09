import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardModule } from './guard/guard.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [GuardModule, AuthModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
