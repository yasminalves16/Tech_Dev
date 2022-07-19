import aws, {S3} from "aws-sdk"
import path from "path";
import mime from "mime"
import multerConfig from "../config/multer"
import fs from "fs";

class S3Storage {
    private client: S3;

    constructor(){
        this.client = new aws.S3({
            region: 'sa-east-1',
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        })
    }

    async saveFile(filename: string): Promise<string> {
        const originalPath = path.resolve(multerConfig.directory, filename)

        const ContentType = mime.getType(originalPath)

        if(!ContentType){
            throw new Error("File not found")
        }

        const fileContent = await fs.promises.readFile(originalPath)

        this.client.putObject({
            Bucket: 'dev-tec-m4',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType,
        })
        .promise()

        await fs.promises.unlink(originalPath)

        const url = `https://dev-tec-m4.s3.sa-east-1.amazonaws.com/${filename}`

        return url
    }

    async deleteFile(filename: string): Promise<void> {
        await this.client.deleteObject({
            Bucket: 'dev-tec-m4',
            Key: filename,
          
        })
        .promise()
    }
}

export default S3Storage