import Router from 'express';
const router = Router();
import {login,register} from '../controllers/users'

router.post('/login',login);
router.post('/register',register);

export {router as userRouter};