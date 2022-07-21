import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import createPostService from "../../../services/posts/createPost.service";
import { IPostRequest } from "../../../interfaces/posts";
import { Teste } from "../userTestClass";
import updatePostService from "../../../services/posts/updatePost.service";





describe("Manipulate Post", () => {
    
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
  
  test("Should be able to update a post", async () => {    
        
    const post: IPostRequest = {
        description: "Hello World",
        media: "Hello media"
    }



    const teste = new Teste()
    const idUser = await teste.loginUser()    
    const createdPost = await createPostService( post,idUser)

    if(createdPost.id){
        const updatedPost = await updatePostService(createdPost.id, idUser, "Hello Change Post", "media change")

        expect(updatedPost).toHaveProperty("id")
        expect(updatedPost.description).toBe("Hello Change Post")
        expect(updatedPost.media).toBe("media change") 
    }

  })

   

})