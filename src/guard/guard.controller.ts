import { Controller, Get, UseGuards } from '@nestjs/common';
import { GuardService } from './guard.service';
import { RoleGuard } from './role/role.guard';

@Controller('guard')
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Get('test')
  @UseGuards(RoleGuard)
  findAll() {
    return '通过守卫';
  }
}
