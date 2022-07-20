import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer"
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";
import { Answer } from "./answerComents.entity";
import { FollowControll } from "./controll.entity";

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  birthdate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({nullable: true})
  avatarUrl?: string;

  @Column("boolean", { default: true })
  active: boolean;

  @OneToMany((type) => Post, (post) => post.user)
  posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[]

  @OneToMany((type) => Answer, (answers) => answers.user)
  answer: Answer[];

  @OneToMany((type) => FollowControll, (followControll) => followControll.user)
  follows: FollowControll[];

  @OneToMany((type) => FollowControll, (followControll) => followControll.follow)
  followers: FollowControll[];
 
}
