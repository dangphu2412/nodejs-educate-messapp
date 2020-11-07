import express from 'express';
import authRouter from '../app/Auth/routes';
import viewRouter from '../app/View/router';

const router = express.Router();

// Using route of module
router.use(authRouter);
router.use(viewRouter);

// Demo only
router.get('/', (req, res) => res.redirect('/conversations'));

router.get('/conversations', (req, res) => res.render('app/conversation/index'));

export default router;
