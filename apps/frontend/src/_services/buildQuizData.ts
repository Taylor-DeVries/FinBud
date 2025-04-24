import quizPaths from '@/_data/constants/paths.json';
import quizTexts from '@/_data/constants/extendedTexts.json';
import quizLinks from '@/_data/constants/links.json';
import { QuizPath, QuizText, Node, QuizLink } from '@/_data/types/types';

export function buildQuizData(): Node {
  const paths: QuizPath = quizPaths as QuizPath;
  const extendedtexts: QuizText[] = quizTexts.extendedTexts as QuizText[];
  const links: QuizLink[] = quizLinks.links as QuizLink[];

  const extendedtexts_n = extendedtexts.length;

  return generateNode(paths);

  function generateNode(current: QuizPath): Node {
    const nodeAnswers = current.answer;
    const nodeExtendedTexts = getTextById(current.id);
    const nodeMainText = current.mainText;
    const nodeText: string[] = [];
    const nodeResponses: Node[] = [];
    const nodeLink = getLinkById(current.id);

    if (current.responses.length > 0) {
      for (const resp of current.responses) {
        nodeResponses.push(generateNode(resp));
      }
    }

    if (nodeMainText) {
      nodeText.push(nodeMainText);
      for (const exText of nodeExtendedTexts) {
        nodeText.push(exText);
      }
    }

    const newNode: Node = {
      answer: nodeAnswers,
      connectId: current.connectId,
      id: current.id,
      text: nodeText,
      link: nodeLink,
      responses: nodeResponses

    };

    return newNode;
  }

  function getTextById(ID: number): string[] {
    return extendedtexts.find((text) => text.id == ID)?.extendedText ?? ['Error: Quiz ID does not exist'];
  }

  function getLinkById(ID: number): string {
    return links.find((link) => link.id == ID)?.link;
  }
}