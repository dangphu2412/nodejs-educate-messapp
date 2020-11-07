import express from 'express';
import { AuthController } from './AuthController';

const router = express.Router();
const controller = new AuthController();

// router.post('/api/users/auth/email', controller.registerByEmail);

export const authRouter = router;
