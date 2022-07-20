import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("controll")

export class FollowControll {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.follows)
  user: User;

  @ManyToOne((type) => User, (user) => user.followers)
  follow: User
}
