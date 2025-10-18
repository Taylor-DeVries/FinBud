import { getHistoryApi, setHistoryApi, createHistoryApi } from '@/_services/callApi';
import { Node, HistoryState } from '@/_data/types/types';

export function findNodeTest(
  id: number,
  currentNode: Node,
  rootNode: Node
): Node {
  // Run first to see if child node is linked
  for (const response of currentNode.responses) {
    if (response.id == id) {
      return response;
    }
  }
  //If not found, run the recursive find from root, should never return null
  return findNodeRoot(id, rootNode) as Node;
}

//Recursive find node from root
function findNodeRoot(id: number, currentNode: Node): Node | null {
  let returnNode: Node | null = null;
  
  if (currentNode.id == id) {
    returnNode = currentNode;
  } else {
    for (const response of currentNode.responses) {
      returnNode = findNodeRoot(id, response);
      if (returnNode != null) break;
    }
  }

  return returnNode;
}

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
    return { loading: true, historyArray: historyArray, error: '', initialState: false };
  } catch (error) {
    let account = { loading: true, historyArray: [0], error: error.toString(), initialState:false };  
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
    
    return { loading: true, historyArray: historyArray, error: '', initialState:false };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false
    };
  }
}


export async function createHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    const historyString = historyArrayToHistoryString(historyArray);
    
    await createHistoryApi(historyArray);
    
    return { loading: true, historyArray: historyArray, error: '', initialState:false };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false
    };
  }
}