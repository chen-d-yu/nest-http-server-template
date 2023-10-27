import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import * as user from '../data/user.json';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStragety } from './local.stragety';
import { jwtConstants } from './constant';
import { JwtStrategy } from './jwt.stragety';

@Module({
  providers: [
    {
      provide: 'userData',
      useValue: user,
    },
    LocalStragety,
    JwtStrategy,
    AuthService,
  ],
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1d' },
      }),
    }),
    PassportModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
