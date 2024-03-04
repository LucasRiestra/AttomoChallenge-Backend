import { Router } from 'express';
import { createUser, getUserByEmail } from '../controllers/user.controllers';

const router = Router();

router.post('/users', createUser);
router.get('/users/:email', getUserByEmail);

export default router;