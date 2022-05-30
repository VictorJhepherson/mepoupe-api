import { Router } from 'express';
import averageController from '../controllers/averageController';

const router = Router();

router.post('/', averageController.calc);

export default router;
