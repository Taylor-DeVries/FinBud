import {
  getHistoryApi,
  setHistoryApi,
  createHistoryApi,
} from '@/_lib/api/user-history';
import { HistoryState } from '@/_lib/types/types';

export function historyArrayToHistoryString(historyArray: number[]): string {
  let historyString = '';
  for (let i = 0; i < historyArray.length; i++) {
    historyString += historyArray[i].toString() + ',';
  }
  historyString.slice(0, -1);
  return historyString;
}

export function historyStringToHistoryArray(historyString: string): number[] {
  const historyArray = historyString
    .split(',')
    .filter((id) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      id != null;
      return id;
    })
    .map((id) => Number(id));
  return historyArray;
}

export async function getHistoryFunction(): Promise<HistoryState> {
  try {
    const historyArray = await getHistoryApi();
    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    let account = {
      loading: true,
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

export async function setHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    await setHistoryApi(historyArray);

    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}

export async function createHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    const historyString = historyArrayToHistoryString(historyArray);

    await createHistoryApi(historyArray);

    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}
