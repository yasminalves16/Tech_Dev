export interface IUserRequest {
    nome: string
    email: string
    password: string
    birthdate: Date
    avatarurl?: string
}
export interface IUser extends IUserRequest {
    id: string
    createdAt: Date
    updatedAt: Date
}
export interface IUserLogin {
    email: string
    password: string
}