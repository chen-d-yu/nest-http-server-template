import { Controller, Get, Inject, Optional } from "@nestjs/common";
import { BirdService } from "./bird.service";

interface AppConfig {
  apiKey: string;
  apiUrl: string;
}

@Controller("bird")
export class BirdController {
  constructor(
    private readonly boridService: BirdService,
    @Optional()
    @Inject("MOCK_TOKEN")
    private readonly mockTokenService: AppConfig = { apiKey: "apiKey", apiUrl: "apiUrl" }
  ) {}

  @Get()
  find() {
    console.log(this.mockTokenService);
    return this.mockTokenService;
  }
}
