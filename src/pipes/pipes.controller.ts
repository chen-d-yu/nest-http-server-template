import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { PipesService } from './pipes.service';
import { CustomValidationPipe } from './common/custom-validationPipe.pipe';

enum Gender {
  male = 'male',
  female = 'female',
}

@Controller('pipes')
@UsePipes(new CustomValidationPipe())
export class PipesController {
  constructor(private readonly pipesService: PipesService) {}

  //  @Get()
  //  findOne(
  //    @Query('id', new DefaultValuePipe(0))
  //    id: number,
  //  ) {
  //    console.log(typeof id);
  //    console.log(id);
  //    return this.pipesService.findOne(id);
  //  }

  // ParseFloatPipe
  //  @Post()
  //  findOne(
  //    @Body('num', ParseFloatPipe)
  //    num: number,
  //  ) {
  //    console.log(typeof num);
  //    console.log(num);
  //    return num;
  //  }

  // ParseBoolPipe
  //  @Post()
  //  findOne(
  //    @Body('flag', ParseBoolPipe)
  //    flag: boolean,
  //  ) {
  //    console.log(typeof flag);
  //    console.log(flag);
  //    return flag;
  //  }

  // ParseArrayPipe
  //  @Post()
  //  findOne(
  //    @Body(
  //      'arr',
  //      new ParseArrayPipe({
  //        items: String,
  //        separator: ',',
  //      }),
  //    )
  //    arr: string[],
  //  ) {
  //    console.log(typeof arr);
  //    console.log(arr);
  //    return arr;
  //  }

  // ParseEnumPipe
  //  @Post()
  //  findOne(@Body('gender', new ParseEnumPipe(Gender)) gender: Gender) {
  //    console.log(typeof gender);
  //    console.log(gender);
  //    return gender;
  //  }

  // ValidationPipe自定义管道
  @Get()
  findOne(
    @Query(
      'id',
      // , new CustomValidationPipe() // 参数作用域
    )
    id: number,
  ) {
    console.log(typeof id);
    console.log(id);
    return this.pipesService.findOne(id);
  }
}
