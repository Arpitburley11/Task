import express from 'express';
import {getProfile, loginUser, registerUser, test, updateUser } from '../controllers/authController.js';


const router = express.Router();

router.get('/', test)
router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.put('/update', updateUser)

export default router;