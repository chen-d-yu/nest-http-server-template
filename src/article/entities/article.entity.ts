import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  title: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  content: string;

  @Column({
    type: "varchar",
    length: 100,
  })
  desc: string;

  @Column({
    type: "varchar",
    length: 100,
  })
  cover_image: string;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;
}
