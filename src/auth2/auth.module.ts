import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as user from '../data/user.json';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStragety } from './local.stragety';
const TOKEN_SECRET = '123456';

@Module({
  providers: [
    {
      provide: 'userData',
      useValue: user,
    },
    LocalStragety,
    AuthService,
  ],
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: TOKEN_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    }),
    PassportModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
