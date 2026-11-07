import {
  User,
  SubjectSummary,
  SubjectDetail,
  ChapterNotesResponse,
  AdminStats,
  AdminSubjectRow
} from '../types';

const API_BASE = '/api';

const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  const token = localStorage.getItem('studyhub_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

const handleResponse = async <T>(res: Response): Promise<T> => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'An error occurred during API request.');
  }
  return data;
};

export const api = {
  // Auth
  async signup(payload: { username: string; name: string; email: string; password: string; role?: string }) {
    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return handleResponse<{ success: boolean; token: string; user: User }>(res);
  },

  async login(payload: { username: string; password: string; role?: string }) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return handleResponse<{ success: boolean; token: string; user: User }>(res);
  },

  async getMe() {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: getHeaders()
    });
    return handleResponse<{ success: boolean; user: User }>(res);
  },

  // Materials
  async getMaterials() {
    const res = await fetch(`${API_BASE}/materials`, {
      headers: getHeaders()
    });
    return handleResponse<{ success: boolean; count: number; data: SubjectSummary[] }>(res);
  },

  async getSubject(subjectId: string) {
    const res = await fetch(`${API_BASE}/materials/${subjectId}`, {
      headers: getHeaders()
    });
    return handleResponse<{
      success: boolean;
      data: SubjectDetail;
      stats: { totalChapters: number; totalQuestions: number; totalImportant: number };
    }>(res);
  },

  async getChapterNotes(subjectId: string, chapterNumber: number) {
    const res = await fetch(`${API_BASE}/materials/${subjectId}/chapters/${chapterNumber}`, {
      headers: getHeaders()
    });
    return handleResponse<ChapterNotesResponse & { success: boolean }>(res);
  },

  async addChapter(subjectId: string, payload: { title: string; video?: string; content?: string }) {
    const res = await fetch(`${API_BASE}/materials/${subjectId}/chapters`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload)
    });
    return handleResponse<{ success: boolean; message: string }>(res);
  },

  async addQuestion(
    subjectId: string,
    chapterNumber: number,
    payload: { text: string; isImportant: boolean }
  ) {
    const res = await fetch(`${API_BASE}/materials/${subjectId}/chapters/${chapterNumber}/questions`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload)
    });
    return handleResponse<{ success: boolean; message: string }>(res);
  },

  // Admin
  async getAdminStats() {
    const res = await fetch(`${API_BASE}/admin/stats`, {
      headers: getHeaders()
    });
    return handleResponse<{
      success: boolean;
      stats: AdminStats;
      subjects: AdminSubjectRow[];
    }>(res);
  },

  async getAllUsers() {
    const res = await fetch(`${API_BASE}/admin/users`, {
      headers: getHeaders()
    });
    return handleResponse<{ success: boolean; count: number; users: User[] }>(res);
  },

  async getAllChapters() {
    const res = await fetch(`${API_BASE}/materials/all/chapters`, {
      headers: getHeaders()
    });
    return handleResponse<{
      success: boolean;
      count: number;
      chapters: Array<{
        subjectId: string;
        subjectName: string;
        subjectIcon: string;
        chapterNumber: number;
        title: string;
        video: string;
      }>;
    }>(res);
  },

  async updateChapterVideo(subjectId: string, chapterNumber: number, video: string) {
    const res = await fetch(`${API_BASE}/materials/${subjectId}/chapters/${chapterNumber}/video`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ video })
    });
    return handleResponse<{ success: boolean; message: string; video: string }>(res);
  }
};

