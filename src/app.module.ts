import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";
import { DogsModule } from "./dogs/dogs.module";
import { BirdModule } from "./bird/bird.module";
import { ScopeExampleModule } from './scope-example/scope-example.module';

@Module({
  imports: [CatsModule, DogsModule, BirdModule, ScopeExampleModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
