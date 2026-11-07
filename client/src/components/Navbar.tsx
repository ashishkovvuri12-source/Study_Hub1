import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/subjects" className="navbar-brand">
        <div className="brand-icon">📚</div>
        <span className="brand-name">StudyHub</span>
      </Link>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle Light/Dark Theme"
        >
          🌗
        </button>

        {user?.role === 'admin' ? (
          <Link
            to="/admin"
            className="nav-logout"
            style={{ textDecoration: 'none', marginRight: '6px' }}
          >
            🛡️ Admin Panel
          </Link>
        ) : null}

        <Link
          to="/subjects"
          className="nav-logout"
          style={{ textDecoration: 'none', marginRight: '6px' }}
        >
          Subjects
        </Link>

        {user && (
          <>
            <span className={`nav-badge ${user.role}`}>
              {user.role === 'admin' ? '🛡️ Admin' : '👨‍🎓 Student'}
            </span>
            <span className="nav-user">
              Hello, <strong>{user.name}</strong>
            </span>
            <button className="nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

