import * as questionRepository from '../repositories/questionRepository';
import * as answerService from '../services/answerService'

export async function insertQuestion(askedBy: string, question: string) {
    
    const questionExists = await questionRepository.getByQuestionAndAskedBy(question, askedBy);
    if(questionExists) throw { type:'conflict', message: 'you already asked this'}
    
    await questionRepository.insertQuestion(askedBy, question);

}

export async function getAllQuestions() {
    
    const questions = await questionRepository.getAllQuestions();

    return {questions}
}

export async function getById(questionId: number) {
    
    const questions = await questionRepository.getById(questionId);

    if(!questions) throw {type: 'not_found', message: 'question not found'};

    const answers = await answerService.getAnswersByQuestionId(questionId);

    return {...questions, answers}
    
}
