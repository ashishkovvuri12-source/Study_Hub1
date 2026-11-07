import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { api } from '../services/api';
import { ChapterNotesResponse } from '../types';

export const NotesPage: React.FC = () => {
  const { subjectId, chapterId } = useParams<{ subjectId: string; chapterId: string }>();
  const [data, setData] = useState<ChapterNotesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const chNum = parseInt(chapterId || '1', 10);

  useEffect(() => {
    if (!subjectId) return;

    document.body.className = `subject-${subjectId}`;
    return () => {
      document.body.className = '';
    };
  }, [subjectId]);

  useEffect(() => {
    if (!subjectId) return;

    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await api.getChapterNotes(subjectId, chNum);
        setData(res);
        document.title = `StudyHub – ${res.chapter.title}`;
      } catch (err: any) {
        setError(err.message || 'Error fetching chapter notes from MongoDB.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [subjectId, chNum]);

  return (
    <div className={`subject-${subjectId || ''}`}>
      <div className="bg-fx">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
      </div>

      <Navbar />

      <div className="page">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading chapter notes from MongoDB...</p>
          </div>
        ) : error || !data ? (
          <div className="error-msg" style={{ display: 'flex' }}>
            ⚠️ {error || 'Chapter not found.'}
          </div>
        ) : (
          <div id="notesContent">
            {/* Back + Breadcrumb */}
            <div className="notes-nav">
              <Link to={`/subject/${subjectId}`} className="back-link">
                ← Back to {data.subject.name}
              </Link>
              <span style={{ fontSize: '13px', color: '#9ca3af' }}>
                {data.subject.icon} {data.subject.name} &rsaquo; Chapter {data.chapter.chapterNumber}
              </span>
            </div>

            {/* Chapter header */}
            <div className="notes-header">
              <div className="n-tag">
                {data.subject.icon} {data.subject.name} · Chapter {data.chapter.chapterNumber}
              </div>
              <h1>{data.chapter.title}</h1>
              <p>Chapter notes — read carefully and understand key concepts before attempting questions.</p>

              {data.chapter.video && (
                <div style={{ marginTop: '20px' }}>
                  <a
                    href={data.chapter.video}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#ef4444',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '10px 20px',
                      borderRadius: '12px',
                      fontWeight: 700,
                      fontSize: '15px',
                      boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>▶️</span> Watch YouTube Tutorial
                  </a>
                </div>
              )}
            </div>

            {/* Notes body rendered from MongoDB */}
            <div
              className="notes-body"
              dangerouslySetInnerHTML={{ __html: data.chapter.content }}
            />

            {/* Chapter pagination */}
            <div className="notes-pagination">
              {data.pagination.prev ? (
                <Link
                  to={`/notes/${subjectId}/${data.pagination.prev.chapterNumber}`}
                  className="pag-btn"
                >
                  ← Ch {data.pagination.prev.chapterNumber}: {data.pagination.prev.title.slice(0, 20)}...
                </Link>
              ) : (
                <span className="pag-btn disabled">No Previous</span>
              )}

              <Link
                to={`/subject/${subjectId}`}
                className="pag-btn"
                style={{ borderColor: '#4f46e5', color: '#4f46e5' }}
              >
                📋 All Chapters
              </Link>

              {data.pagination.next ? (
                <Link
                  to={`/notes/${subjectId}/${data.pagination.next.chapterNumber}`}
                  className="pag-btn"
                >
                  Ch {data.pagination.next.chapterNumber}: {data.pagination.next.title.slice(0, 20)}... →
                </Link>
              ) : (
                <span className="pag-btn disabled">No Next</span>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="footer">StudyHub · Chapter Notes · 2024</footer>
    </div>
  );
};

