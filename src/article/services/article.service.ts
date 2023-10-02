import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Article } from "../entities/article.entity";
import { Repository } from "typeorm";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>
  ) {}

  /**
   * 查询所有文章
   * @returns
   */
  findAll() {
    return this.articleRepository.find();
  }

  /**
   * 根据id查询文章
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.articleRepository.findOne({ where: { id } });
  }

  /**
   * 新建文章
   * @param article
   * @returns
   */
  create(article: Article) {
    return this.articleRepository.save(article);
  }

  /**
   * 根据id更新文章
   * @param id
   * @param article
   * @returns
   */
  update(id: number, article: Article) {
    return this.articleRepository.update(id, article);
  }

  /**
   * 根据id删除文章
   * @param id
   * @returns
   * */
  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
