export interface IUserRequest {
    name: string
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

export interface IUpdateUser {
    name?: string
    email?: string
    password?: string
    birthdate?: Date
    avatarurl?: string
}