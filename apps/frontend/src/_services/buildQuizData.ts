import quizPaths from '_data/constants/paths.json';
import quizAnswers from '_data/constants/answers.json';
import quizTexts from '_data/constants/extendedTexts.json';
import { QuizPath, QuizAnswer, QuizText, Node } from '_data/types/types';

export function buildQuizData(): Node {
  const paths: QuizPath = quizPaths as QuizPath;
  const answers: QuizAnswer[] = quizAnswers.answers as QuizAnswer[];
  const extendedtexts: QuizText[] = quizTexts.extendedTexts as QuizText[];

  const answers_n = answers.length;
  const extendedtexts_n = extendedtexts.length;

  return generateNode(paths);

  function generateNode(current: QuizPath): Node {
    const nodeAnswers = getAnswerById(current.id, 0, answers_n - 1);
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
      for (const exTex of nodeExtendedTexts) {
        nodeText.push(exTex);
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

  function getAnswerById(ID: number, start: number, end: number): string {
    //search via bin search

    if (start > end) {
      return 'Error: Quiz ID does not exist.'; // throw error?
    } else if (start === end) {
      return answers[start].id === ID
        ? answers[start].answer
        : 'Error: Quiz ID does not exist.'; // throw error?
    } else {
      const mid = Math.floor((start + end) / 2);

      if (answers[mid].id === ID) {
        return answers[mid].answer;
      } else if (ID < answers[mid].id) {
        //search on first half
        return getAnswerById(ID, start, mid - 1);
      } else {
        //search on second half
        return getAnswerById(ID, mid + 1, end);
      }
    }
  }

  function getTextById(ID: number, start: number, end: number): string[] {
    //search via bin search

    if (start > end) {
      return ['Error: Quiz ID does not exist.']; // throw error?
    } else if (start === end) {
      return extendedtexts[start].id === ID
        ? extendedtexts[start].extendedText
        : ['Error: Quiz ID does not exist.']; // throw error?
    } else {
      const mid = Math.floor((start + end) / 2);

      if (extendedtexts[mid].id === ID) {
        return extendedtexts[mid].extendedText;
      } else if (ID < extendedtexts[mid].id) {
        //search on first half
        return getTextById(ID, start, mid - 1);
      } else {
        //search on second half
        return getTextById(ID, mid + 1, end);
      }
    }
  }
}
