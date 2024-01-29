import { Injectable, Module } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { DogsController } from "./dogs.controller";

@Injectable()
class ConfigOptionProvider {
  private readonly config: Record<string, any> = {
    key1: "value1",
    key2: "value2"
  };

  get(key: string) {
    return this.config[key];
  }
}

@Module({
  controllers: [DogsController],
  providers: [
    DogsService,
    ConfigOptionProvider,
    // {provide:"doSomeThing",useValue:"doSomeThing"}, // 即使依赖没有完成注册也不会报错，因为该提供者是可选的
    {
      provide: "FACTORY_PROVIDER_TOKEN",
      useFactory: (config: ConfigOptionProvider, optionalProvider?: string) => {
        const options = config.get("key1");

        console.log(optionalProvider); // undefined
      },
      inject: [ConfigOptionProvider, { token: "doSomeThing", optional: true }]
    }
  ]
})
export class DogsModule {}
