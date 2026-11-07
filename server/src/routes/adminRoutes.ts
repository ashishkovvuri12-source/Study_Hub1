import { Router } from 'express';
import { getAdminStats, getAllUsers } from '../controllers/adminController';
import { authenticate, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

// All admin routes require valid admin authentication
router.get('/stats', authenticate, requireAdmin, getAdminStats);
router.get('/users', authenticate, requireAdmin, getAllUsers);

export default router;

