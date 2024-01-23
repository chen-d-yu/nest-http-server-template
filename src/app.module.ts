import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JwtModule } from "@nestjs/jwt";
import { TOKEN_SECRET } from "./constants/config";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: TOKEN_SECRET,
        signOptions: { expiresIn: "1d" }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
