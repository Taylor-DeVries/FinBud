import quizPaths from '@/_data/constants/paths.json';
import quizTexts from '@/_data/constants/extendedTexts.json';
import { QuizPath, QuizText, Node } from '@/_data/types/types';

export function buildQuizData(): Node {
  const paths: QuizPath = quizPaths as QuizPath;
  const extendedtexts: QuizText[] = quizTexts.extendedTexts as QuizText[];

  const extendedtexts_n = extendedtexts.length;

  return generateNode(paths);

  function generateNode(current: QuizPath): Node {
    const nodeAnswers = current.answer;
    const nodeExtendedTexts = getTextById(current.id, 0, extendedtexts_n - 1);
    const nodeMainText = current.mainText;
    const nodeText: string[] = [];
    const nodeResponses: Node[] = [];

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
      responses: nodeResponses,
    };

    return newNode;
  }

  function getTextById(ID: number, start: number, end: number): string[] {
    return extendedtexts.find((text) => text.id == ID)?.extendedText ?? ['Error: Quiz ID does not exist'];
  }
}
