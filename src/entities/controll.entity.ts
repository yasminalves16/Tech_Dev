import { Column, Entity, JoinColumn, ManyToOne,  OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
// import { Friend } from "./friend.entity";

@Entity("controll")

export class FollowControll {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.follows)
  user: User;

  // @OneToOne((type) => Friend)
  // @JoinColumn()
  // followFriendId: Friend;

  @ManyToOne((type) => User, (user) => user.followers)
  follow: User
}
