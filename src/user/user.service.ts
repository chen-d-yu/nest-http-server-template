import { Injectable } from "@nestjs/common";
import { users } from "../constants/user.mock";

@Injectable()
export class UserService {
  findOne(id: number) {
    return users.find((item) => item.id === id);
  }

  findOneByName(name: string) {
    return users.find((item) => item.name === name);
  }
}
