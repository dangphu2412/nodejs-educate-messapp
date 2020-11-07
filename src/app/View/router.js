import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => res.render('app/login'));

router.get('/login-phone-number', (req, res) => res.render('app/login-phone-number'));

router.get('/register', (req, res) => res.render('app/auth/register'));

router.get('/reset-password', (req, res) => res.render('app/reset-password'));

router.get('/register-phone', (req, res) => res.render('app/login-phone-number'));

router.get('/register-email', (req, res) => res.render('app/auth/register-email'));

export default router;
