import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TagsModule } from "./tags/tags.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "123456",
      database: "nestdemo",
      entities: [__dirname + "/**/*.entity{.ts,.js}"], // 批量注册实体类
      synchronize: true, // 根据实体自动创建数据库表， 生产环境建议关闭，只开启此选项并不会替你创建数据库表，还必须在模块中使用feature功能，注入实体模块依赖
      autoLoadEntities: true, //自动加载实体，如果entities中匹配了全局路径，该选项可以关闭
      logging: true,
    }),
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
