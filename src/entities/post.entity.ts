import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

//falta a entidade User

@Entity()
export class Post {
  @PrimaryColumn("uuid")
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
