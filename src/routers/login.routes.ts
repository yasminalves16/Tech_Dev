import { Router } from "express";
import userLoginController from "../controllers/login/userLogin.controller";


const loginRoute = Router();

loginRoute.post("", userLoginController);

export default loginRoute;
