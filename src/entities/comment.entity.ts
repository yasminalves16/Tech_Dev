
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";
import { Answer } from "./answerComents.entity";

@Entity('comments')

export class Comment{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Answer, (answers) => answers.comment)
  answer: Answer[];

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
}