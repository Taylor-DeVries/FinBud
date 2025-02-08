import { getHistoryApi, setHistoryApi } from "@/_services/callApi";
import { Node, HistoryState } from "@/_data/types/types";

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
  let historyString: string = "";
  for (let i = 0; i < historyArray.length; i++) {
    historyString += historyArray[i].toString() + ",";
  }
  historyString.slice(0, -1);
  return historyString;
}

export function historyStringToHistoryArray(historyString: string): number[] {
  let historyArray: number[];
  historyArray = historyString
    .split(",")
    .filter((id) => {
      id != null;
      return id;
    })
    .map((id) => Number(id));
  return historyArray;
}

export async function getHistoryFunction(): Promise<HistoryState> {
  try {
    let historyString = await getHistoryApi();

    let historyArray = historyStringToHistoryArray(historyString);

    return { loading: true, historyArray: historyArray, error: "" };
  } catch (error) {
    let account = { loading: true, historyArray: [0], error: error.toString() };

    if (account.error == "AxiosError: Request failed with status code 404") {
      account = await setHistoryFunction([0]);
    }

    return account;
  }
}

export async function setHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    let historyString = historyArrayToHistoryString(historyArray);

    await setHistoryApi(historyString);

    return { loading: true, historyArray: historyArray, error: "" };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
    };
  }
}
