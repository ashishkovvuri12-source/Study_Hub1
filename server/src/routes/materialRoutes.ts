import { Router } from 'express';
import {
  getAllMaterials,
  getMaterialBySubjectId,
  getChapterNotes,
  addChapter,
  addQuestion,
  updateChapterVideo,
  getAllChapters
} from '../controllers/materialController';
import { authenticate, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

router.get('/', getAllMaterials);
router.get('/all/chapters', getAllChapters);
router.get('/:subjectId', getMaterialBySubjectId);
router.get('/:subjectId/chapters/:chapterNumber', getChapterNotes);

// Admin modifications
router.post('/:subjectId/chapters', authenticate, requireAdmin, addChapter);
router.post('/:subjectId/chapters/:chapterNumber/questions', authenticate, requireAdmin, addQuestion);
router.put('/:subjectId/chapters/:chapterNumber/video', authenticate, requireAdmin, updateChapterVideo);
router.post('/:subjectId/chapters/:chapterNumber/video', updateChapterVideo); // flexible fallback

export default router;

