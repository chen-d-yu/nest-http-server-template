import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ScopeExampleService } from "./scope-example.service";
import { AService } from "./a.service";

@Controller("b")
export class BController {
  constructor(private readonly aService: AService) {}

  @Get()
  uodateList(@Query("value") value: string) {
    console.log(value);
    this.aService.pushItem(value);

    return "success";
  }

  @Get('list')
  getList() {
    return this.aService.getList();
  }


}
