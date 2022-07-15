import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()

export class Comment{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @Column()
  // commentId?: Comment

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
}