import  multerConfig  from '../config/multer';
import multer from 'multer';
import UploadImagesService from '../services/images/UploadimagesService';
import DeleteImagesService from '../services/images/DeleteimagesService'
import { Router } from "express";

const imageRoute = Router();

const upload = multer(multerConfig)

imageRoute.post("", upload.single('image'), async (request, response )=>{

    const { file } = request;
    console.log(request.file)
    const uploadImagesService = new UploadImagesService();

    await uploadImagesService.execute(file!);

    return response.send();
})

imageRoute.delete('/:filename', async (request, response) =>{
    const { filename } = request.params;

    const deleteImagesService = new DeleteImagesService();

    await deleteImagesService.execute(filename);

    return response.send();
})

export default imageRoute