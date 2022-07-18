import { NextFunction, Request, Response } from "express";
import updateCommentService from "../../services/comments/updateComment.service";


const updateCommentController = async (req: Request, res: Response, next: NextFunction ) =>{
    try {

      const id = req.params.postId;
      const { description } = req.body;
      const userId = req.user

      const updateComment = await updateCommentService(id, description, userId)
  
      return res.status(201).json(updateComment)
  
    } catch (error) {
      next(error)
    }
  }
  
  export default updateCommentController