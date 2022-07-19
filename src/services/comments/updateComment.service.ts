import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { IComment } from "../../interfaces/comments";
import { AppError } from "../../errors/AppError";

const updateCommentService = async (id: string, description: string, userId:string): Promise<IComment> => {

    const commentRepository = AppDataSource.getRepository(Comment);

    const findComment = await commentRepository.findOne({
        where:{
            id: id
        },
        relations: {
            user: true
        }
    });
    
    if (!findComment) {
        throw new AppError("Post not found", 404);
    }

    if(findComment.user.id != userId) {
        throw new AppError("User not authorized", 401)
    }

    
    findComment.description = description

    await commentRepository.save(findComment);

    const updatedComment = await commentRepository.findOneBy({ id });
  
    return updatedComment!;
    
};

export default updateCommentService;
