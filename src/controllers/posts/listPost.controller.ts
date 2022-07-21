import { instanceToPlain } from "class-transformer"
import { NextFunction, Request, Response } from "express"
import listPostsService from "../../services/posts/listPost.service"

export const listPostController = async (req:Request, res: Response, next:NextFunction) => {
        try{
         const {page, take} = req.query
         const posts = await listPostsService(page,take)
         return res.json(instanceToPlain(posts)) 
        } catch(error){
              next(error)
          }
           
}