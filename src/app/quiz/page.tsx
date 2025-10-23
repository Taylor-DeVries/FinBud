import { Quiz } from './_ui';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { findNodeRoot, getInitialState, QuizContextProvider } from './_lib';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { buildQuizData } from '@/_services/buildQuizData';
import { Node } from '@/_data/types/types';

export default async function Page() {
  const rootNode: Node = buildQuizData();
  const data = await getHistoryFunction();
  const initialState = getInitialState(data);
  const startingNode = findNodeRoot(initialState.historyArray.at(-1), rootNode);

  return (
    <QuizContextProvider
      initialHistoryState={data}
      initialStartingNode={startingNode}
    >
      <ResponsiveImage>
        <Quiz rootNode={rootNode} />
      </ResponsiveImage>
    </QuizContextProvider>
  );
}
