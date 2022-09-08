import { prisma } from "../config/database";

export async function insertAnswer(answeredBy:string, answer: string, questionId: number) {
    await prisma.answers.create({
        data: {
            answeredBy,
            answer,
            questionId
        }
    })
}

export async function getAnswersByQuestionId(questionId: number) {
    
    return await prisma.answers.findMany({
        where: {
            questionId
        }
    })
    
}