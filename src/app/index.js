import express from 'express';
import { authRouter } from './Api/Auth';
import { userRouter } from './Api/User';
import { viewRouter } from './View';

const router = express.Router();

// Using route of module
router.use(authRouter);
router.use(userRouter);
router.use(viewRouter);

export default router;
