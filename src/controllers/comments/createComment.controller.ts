import { NextFunction, Request, Response } from "express";
import createCommentService from "../../services/comments/createComment.service";

const createCommentController = async (req: Request, res: Response, next: NextFunction ) =>{
  try {
    const postId = req.params.postId
    const userId = req.user
    const comment = req.body
    const newComment = await createCommentService(postId,userId,comment)

    return res.status(201).json(newComment)

  } catch (error) {
    next(error)
  }
}

export default createCommentController