import { Controller } from "@nestjs/common";
import { ScopeExampleService } from "./scope-example.service";

@Controller("scope-example")
export class ScopeExampleController {
  constructor(private readonly scopeExampleService: ScopeExampleService) {}
}
