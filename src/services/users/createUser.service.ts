import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUser } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";
import { AppError } from "../../errors/AppError"


export const createUserService = async ({name,email,password,birthdate}: IUserRequest): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExists = await userRepository.findOneBy({
        email,
    });

    if (userAlreadyExists) {
        throw new AppError("Email already exists");
    }

    if (!name || !email || !password || !birthdate) {
        throw new AppError("Missing field");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
        name,
        email,
        birthdate,
        password: hashedPassword,
        avatarUrl: undefined,
        active: true
    });

    await userRepository.save(newUser);

    return newUser;
};
