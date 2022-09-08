import { Router } from 'express';
import questionRouter from './questionRouter';
import answerRouter from './answerQuestion';

const router = Router();

router.use(questionRouter);
router.use(answerRouter)

export default router;
