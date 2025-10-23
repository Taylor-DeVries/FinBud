import { HistoryState } from '@/_data/types/types';
import { createHistoryApi, setHistoryApi } from './history-api';
import { getHistoryApi } from '@/_services/callApi';

async function getHistoryFunction(): Promise<HistoryState> {
  try {
    const historyArray = await getHistoryApi();
    return {
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    let account = {
      historyArray: [0],
      error: error.toString(),
      initialState: false,
    };
    if (account.error == 'AxiosError: Request failed with status code 404') {
      account = await createHistoryFunction([0]);
      account.initialState = true;
    }
    return account;
  }
}

async function setHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    await setHistoryApi(historyArray);

    return {
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}

async function createHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    await createHistoryApi(historyArray);

    return {
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}

export { getHistoryFunction, setHistoryFunction, createHistoryFunction };
