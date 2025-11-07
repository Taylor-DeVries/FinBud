import quizPaths from '@/_lib/constants/paths.json';
import quizTexts from '@/_lib/constants/extendedTexts.json';
import quizLinks from '@/_lib/constants/links.json';
import { QuizPath, QuizText, Node, QuizLink } from '@/_lib/types/types';

/**
 * This function moves the quiz data from json to a tree structure we can traverse
 *
 * @returns The root node of a node tree that contains the entire quiz
 */
export function buildQuizData(): Node {
  const paths = quizPaths as QuizPath;
  const extendedTexts = quizTexts.extendedTexts as QuizText[];
  const links = quizLinks.links as QuizLink[];

  return generateNode(paths, extendedTexts, links);
}

function generateNode(
  currentNode: QuizPath,
  extendedTexts: QuizText[],
  links: QuizLink[]
): Node {
  const nodeAnswers = currentNode.answer;
  const nodeExtendedTexts = getTextById(currentNode.id, extendedTexts);
  const nodeMainText = currentNode.mainText;
  const nodeText: string[] = [];
  const nodeResponses: Node[] = [];
  const nodeLink = getLinkById(currentNode.id, links);

  if (currentNode.responses.length > 0) {
    for (const response of currentNode.responses) {
      nodeResponses.push(generateNode(response, extendedTexts, links));
    }
  }

  if (nodeMainText) {
    nodeText.push(nodeMainText);
    for (const extraText of nodeExtendedTexts) {
      nodeText.push(extraText);
    }
  }

  const newNode: Node = {
    answer: nodeAnswers,
    connectId: currentNode.connectId,
    id: currentNode.id,
    text: nodeText,
    link: nodeLink,
    responses: nodeResponses,
  };

  return newNode;
}

function getTextById(id: number, extendedTexts: QuizText[]): string[] {
  return (
    extendedTexts.find((text) => text.id == id)?.extendedText ?? [
      'Error: Quiz ID does not exist',
    ]
  );
}

function getLinkById(id: number, links: QuizLink[]): string {
  return links.find((link) => link.id == id)?.link;
}
