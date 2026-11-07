import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { AdminStats, AdminSubjectRow, User } from '../types';

export const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [subjects, setSubjects] = useState<AdminSubjectRow[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Modal form for adding material/chapter
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('maths');
  const [chapterTitle, setChapterTitle] = useState<string>('');
  const [chapterVideo, setChapterVideo] = useState<string>('');
  const [chapterContent, setChapterContent] = useState<string>('');
  const [modalSuccess, setModalSuccess] = useState<string>('');
  const [modalError, setModalError] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsRes, usersRes] = await Promise.all([
        api.getAdminStats(),
        api.getAllUsers()
      ]);
      setStats(statsRes.stats);
      setSubjects(statsRes.subjects);
      setUsers(usersRes.users);
    } catch (err: any) {
      setError(err.message || 'Error fetching admin dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleAddChapterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');
    setModalSuccess('');
    setSaving(true);

    try {
      await api.addChapter(selectedSubject, {
        title: chapterTitle,
        video: chapterVideo,
        content: chapterContent
      });
      setModalSuccess(`Chapter "${chapterTitle}" added successfully to MongoDB!`);
      setChapterTitle('');
      setChapterVideo('');
      setChapterContent('');
      fetchDashboardData();
      setTimeout(() => {
        setShowAddModal(false);
        setModalSuccess('');
      }, 1500);
    } catch (err: any) {
      setModalError(err.message || 'Error adding chapter.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page">
        {/* Welcome Banner */}
        <div className="admin-welcome">
          <div className="aw-icon">🛡️</div>
          <div>
            <h2>Welcome, {user?.name || 'Administrator'}!</h2>
            <p>
              Real-time administrative control panel powered by Node.js, Express, TypeScript & MongoDB.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading database metrics from MongoDB...</p>
          </div>
        ) : error ? (
          <div className="error-msg" style={{ display: 'flex' }}>
            ⚠️ {error}
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="admin-grid">
              <div className="stat-card">
                <div className="s-icon">📚</div>
                <div className="s-val">{stats?.totalSubjects || 0}</div>
                <div className="s-lbl">Total Subjects</div>
              </div>
              <div className="stat-card">
                <div className="s-icon">📖</div>
                <div className="s-val">{stats?.totalChapters || 0}</div>
                <div className="s-lbl">Total Chapters</div>
              </div>
              <div className="stat-card">
                <div className="s-icon">❓</div>
                <div className="s-val">{stats?.totalQuestions || 0}</div>
                <div className="s-lbl">Total Questions</div>
              </div>
              <div className="stat-card">
                <div className="s-icon">⭐</div>
                <div className="s-val">{stats?.totalImportant || 0}</div>
                <div className="s-lbl">Important Qs</div>
              </div>
              <div className="stat-card">
                <div className="s-icon">👥</div>
                <div className="s-val">{stats?.totalUsers || 0}</div>
                <div className="s-lbl">Registered Users</div>
              </div>
            </div>

            {/* Subject Overview Table */}
            <div className="admin-section" style={{ marginTop: '30px' }}>
              <div
                className="admin-section-header"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h2>📋 Subject Overview (MongoDB)</h2>
                <button
                  type="button"
                  className="login-btn"
                  style={{ width: 'auto', padding: '10px 18px', fontSize: '13px' }}
                  onClick={() => setShowAddModal(true)}
                >
                  ➕ Add New Chapter
                </button>
              </div>

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Chapters</th>
                    <th>Questions</th>
                    <th>Important Qs</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((sub) => (
                    <tr key={sub.subjectId}>
                      <td>
                        <strong>
                          {sub.icon} {sub.name}
                        </strong>
                      </td>
                      <td>{sub.chaptersCount}</td>
                      <td>{sub.questionsCount}</td>
                      <td>{sub.importantCount}</td>
                      <td>
                        <span className="tag tag-green">Active</span>
                      </td>
                      <td>
                        <Link
                          to={`/subject/${sub.subjectId}`}
                          style={{
                            color: '#4f46e5',
                            fontWeight: 600,
                            fontSize: '13px',
                            textDecoration: 'none'
                          }}
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Registered Users Table */}
            <div className="admin-section" style={{ marginTop: '40px' }}>
              <div className="admin-section-header">
                <h2>👥 Registered Users in Database ({users.length})</h2>
              </div>

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id || u.username}>
                      <td>
                        <strong>{u.name}</strong>
                      </td>
                      <td>@{u.username}</td>
                      <td>{u.email}</td>
                      <td>
                        <span className={`status-badge ${u.role}`}>
                          {u.role === 'admin' ? '🛡️ Admin' : '👨‍🎓 Student'}
                        </span>
                      </td>
                      <td>
                        {u.createdAt
                          ? new Date(u.createdAt).toLocaleDateString()
                          : 'Seed'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Add Chapter Modal */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Chapter to Backend</h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
            </div>

            {modalError && (
              <div className="error-msg" style={{ display: 'flex' }}>
                ⚠️ {modalError}
              </div>
            )}
            {modalSuccess && (
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: '#22c55e',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  marginBottom: '16px',
                  fontSize: '13px'
                }}
              >
                ✅ {modalSuccess}
              </div>
            )}

            <form onSubmit={handleAddChapterSubmit}>
              <div className="form-group">
                <label className="form-label">Select Subject</label>
                <select
                  className="form-input"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="maths">📐 Mathematics</option>
                  <option value="ml">🤖 Machine Learning</option>
                  <option value="java">☕ Java Programming</option>
                  <option value="python">🐍 Python Programming</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Chapter Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Advanced Dynamic Programming"
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">YouTube Tutorial Link (Optional)</label>
                <input
                  type="url"
                  className="form-input"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={chapterVideo}
                  onChange={(e) => setChapterVideo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Chapter Notes Content (HTML or Text)</label>
                <textarea
                  className="form-input"
                  rows={6}
                  placeholder="<h3>Overview</h3><p>Enter notes content here...</p>"
                  value={chapterContent}
                  onChange={(e) => setChapterContent(e.target.value)}
                  style={{ resize: 'vertical', fontFamily: 'monospace' }}
                  required
                />
              </div>

              <button type="submit" className="login-btn" disabled={saving}>
                {saving ? 'Saving to MongoDB...' : 'Save Chapter →'}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">StudyHub · Admin Dashboard · 2024</footer>
    </>
  );
};

