import { createUserService } from '../../../services/users/createUser.service';
import { IUserLogin, IUserRequest } from "../../../interfaces/users";
import userLoginService from "../../../services/login/userLogin.service";
import jwt from "jsonwebtoken"




export class Teste{
   async createUser(){
        const userCreate: IUserRequest = {
            birthdate: new Date(),
            email: "fabio@kenzie.com",
            name: "Fabio",
            password: "1234"
        }
        const newUser = await createUserService(userCreate)
    }

   async loginUser(){

        await this.createUser()

        const userData: IUserLogin = {       
            email: "fabio@kenzie.com",       
            password: "1234"
        }
    
        let id = ''
        const token = await userLoginService(userData)
        jwt.verify(token, "SECRET_KEY", (error: any, decoded: any) => {           
            
            id = decoded.id           
             
         })
         return id
    }
}