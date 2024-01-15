import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: '姓名不能为空',
  })
  name: string;

  @IsNumber()
  age: number;

  sex: number;
}
