import { NextFunction, Request, Response } from "express"
import listAnswerService from "../../services/answer/listAnswer.service"

const listAnswerController = async (req: Request, res: Response, next: NextFunction) =>{
  try {
    const commentId = req.params.commentId
    const comments = await listAnswerService(commentId)

    return res.status(200).json(comments)
    
  } catch (error) {
    next(error)
  }
}

export default listAnswerController