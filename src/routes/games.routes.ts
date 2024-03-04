import { Router } from 'express';
import { createGame, updateGame, deleteGame, getGameById, voteGame, unvoteGame } from '../controllers/game.controllers';

const router = Router();

router.post('/games', createGame);
router.put('/games/:id', updateGame);
router.delete('/games/:id', deleteGame);
router.get('/games/:id', getGameById);
router.post('/games/:id/vote', voteGame);
router.delete('/games/:id/vote', unvoteGame);

export default router;