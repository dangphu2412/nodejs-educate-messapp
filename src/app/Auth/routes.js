import express from 'express';
import Controller from './AuthController';

const router = express.Router();
const controller = new Controller();

router.post('/api/users/auth/email', controller.registerByEmail);

export default router;
