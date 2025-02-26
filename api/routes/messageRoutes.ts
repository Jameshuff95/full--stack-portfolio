// frontend/api/routes/messageRoutes.ts
import { Router } from 'express';
import { receiveMessage } from '../controllers/messageController';

const router: Router = Router();

router.post('/', receiveMessage);

export default router;
