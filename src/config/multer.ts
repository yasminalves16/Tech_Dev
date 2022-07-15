import multer from "multer";
import path from "path";
import crypto from "crypto"
import {Request} from "express"

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

export default {
    directory: tmpFolder,
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString('hex');

            const filename = `${fileHash}-${file.originalname}`;

            return callback(null, filename);
        }
    }),
    fileFilter: (req: Request, file: any, cb: any) => {
        const allowedMimes = [
          "image/jpeg",
          "image/pjpeg",
          "image/png",
          "image/gif",
          "video/mp4",
          "audio/mp3",
          "video/wmv",
          "video/mkv",
          "video/avi",
          "document/pdf",
          "document/txt",
          "document/zip",
          "document/rar",
          "document/7z",
          "document/doc",
          "document/xls"
        ];
        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error("Invalid file type."));
        }
      },
    
}