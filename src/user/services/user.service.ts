import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  /**
   * 根据id查询用户
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.userRepository.find({ where: { id } });
  }

  /**
   * 新建用户
   * @param tag
   * @returns
   */
  create(user: User) {
    return this.userRepository.save(user);
  }

  /**
   * 根据id更新用户
   * @param id
   * @param user
   */
  updateById(id: number, user: User) {
    return this.userRepository.update(id, user);
  }

  /**
   * 根据id删除用户
   * @param id
   * @returns
   */
  deleteById(id: number) {
    return this.userRepository.delete(id);
  }
}
