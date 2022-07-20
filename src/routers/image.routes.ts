import  updatePostService  from './../services/posts/updatePost.service';
import  multerConfig  from '../config/multer';
import multer from 'multer';
import UploadImagesService from '../services/images/UploadimagesService';
import { Router } from "express";
import {updateUserService} from "../services/users/updateUser.service"
import verifyToken from "../middlewares/verifyToken.middleware"
import DeleteImagesService from '../services/images/DeleteimagesService';

const imageRoute = Router();

const upload = multer(multerConfig)

imageRoute.post("/post/:postId", verifyToken, upload.single('image'), async (request, response )=>{

    const { file } = request;

    const {postId} = request.params; 
    
    const uploadImagesService = new UploadImagesService();

    const url = await uploadImagesService.execute(file!);

    const post = await updatePostService( postId, request.user, undefined, url);

    return response.json(post);
})

imageRoute.post("/user/:userId", verifyToken, upload.single('image'), async (request, response )=>{

    const { file } = request;

    const {userId} = request.params; 
    
    const uploadImagesService = new UploadImagesService();

    const url = await uploadImagesService.execute(file!);

    const userReq = {avatarUrl: url}; 

    const user = await updateUserService( userId, userReq);

    return response.json(user);
})

imageRoute.delete('/delete/:filename', async (request, response) =>{
    const { filename } = request.params;
    
    const deleteImagesService = new DeleteImagesService();

    await deleteImagesService.execute(filename);

    return response.send();
})

export default imageRoute