import { NextFunction, Request, Response } from "express"
import createAnswerService from "../../services/answer/createAnswer.service"

const createAnswerController = async (req: Request, res: Response, next: NextFunction ) =>{
  try {
    const commentId = req.params.commentId
    const userId = req.user
    const answer = req.body
    const newAnswer = await createAnswerService(commentId,userId,answer)

    return res.status(201).json(newAnswer)

  } catch (error) {
    next(error)
  }
}

export default createAnswerController