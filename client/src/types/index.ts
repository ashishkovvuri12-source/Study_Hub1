export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  createdAt?: string;
}

export interface Question {
  questionNumber: number;
  text: string;
  isImportant: boolean;
}

export interface Chapter {
  chapterNumber: number;
  title: string;
  video: string;
  content: string;
  questions?: Question[];
}

export interface SubjectSummary {
  _id: string;
  subjectId: string;
  name: string;
  icon: string;
  order: number;
  tagline: string;
  description: string;
  tags: string[];
  chapterCount: number;
  questionCount: number;
  importantCount: number;
}

export interface SubjectDetail {
  _id: string;
  subjectId: string;
  name: string;
  icon: string;
  order: number;
  tagline: string;
  description: string;
  tags: string[];
  chapters: Chapter[];
}

export interface ChapterNotesResponse {
  subject: {
    subjectId: string;
    name: string;
    icon: string;
  };
  chapter: Chapter;
  pagination: {
    prev: { chapterNumber: number; title: string } | null;
    next: { chapterNumber: number; title: string } | null;
    totalChapters: number;
  };
}

export interface AdminStats {
  totalSubjects: number;
  totalChapters: number;
  totalQuestions: number;
  totalImportant: number;
  totalNotesPages: number;
  totalUsers: number;
  studentCount: number;
  adminCount: number;
}

export interface AdminSubjectRow {
  subjectId: string;
  name: string;
  icon: string;
  chaptersCount: number;
  questionsCount: number;
  importantCount: number;
  status: string;
}

