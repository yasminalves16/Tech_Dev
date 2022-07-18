import { Router } from "express";
import createAnswerController from "../controllers/answer/createAnswer.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const answerRoutes = Router();

answerRoutes.post("/:commentId", verifyToken, createAnswerController )
answerRoutes.get("/:commentId", verifyToken, )
answerRoutes.delete("/:commentId", verifyToken,)
answerRoutes.patch("/:commentId",  verifyToken,)

export default answerRoutes;