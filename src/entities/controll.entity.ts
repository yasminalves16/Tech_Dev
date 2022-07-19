import { Entity, JoinColumn, ManyToOne,  OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Friend } from "./friend.entity";

@Entity("controll")

export class FriendControll {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.friends)
  userId: User;

  @OneToOne((type) => Friend)
  @JoinColumn()
  followFriendId: Friend;

}
