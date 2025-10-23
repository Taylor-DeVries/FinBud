import { HistoryState, Node } from '@/_data/types/types';

/*
    Helper functions for quiz logic
*/

export function isPrevAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index - 1] !== undefined) {
    return true;
  }
  return false;
}

export function isNextAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index + 1] !== undefined) {
    return true;
  }
  return false;
}

/*
    Quiz logic functions
*/

function getInitialState(data: HistoryState): HistoryState {
  let hist: HistoryState = data;
  if (data.initialState) {
    if (sessionStorage.getItem('userHistory')) {
      hist = {
        loading: data.loading,
        historyArray: JSON.parse(sessionStorage.getItem('userHistory')),
        error: data.error,
        initialState: false,
      };
      sessionStorage.removeItem('userHistory');
    } else {
      hist = {
        loading: data.loading,
        historyArray: [0],
        error: data.error,
        initialState: false,
      };
    }
  }
  return hist;
}

export { getInitialState };
