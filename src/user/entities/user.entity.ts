import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column({
    type: "varchar",
    length: 100,
  })
  username: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  password: string;

  @Column({
    type: "varchar",
    length: 100,
  })
  email: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;
}
