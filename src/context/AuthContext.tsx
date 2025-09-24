import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true
  });

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('soul-sip-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState({ user, isLoading: false });
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        setState({ user: null, isLoading: false });
      }
    } else {
      setState({ user: null, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0]
    };
    
    localStorage.setItem('soul-sip-user', JSON.stringify(user));
    setState({ user, isLoading: false });
  };

  const register = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name
    };
    
    localStorage.setItem('soul-sip-user', JSON.stringify(user));
    setState({ user, isLoading: false });
  };

  const logout = () => {
    localStorage.removeItem('soul-sip-user');
    localStorage.removeItem('soul-sip-wishlist');
    setState({ user: null, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ 
      user: state.user, 
      isLoading: state.isLoading, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};