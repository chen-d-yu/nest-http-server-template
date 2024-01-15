import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateTagDto extends PartialType(CreateUserDto) {}
