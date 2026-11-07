import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [role, setRole] = useState<'student' | 'admin'>('student');

  // Form states
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { login, signup } = useAuth();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleRoleSwitch = (newRole: 'student' | 'admin') => {
    setRole(newRole);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setSubmitting(true);

    try {
      if (isSignUp) {
        if (!name || !email || !username || !password) {
          setErrorMsg('Please complete all fields.');
          setSubmitting(false);
          return;
        }
        await signup({ username, name, email, password, role });
        setSuccessMsg('Account created successfully! Redirecting...');
        setTimeout(() => {
          navigate(role === 'admin' ? '/admin' : '/subjects');
        }, 600);
      } else {
        if (!username || !password) {
          setErrorMsg('Please enter both username and password.');
          setSubmitting(false);
          return;
        }
        await login({ username, password, role });
        navigate(role === 'admin' ? '/admin' : '/subjects');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error.');
      setPassword('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        title="Toggle Light/Dark Theme"
        style={{
          position: 'absolute',
          top: '30px',
          right: '40px',
          zIndex: 300,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          fontSize: '22px'
        }}
      >
        🌗
      </button>

      <div className="login-page">
        {/* LEFT PANEL */}
        <div className="login-panel-left">
          <div className="lp-icon">📚</div>
          <h1>StudyHub</h1>
          <p>Your all-in-one digital learning hub powered by Node.js, TypeScript, Express & MongoDB.</p>
          <div className="lp-features">
            <div className="lp-feat">
              <div className="lp-feat-icon">📖</div>
              Chapter-wise notes stored in MongoDB
            </div>
            <div className="lp-feat">
              <div className="lp-feat-icon">⭐</div>
              Important exam questions highlighted for you
            </div>
            <div className="lp-feat">
              <div className="lp-feat-icon">🎯</div>
              4 subjects · 22 chapters · 110+ questions
            </div>
            <div className="lp-feat">
              <div className="lp-feat-icon">🛡️</div>
              Full authentication for Student & Admin roles
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-panel-right">
          <div className="login-form-box">
            <div className="login-form-title">
              {isSignUp ? 'Create Account ✨' : 'Welcome back 👋'}
            </div>
            <div className="login-form-sub">
              {isSignUp
                ? 'Sign up to access all study materials and notes'
                : 'Sign in to continue to StudyHub'}
            </div>

            {/* Role Tabs */}
            <div className="role-tabs">
              <button
                type="button"
                className={`role-tab student ${role === 'student' ? 'active' : ''}`}
                onClick={() => handleRoleSwitch('student')}
              >
                👨‍🎓 Student
              </button>
              <button
                type="button"
                className={`role-tab admin ${role === 'admin' ? 'active' : ''}`}
                onClick={() => handleRoleSwitch('admin')}
              >
                🛡️ Admin
              </button>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="error-msg" style={{ display: 'flex' }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Success Message */}
            {successMsg && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: '#22c55e',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  marginBottom: '16px',
                  fontSize: '13px'
                }}
              >
                ✅ {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. john@studyhub.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label className="form-label">
                  {role === 'admin' ? 'Admin Username' : 'Username'}
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder={role === 'admin' ? 'Enter admin username' : 'Enter your username'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password (min 6 chars)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  required
                />
              </div>

              <button
                type="submit"
                className={`login-btn ${role === 'admin' ? 'admin-btn' : ''}`}
                disabled={submitting}
              >
                {submitting
                  ? 'Please wait...'
                  : isSignUp
                  ? `Sign Up as ${role === 'admin' ? 'Admin' : 'Student'} →`
                  : `Sign In as ${role === 'admin' ? 'Admin' : 'Student'} →`}
              </button>
            </form>

            <div className="auth-mode-switch">
              {isSignUp ? (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(false);
                      setErrorMsg('');
                    }}
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  New to StudyHub?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(true);
                      setErrorMsg('');
                    }}
                  >
                    Create an account
                  </button>
                </>
              )}
            </div>

            {/* Quick Demo Credentials Reminder */}
            <div
              style={{
                marginTop: '20px',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                fontSize: '12px',
                color: 'var(--text-muted)'
              }}
            >
              <strong>Default Demo Accounts:</strong>
              <div>Student: <code>student</code> / <code>study123</code></div>
              <div>Admin: <code>admin</code> / <code>admin@123</code></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

