import { Module } from "@nestjs/common";
import { TagsService } from "./services/tags.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tags } from "./entities/tags.entities";

@Module({
  providers: [TagsService],
  imports: [TypeOrmModule.forFeature([Tags])],
})
export class TagsModule {}
