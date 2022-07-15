export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  birthdate: Date;
  avatarUrl?: string;
}
export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}
export interface IUserLogin {
  email: string;
  password: string;
}
