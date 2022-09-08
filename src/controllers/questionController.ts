import { Request, Response } from 'express';

import * as questionService from '../services/questionService';

import * as answerService from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await questionService.insertQuestion(askedBy, question);

  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body;
  const id = req.params.id

  await answerService.insertAnswer(answeredBy, answer, Number(id));

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions();
  
  res.send(questions)
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;

  const question = await questionService.getById(Number(id));

  res.send(question)
}
