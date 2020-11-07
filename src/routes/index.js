import express from 'express';
import { authRouter } from '../app/Api/Auth';
import { viewRouter } from '../app/View';

const router = express.Router();

// Using route of module
router.use(authRouter);
router.use(viewRouter);

export default router;
