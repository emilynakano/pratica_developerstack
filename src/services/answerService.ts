import * as answerRepository from '../repositories/answerRepository';

export async function insertAnswer(answeredBy:string, answer: string, questionId: number) {
    
    await answerRepository.insertAnswer(answeredBy, answer, questionId);

}

export async function getAnswersByQuestionId(questionId: number) {
    
    return await answerRepository.getAnswersByQuestionId(questionId)
    
}