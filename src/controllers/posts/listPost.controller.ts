import { Request, Response } from "express"
import listPostsService from "../../services/posts/listPost.service"

export const listPostController = async (req:Request, res: Response) => {
   
        const {page, take} = req.query
        const posts = await listPostsService(page,take)
        return res.json(posts)    
}