import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import createPostService from "../../../services/posts/createPost.service";
import { IPostRequest } from "../../../interfaces/posts";
import { Teste } from "../userTestClass";
import listPostsService from "../../../services/posts/listPost.service";




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
  
  test("Should be able to create a post", async () => {  

    const post: IPostRequest = {
            description: "Hello World",
            media: "Hello media"
    }
    
    const teste = new Teste()
    const idUser = await teste.loginUser()    
        
    const createdPost = await createPostService( post,idUser)
      expect(createdPost).toHaveProperty("id")
      expect(createdPost.description).toBe("Hello World")
      expect(createdPost.media).toBe("Hello media")     

  })
  
  test("Should be able to list posts", async () => {         
      
        
    const listPost = await listPostsService(undefined,undefined)
      expect(listPost).toHaveProperty("statusCode")      
      expect(listPost.posts.length).toBe(1)  
  })

   

})