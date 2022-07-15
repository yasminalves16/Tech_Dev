import { Router } from "express";
import updatePostController from "../controllers/posts/updatePost.controller";
import createPostController from "../controllers/posts/createPost.controller";

const postsRoutes = Router();

postsRoutes.post("/:userId", createPostController);
postsRoutes.patch(":id", updatePostController);

export default postsRoutes;
