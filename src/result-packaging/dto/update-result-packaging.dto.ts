import { PartialType } from '@nestjs/mapped-types';
import { CreateResultPackagingDto } from './create-result-packaging.dto';

export class UpdateResultPackagingDto extends PartialType(CreateResultPackagingDto) {}
