import { createUserController } from './../controllers/users/createUser.controller';
import { Router, Request, Response } from 'express';
import  multerConfig  from '../config/multer';
import multer from 'multer';
import UploadImagesService from '../services/images/UploadimagesService';
import DeleteImagesService from '../services/images/DeleteimagesService'
import { listUserController } from '../controllers/users/listUser.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';

const routes = Router();
const upload = multer(multerConfig)

routes.post('/', upload.single('image'), async (request, response )=>{

    const { file } = request;
    console.log(request.file)
    const uploadImagesService = new UploadImagesService();

    await uploadImagesService.execute(file!);

    return response.send();
})

routes.delete('/:filename', async (request, response) =>{
    const { filename } = request.params;

    const deleteImagesService = new DeleteImagesService();

    await deleteImagesService.execute(filename);

    return response.send();
})

routes.post("", createUserController)
routes.get("/:id", listUserController)
routes.delete("/:id", deleteUserController)

export default routes;