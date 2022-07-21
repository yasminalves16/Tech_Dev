import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { createUserService } from '../../../services/users/createUser.service';
import { IUserLogin, IUserRequest } from "../../../interfaces/users";
import deleteUserService from '../../../services/users/deleteUser.service'
import { AppError } from "../../../errors/AppError"
import userLoginService from "../../../services/login/userLogin.service";



describe("Manipulate user", () => {
    
  let connection: DataSource

  beforeAll(async() => {
      await AppDataSource.initialize().then((res) => {
          connection = res
      }).catch((err) => {
          console.error("Error during Data Source initialization", err)
      })
  })

  afterAll(async() => {
      await connection.destroy()
  })
  
  test("Should be able to create an user", async () => {
      const userData: IUserRequest = {
          birthdate: new Date(),
          email: "fabio@kenzie.com",
          name: "Fabio",
          password: "1234"
      }

      const newUser = await createUserService(userData)

      expect(newUser).toHaveProperty("id")
      expect(newUser.name).toBe("Fabio")
      

  })

  test("Should be able to thown an error in case of user not found", async () => {
      try {
          const userId = uuidv4()
          await deleteUserService(userId)
      } catch (error) {
          if(error instanceof AppError){
              expect(error.message).toBe("User not found")
          }
      }
  })

  test("Should be able to login", async () => {
    const userData: IUserLogin = {       
        email: "fabio@kenzie.com",       
        password: "1234"
    }

    
    const token = await userLoginService(userData)

    expect(token).toBeTruthy()
    
})

})