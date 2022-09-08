import { Request, Response } from 'express';

import * as answerService from '../services/answerService'

export async function createAnswer(req: Request, res: Response) {
    const { answeredBy, answer } = req.body;
    const id = req.params.id
  
    await answerService.insertAnswer(answeredBy, answer, Number(id));
  
    res.sendStatus(201);
  }