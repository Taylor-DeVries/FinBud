export interface Node {
  connectId?: number;
  id: number;
  answer: string;
  text: string[];
  responses: Node[];
}

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
