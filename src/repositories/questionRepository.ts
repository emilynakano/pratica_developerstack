import { prisma } from "../config/database";

export async function insertQuestion(askedBy: string, question: string) {

    await prisma.questions.create({
        data: {
            askedBy,
            question
        }
    })

}

export async function getAllQuestions() {

    return await prisma.questions.findMany()
    
}


export async function getById(id: number) {

    return await prisma.questions.findFirst({
        where: {
            id
        }
    })
    
}

export async function getByQuestionAndAskedBy(question: string, askedBy: string) {

    return await prisma.questions.findFirst({
        where: {
            question,
            askedBy
        }
    })
    
}