import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Tags {
  @PrimaryGeneratedColumn() // 自增主键
  id: number;

  @Column({
    type: "varchar",
    length: 100,
  })
  name: string;

  @CreateDateColumn() // CreateDateColumn特殊列，创建对象自动插入当前时间
  create_time: Date;

  @UpdateDateColumn() // UpdateDateColumn特殊列，更新对象时自动插入当前时间
  update_time: Date;
}
