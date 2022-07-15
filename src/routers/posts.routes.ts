import { Router } from "express";
import updatePostController from "../controllers/posts/updatePost.controller";

const postsRoutes = Router()

postsRoutes.patch(":id", updatePostController)

export default postsRoutes