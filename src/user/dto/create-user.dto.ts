import { IsString, IsNotEmpty, Matches } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: "姓名不能为空"
  })
  name: string;

  @IsNotEmpty({ message: "手机号不能为空" })
  @Matches(/^1[3456789]\d{9}$/, {
    message: "手机号格式不正确"
  })
  phone: string;
}
