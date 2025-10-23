'use client'; // Required for Next.js 13+ App Router

import { HistoryState, Node } from '@/_data/types/types';
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null);

// Actual provider component
export function QuizContextProvider({
  children,
  initialHistoryState,
  initialStartingNode,
}) {
  const [historyState, setHistoryState] =
    useState<HistoryState>(initialHistoryState);
  const [showNextText, setShowNextText] = useState<boolean>(false);
  const [showPrevText, setShowPrevText] = useState<boolean>(false);
  const [currentNode, setCurrentNode] = useState<Node>(initialStartingNode);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  const [showTfsaCalculator, setshowTfsaCalculator] = useState(false);
  const [showFhsaCalculator, setshowFhsaCalculator] = useState(false);
  const [showAllocationCalculator, setShowAllocationCalculator] =
    useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const value = {
    historyState,
    setHistoryState,
    currentTextIndex,
    setCurrentTextIndex,
    showNextText,
    setShowNextText,
    showPrevText,
    setShowPrevText,
    currentNode,
    setCurrentNode,
    showTfsaCalculator,
    setshowTfsaCalculator,
    showFhsaCalculator,
    setshowFhsaCalculator,
    showAllocationCalculator,
    setShowAllocationCalculator,
    showLink,
    setShowLink,
    showDashboard,
    setShowDashboard,
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
