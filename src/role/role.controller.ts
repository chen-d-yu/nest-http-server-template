import { Controller, Get, SetMetadata } from '@nestjs/common';
import { RoleService } from './role.service';
import { Roles } from './role.decorator';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  //  @SetMetadata('roles', ['admin']) // roles为键，['admin']为值
  @Roles('admin')
  findAll() {
    return 'get method';
  }
}
