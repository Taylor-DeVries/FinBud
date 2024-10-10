export enum NodeType {
	Question = "Question",
	Result = "Result",
	Link = "Link",
}

interface Link {
	link: string,
	text: string,
}

export interface Node {
	id?: number,
	nodeType: string,
	link?: Link,
	// NodeType.Question
	question?: string,
	answers?: { [key: string]: Node },
	// NodeType.Result
	answer?: string,
	moreInfo?: string[],
	// NodeType.Link
	connect_id?: number,
}

export function updateAnswers(localNode: Node): string[] {
	if (localNode.answers === undefined) {
		return [];
	}

	let temp: string[] = [];
	Object.keys(localNode.answers).map(key => (
		temp.push(key)
	))
	return temp;
}

// Function for finding the node with the correct id
export function findNode(searchNode: Node, connect_id: number): Node {
	let returnNode: Node | null;
	returnNode = findNodeRecursion(searchNode, connect_id);

	if (returnNode === null) {
		throw new Error("Node link not found");
	}
	return returnNode;
}
function findNodeRecursion(searchNode: Node, connect_id: number): Node | null {
	//console.log(currentNode)
	let returnNode: Node | null = null;

	// Base Case 1
	if (searchNode.nodeType == NodeType.Link) {
		returnNode = null;
	}
	// Base Case 2
	else if (searchNode.nodeType == NodeType.Result) {
		if (searchNode.id !== undefined && searchNode.id === connect_id) {
			returnNode = searchNode;
		}
	}
	else if (searchNode.nodeType === NodeType.Question) {
		//Base Case 3
		if (searchNode.id !== undefined && searchNode.id === connect_id) {
			returnNode = searchNode;
		}
		//Recursive Case
		else {
			if (searchNode.answers === undefined) {
				return null;
			}
			Object.entries(searchNode.answers).forEach(([answer, searchNodeChild]) => {
				const temp = findNodeRecursion(searchNodeChild, connect_id);
				if (temp !== null) {
					returnNode = temp;
				}
			})
		}
	}

	return returnNode;
}


