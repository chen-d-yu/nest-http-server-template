import { Injectable } from "@nestjs/common";
import * as Mock from "mockjs";

@Injectable()
export class UserService {
  findAll() {
    return Mock.mock({
      "list|10": [
        {
          "id|+1": 1,
          name: "@cname",
          email: "@email"
        }
      ]
    });
  }
}
