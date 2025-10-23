import { HistoryState } from '@/_data/types/types';

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
