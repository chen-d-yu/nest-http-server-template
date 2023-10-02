import { Module } from "@nestjs/common";
import { Article } from "./entities/article.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
})
export class ArticleModule {}
