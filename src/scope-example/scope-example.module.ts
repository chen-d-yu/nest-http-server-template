import { Module } from "@nestjs/common";
import { ScopeExampleService } from "./scope-example.service";
import { ScopeExampleController } from "./scope-example.controller";
import { BController } from "./b.controller";
import { CController } from "./c.controller";
import { AService } from "./a.service";

@Module({
  controllers: [ScopeExampleController, BController, CController],
  providers: [ScopeExampleService, AService]
})
export class ScopeExampleModule {}
