import { AppDataSource } from '../../../data-source';
import { DataSource } from 'typeorm';
import{ createUserService }from "../../../services/users/createUser.service"


describe('Create an user', ()=>{
    let connection: DataSource

    beforeAll(async ()=>{
        await AppDataSource.initialize()
        .then((res)=>(connection = res))
        .catch((err) =>{
            console.error('Error during Data Source initialization', err)
        })
    })

    afterAll(async () =>{
        await connection.destroy()
    })

  test('Should insert the information of new user in the database', async () =>{
    const name = 'test';
    const email = 'test@gmail';
    const password = '123';
    const birthdate = new Date("06/03/2020");
    const avatarUrl = 'test';

    const userData = {name, email, password, birthdate, avatarUrl}

    const newUser = await createUserService(userData);

    expect(newUser).toEqual(
      expect.objectContaining({
        id:1,
        name,
        email,
        password,
        birthdate,
        avatarUrl,
        active: true,
        createdAt: 2022-7-18,
        updatedAt: 2022-7-18,

      })
    )

  })
})
