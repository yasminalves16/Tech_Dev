
import S3Storage from "../../utils/S3Storage";

class UploadImagesService {
    async execute(file: Express.Multer.File): Promise<string> {
        const s3Storage = new S3Storage()

        const url = await s3Storage.saveFile(file.filename)

        return url
    }
}

export default UploadImagesService; 