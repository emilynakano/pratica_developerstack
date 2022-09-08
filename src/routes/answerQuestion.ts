import { Router } from 'express';
import { createAnswer } from '../controllers/answerController';
import { answerSchema } from '../schemas/answerSchema';
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const answerRouter = Router();

answerRouter.post(
    '/questions/:id/answers',
    validateSchemaMiddleware(answerSchema),
    createAnswer
);


export default answerRouter;