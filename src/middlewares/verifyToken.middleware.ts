import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if(!token){
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    const splitToken = token.split(" ")
    jwt.verify(splitToken[1], process.env.SECRET_KEY as string, (error: any, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        req.user = {
            id: decoded.id,
            email: decoded.email
        }
        next()
    })
}
export default ensureAuthMiddleware