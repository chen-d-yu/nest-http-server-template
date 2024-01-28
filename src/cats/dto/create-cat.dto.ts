import { Cat } from "../interfaces/cat.interface";

export class CreateCatDto implements Cat {
  age: number;
  breed: string;
  name: string;
}
