import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (credentials: { username: string; password: string; role?: string }) => Promise<void>;
  signup: (data: { username: string; name: string; email: string; password: string; role?: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('studyhub_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('studyhub_token');
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('studyhub_token');
      if (storedToken) {
        try {
          const res = await api.getMe();
          setUser(res.user);
          localStorage.setItem('studyhub_user', JSON.stringify(res.user));
        } catch (err) {
          console.warn('Session expired or invalid token');
          localStorage.removeItem('studyhub_token');
          localStorage.removeItem('studyhub_user');
          setUser(null);
          setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: { username: string; password: string; role?: string }) => {
    const res = await api.login(credentials);
    setUser(res.user);
    setToken(res.token);
    localStorage.setItem('studyhub_token', res.token);
    localStorage.setItem('studyhub_user', JSON.stringify(res.user));
    // Also save in sessionStorage for backward-compatibility with vanilla html pages if opened
    sessionStorage.setItem('studyhub_user', JSON.stringify(res.user));
  };

  const signup = async (data: { username: string; name: string; email: string; password: string; role?: string }) => {
    const res = await api.signup(data);
    setUser(res.user);
    setToken(res.token);
    localStorage.setItem('studyhub_token', res.token);
    localStorage.setItem('studyhub_user', JSON.stringify(res.user));
    sessionStorage.setItem('studyhub_user', JSON.stringify(res.user));
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to log out of StudyHub?')) {
      setUser(null);
      setToken(null);
      localStorage.removeItem('studyhub_token');
      localStorage.removeItem('studyhub_user');
      sessionStorage.removeItem('studyhub_user');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        loading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

