import { Quiz } from './_ui';
import { findNodeRoot, QuizContextProvider, getHistoryFunction } from './_lib';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { buildQuizData } from '@/_services/buildQuizData';
import { Node } from '@/_data/types/types';

export default async function Page() {
  const rootNode: Node = buildQuizData();
  const historyState = await getHistoryFunction();
  const startingNode = findNodeRoot(historyState.historyArray.at(-1), rootNode);

  return (
    <QuizContextProvider
      initialHistoryState={historyState}
      initialStartingNode={startingNode}
    >
      <ResponsiveImage>
        <Quiz rootNode={rootNode} />
      </ResponsiveImage>
    </QuizContextProvider>
  );
}
