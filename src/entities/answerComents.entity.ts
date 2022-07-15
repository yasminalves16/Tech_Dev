import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity("answers")

export class Answer{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => Comment, (comment) => comment.answer)
  comment: Comment;

  @ManyToOne((type) => User, (user) => user.answer)
  user: User;
}