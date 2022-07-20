import { Router } from "express";
import { listPostController } from "../controllers/posts/listPost.controller";
import updatePostController from "../controllers/posts/updatePost.controller";
import createPostController from "../controllers/posts/createPost.controller";
import deletePostController from "../controllers/posts/deletePost.cntroller";
import verifyToken from "../middlewares/verifyToken.middleware"

const postsRoutes = Router();

postsRoutes.post("", verifyToken , createPostController);
postsRoutes.patch("/:id", verifyToken, updatePostController);
postsRoutes.get("", verifyToken,listPostController);
postsRoutes.delete("/:id", verifyToken, deletePostController);

export default postsRoutes;
