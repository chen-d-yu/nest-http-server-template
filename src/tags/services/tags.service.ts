import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tags } from "../entities/tags.entity";
import { Repository } from "typeorm";

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tags)
    private readonly tagRepository: Repository<Tags>
  ) {}

  /**
   * 查询所有tag
   * @returns
   */
  getAll() {
    return this.tagRepository.find();
  }

  /**
   * 新建tag行记录
   * @param tag
   * @returns
   */
  create(tag: Tags) {
    return this.tagRepository.save(tag);
  }

  /**
   * 根据id更新tag
   * @param id
   * @param tag
   * @returns
   */
  updateById(id: number, tag: Tags) {
    return this.tagRepository.update(id, tag);
  }

  /**
   * 根据id删除tag记录
   * @param id
   * @returns
   */
  deleteById(id: number) {
    return this.tagRepository.delete(id);
  }
}
