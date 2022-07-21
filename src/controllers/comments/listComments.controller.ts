import { instanceToPlain } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import listCommentsService from "../../services/comments/listComments.service";

const listCommentsController = async (req: Request, res: Response, next: NextFunction ) =>{
  try {
    const postId = req.params.postId
    const comments = await listCommentsService(postId)

    return res.status(200).json(instanceToPlain(comments))
  } catch (error) {
    next(error)
  }
}

export default listCommentsController