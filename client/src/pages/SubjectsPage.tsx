import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { api } from '../services/api';
import { SubjectSummary } from '../types';

export const SubjectsPage: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await api.getMaterials();
        setSubjects(res.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load study materials from MongoDB.');
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <>
      <div className="bg-fx">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
      </div>

      <Navbar />

      <div className="page">
        <div className="page-top">
          <h1>Choose Your Subject</h1>
          <p>Select a subject to view chapter-wise notes and practice questions from MongoDB.</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Fetching subjects and curriculum from MongoDB...</p>
          </div>
        ) : error ? (
          <div className="error-msg" style={{ display: 'flex', margin: '20px auto', maxWidth: '600px' }}>
            ⚠️ {error}
          </div>
        ) : (
          <div className="subjects-grid">
            {subjects.map((sub, idx) => (
              <Link
                key={sub.subjectId}
                to={`/subject/${sub.subjectId}`}
                className={`subject-card ${sub.subjectId}`}
              >
                <div className="s-num">Subject 0{idx + 1}</div>
                <div className="s-emoji-wrap">{sub.icon}</div>
                <div className="s-title">{sub.name}</div>
                <div className="s-meta">
                  {sub.chapterCount} Chapters · {sub.questionCount} Questions
                </div>
                <div className="chips">
                  {sub.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="s-footer">
                  <span>View Materials →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="footer">StudyHub · For Students, By Students · 2024</footer>
    </>
  );
};

