import { Router } from 'express';
import {
  createQuestion,
  get,
  getById
} from '../controllers/questionController';
import { answerSchema } from '../schemas/answerSchema';
import { questionSchema } from '../schemas/questionSchema';
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const questionRouter = Router();

questionRouter.get('/questions', get);

questionRouter.get('/questions/:id', getById);

questionRouter.post(
  '/questions',
  validateSchemaMiddleware(questionSchema),
  createQuestion
);

export default questionRouter;
