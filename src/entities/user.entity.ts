import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer"

@Entity('users')
@Unique(['email'])

export class User{
  @PrimaryGeneratedColumn('uuid')
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

  @Column()
  avatarUrl: string;

  @Column()
  active: boolean;

  //verificar se estão corretos os relacionamentos, e não sei como adicionar o isActive na jointable se alguem souber tamo junto 
/* 
  @OneToMany((type) => Post, post => post.user)
  posts: Post[]

  @OneToMany((type) => Comment, commet => comment.user)
  comments: Comment[]

  @ManyToMany((type) => FollowFriends, followFriend => followFriend.user)
  @JoinTable({
    name: "controll",
    joinColumn:{
      name: 'userId',
      referencedColumnName: "id"
    },
    inverseJoinColumn:{
      name: 'followFriendId'
    },
  }) */

}