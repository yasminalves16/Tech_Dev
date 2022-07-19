import { AppDataSource } from "../../data-source";
import { Answer } from "../../entities/answerComents.entity";
import { AppError } from "../../errors/AppError";

const updateAnswerService = async (id: string, userId:string, description: string): Promise<Answer> => {

    const AnswerRepository = AppDataSource.getRepository(Answer);

    const findAnswer = await AnswerRepository.findOne({
        where:{
            id: id
        },
        relations: {
            user: true
        }
    });
    
    if (!findAnswer) {
        throw new AppError("Answer Comments not found", 404);
    }

    if(findAnswer.user.id != userId) {
        throw new AppError("User not authorized", 401)
    }

    
    findAnswer.description = description

    await AnswerRepository.save(findAnswer);

    const updatedAnswer = await AnswerRepository.findOneBy({ id });
  
    return updatedAnswer!;
    
};

export default updateAnswerService;