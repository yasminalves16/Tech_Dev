import { Router } from "express";
import { listPostController } from "../controllers/posts/listPost.controller";
import updatePostController from "../controllers/posts/updatePost.controller";
import createPostController from "../controllers/posts/createPost.controller";

const postsRoutes = Router();

postsRoutes.post("/:userId", createPostController);
postsRoutes.patch(":id", updatePostController);
postsRoutes.get("", listPostController);

export default postsRoutes;
