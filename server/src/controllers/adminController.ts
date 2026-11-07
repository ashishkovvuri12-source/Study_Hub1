import { Request, Response } from 'express';
import { Material } from '../models/Material';
import { User } from '../models/User';

// @desc    Get dashboard statistics for admin
// @route   GET /api/admin/stats
export const getAdminStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const materials = await Material.find().sort({ order: 1 });
    const totalUsers = await User.countDocuments();
    const studentCount = await User.countDocuments({ role: 'student' });
    const adminCount = await User.countDocuments({ role: 'admin' });

    let totalChapters = 0;
    let totalQuestions = 0;
    let totalImportant = 0;

    const subjectBreakdown = materials.map((m) => {
      let subjQuestions = 0;
      let subjImportant = 0;

      m.chapters.forEach((ch) => {
        subjQuestions += ch.questions?.length || 0;
        subjImportant += ch.questions?.filter((q) => q.isImportant).length || 0;
      });

      totalChapters += m.chapters.length;
      totalQuestions += subjQuestions;
      totalImportant += subjImportant;

      return {
        subjectId: m.subjectId,
        name: m.name,
        icon: m.icon,
        chaptersCount: m.chapters.length,
        questionsCount: subjQuestions,
        importantCount: subjImportant,
        status: 'Active'
      };
    });

    res.status(200).json({
      success: true,
      stats: {
        totalSubjects: materials.length,
        totalChapters,
        totalQuestions,
        totalImportant,
        totalNotesPages: totalChapters,
        totalUsers,
        studentCount,
        adminCount
      },
      subjects: subjectBreakdown
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || 'Error fetching admin stats.' });
  }
};

// @desc    Get all registered users (Admin only)
// @route   GET /api/admin/users
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || 'Error fetching users.' });
  }
};

