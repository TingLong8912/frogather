import { Router } from 'express';
import ApiRoutes from './api.js';
import RecordRoutes from './record.js';
import CommentRoutes from './comments.js';
import FrogRoutes from './frog.js';
const router = Router();

/* ROUTES */
router.use('/api', ApiRoutes);
router.use('/record', RecordRoutes);
router.use('/comment', CommentRoutes);
router.use('/frog', FrogRoutes);

export default router;