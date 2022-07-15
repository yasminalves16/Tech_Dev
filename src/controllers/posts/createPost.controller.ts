import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import createPostService from "../../services/posts/createPost.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const { description, media, userId } = req.body;

    const post = await createPostService({ description, media }, userId);

    return res.status(201).json(post);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default createPostController;
