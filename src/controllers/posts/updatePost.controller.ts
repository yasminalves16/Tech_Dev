import { NextFunction, Request, Response } from "express";
import updatePostService from "../../services/posts/updatePost.service";

const updatePostController = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const { user }= req;
    const id = req.params.id;
    const { description } = req.body;
    
    const updatedPost = await updatePostService(id, user, description);

    return res.status(200).json(updatedPost);
    
  } catch(error){
    next(error)
  }

};

export default updatePostController;
