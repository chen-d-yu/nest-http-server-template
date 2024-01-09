import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController, InfoController } from './user.controller';

@Module({
  controllers: [UserController, InfoController],
  providers: [UserService],
})
export class UserModule {}
