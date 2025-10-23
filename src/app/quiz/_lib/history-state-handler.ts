import { Node } from '@/_data/types/types';

function isPrevAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index - 1] !== undefined) {
    return true;
  }
  return false;
}

function isNextAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index + 1] !== undefined) {
    return true;
  }
  return false;
}

function findNode(id: number, currentNode: Node, rootNode: Node): Node {
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

function historyArrayToHistoryString(historyArray: number[]): string {
  let historyString = '';
  for (let i = 0; i < historyArray.length; i++) {
    historyString += historyArray[i].toString() + ',';
  }
  historyString.slice(0, -1);
  return historyString;
}

function historyStringToHistoryArray(historyString: string): number[] {
  const historyArray = historyString
    .split(',')
    .filter((id) => {
      id != null;
      return id;
    })
    .map((id) => Number(id));
  return historyArray;
}

export {
  isPrevAvailable,
  isNextAvailable,
  findNode,
  findNodeRoot,
  historyArrayToHistoryString,
  historyStringToHistoryArray,
};
