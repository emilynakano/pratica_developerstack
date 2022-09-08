import { prisma } from "../config/database";

import { answers } from "@prisma/client";
import { number } from "joi";

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
        },
        select: {
            id: false,
            answeredBy: true,
            answer: true,
            questionId: false,

        }
    })
    
}