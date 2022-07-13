import { createUserController } from './../controllers/users/createUser.controller';
import { Router, Request, Response } from 'express';
import { multerConfig } from '../config/multer';
import multer from 'multer';

const routes = Router();

// EXEMPLO PARA ADICIÇÃO DE IMAGEM COM MULTER - DEVE DEIXAR NA ROTA DE CADASTRO (POST) COMO SE FOSSE UM MIDDLEWAR.
//NA HORA DE DEFINIR A ROTA DE TESTE PARA O INSOMNIA DEVE CRIAR COM O TIPO DO BADY SENDO (MULTIPART)
//O NOME DA REQUISIÇÃO DEVE SER O MESMO DEFINIDO NO (.SINGLE('NOME DEFINIDO'))
//E NOO VALUE PODE SER DEFINIDO COMO FILE PARA POSSIBILITAR A ADIÇÃO DA IMAGEM

//exemplo de requisição

// routes.post('/upload', multer(multerConfig).single('file'), (request: Request, response: Response)=>{
//     console.log(request.file)
//     return response.json({ message: 'hello Code'})
// })

routes.post("", createUserController)

export default routes;