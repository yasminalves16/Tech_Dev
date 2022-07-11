
import { randomBytes } from "crypto"
import { diskStorage, Options } from "multer"
import { resolve } from "path"

export const multerConfig = {
    dest: resolve(__dirname, '..', '..', 'uploads', 'users'),
    storage: diskStorage({
        destination:(request, file, callback) =>{
            callback(null, resolve(__dirname, '..', '..', 'uploads', 'users'))
        },
        filename:(request, file, callback) =>{
            randomBytes(16, (error, hash) =>{
                if(error){
                    callback(error, file.filename)
                }
                const filename = `${hash.toString('hex')}.png`
                callback(null, Date.now().toString+ '_' + filename)
            })
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 //5MB
    },
    fileFilter: (request, file, callback) =>{
        const formats = [
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];

        if(formats.includes(file.mimetype)){
            callback(null, true)
        }else{
            callback(new Error('Formats not accepted'))
        }
    }
} as Options