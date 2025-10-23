'use client'; // Required for Next.js 13+ App Router

import { HistoryState } from '@/_data/types/types';
import { createContext, useContext, useState } from 'react';
import { getInitialState } from './utils';

const QuizContext = createContext(null);

// Actual provider component
export function QuizContextProvider({ children, data }) {
  const [state, setState] = useState('initial value');
  const [historyState, setHistoryState] = useState<HistoryState>(
    getInitialState(data)
  );

  const value = {
    state,
    setState,
    historyState,
    setHistoryState,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

// Custom hooks
export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within QuizContextProvider');
  }
  return context;
}
