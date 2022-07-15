import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
