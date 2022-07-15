import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";
import { v4 as uuid } from "uuid";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  description: string;

  @Column()
  media: string;

  @ManyToOne((type) => User, (user) => user.posts)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[]
}
