import { NextFunction, Request, Response } from "express";
import createPostService from "../../services/posts/createPost.service";

const createPostController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user;

    const { description, media } = req.body;

    const post = await createPostService({ description, media }, userId);

    return res.status(201).json(post);
  } catch (error) {
    next(error)
  }
};

export default createPostController;
