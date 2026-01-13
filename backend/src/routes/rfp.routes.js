import { Router } from 'express';
import { createRFP } from '../controllers/rfp.controller.js';
const router = Router();
router.post('/', createRFP);
export default router;