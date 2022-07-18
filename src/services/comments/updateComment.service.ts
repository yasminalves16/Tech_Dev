import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { IComment } from "../../interfaces/comments";
import { AppError } from "../../errors/AppError";

const updateCommentService = async (id: string, description: string, userId:string): Promise<IComment> => {

    const commentRepository = AppDataSource.getRepository(Comment);

    const findComment = await commentRepository.findOneBy({
        id
    });
    
    if (!findComment) {
        throw new AppError("Post not found", 404);
    }

    // if(findComment.user.id != userId) {
    //     throw new AppError("User not authorized", 401)
    // } NÃO CONSEGUI

    findComment.description = description

    await commentRepository.update({ id }, findComment);

    const updatedComment = await commentRepository.findOneBy({ id });
  
    return updatedComment!;
    
};

export default updateCommentService;
