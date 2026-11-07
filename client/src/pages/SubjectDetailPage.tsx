import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { api } from '../services/api';
import { SubjectDetail } from '../types';

export const SubjectDetailPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<SubjectDetail | null>(null);
  const [stats, setStats] = useState<{ totalChapters: number; totalQuestions: number; totalImportant: number } | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!subjectId) return;

    document.body.className = `subject-${subjectId}`;
    return () => {
      document.body.className = '';
    };
  }, [subjectId]);

  useEffect(() => {
    if (!subjectId) return;

    const fetchSubject = async () => {
      try {
        setLoading(true);
        const res = await api.getSubject(subjectId);
        setSubject(res.data);
        setStats(res.stats);
      } catch (err: any) {
        setError(err.message || 'Error loading subject from backend.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [subjectId]);

  return (
    <div className={`subject-${subjectId || ''}`}>
      <div className="bg-fx">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
      </div>

      <Navbar />

      <div className="page">
        <Link to="/subjects" className="back-link">
          ← Back to Subjects
        </Link>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading subject details from MongoDB...</p>
          </div>
        ) : error || !subject ? (
          <div className="error-msg" style={{ display: 'flex' }}>
            ⚠️ {error || 'Subject not found.'}
          </div>
        ) : (
          <>
            <div className={`unit-header unit-header-${subject.subjectId}`}>
              <div className="unit-header-icon">{subject.icon}</div>
              <div className="unit-header-text">
                <div className="u-tag">{subject.tagline || `Subject · ${subject.name}`}</div>
                <h1>{subject.name}</h1>
                <p>
                  {subject.description || 'Click any chapter title to open notes. Questions marked ⭐ are important for exams.'}
                </p>
              </div>
            </div>

            <div className="important-banner">
              ⭐ Questions marked <strong>IMPORTANT</strong> are high-priority. Click any{' '}
              <strong>Chapter Title</strong> to read its notes 📖 &nbsp;|&nbsp;{' '}
              {stats?.totalChapters} Chapters · {stats?.totalQuestions} Questions · {stats?.totalImportant} High Priority
            </div>

            {/* Live Search Questions */}
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search questions in this subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Chapters and Questions */}
            {subject.chapters.map((chapter) => {
              const filteredQuestions = (chapter.questions || []).filter((q) =>
                q.text.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (searchTerm && filteredQuestions.length === 0) {
                return null;
              }

              return (
                <div key={chapter.chapterNumber} className="q-section">
                  <div className="q-section-header">
                    <Link
                      to={`/notes/${subject.subjectId}/${chapter.chapterNumber}`}
                      className="chapter-title-link"
                    >
                      <span className="notes-icon">📖</span> Chapter {chapter.chapterNumber} — {chapter.title}
                    </Link>
                    <span className="q-count">{chapter.questions?.length || 0} Qs</span>
                  </div>

                  <ul className="questions-list">
                    {filteredQuestions.map((q) => (
                      <li
                        key={q.questionNumber}
                        className={`question-item ${q.isImportant ? 'important' : ''}`}
                      >
                        <div className="q-letter">{q.questionNumber}</div>
                        <div className="q-body">
                          <span
                            className="q-text"
                            dangerouslySetInnerHTML={{ __html: q.text }}
                          />
                          {q.isImportant && <span className="imp-tag">⭐ Important</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </>
        )}
      </div>

      <footer className="footer">StudyHub · Chapter Notes · 2024</footer>
    </div>
  );
};

