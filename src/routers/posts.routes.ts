import { Router } from "express";
import { listPostController } from "../controllers/posts/listPost.controller";
import updatePostController from "../controllers/posts/updatePost.controller";
import createPostController from "../controllers/posts/createPost.controller";
import verifyToken from "../middlewares/verifyToken.middleware"

const postsRoutes = Router();

postsRoutes.post("/:userId", verifyToken , createPostController);
postsRoutes.patch(":id", verifyToken, updatePostController);
postsRoutes.get("", verifyToken,listPostController);

export default postsRoutes;
