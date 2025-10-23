import { Quiz } from './_ui';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { QuizContextProvider } from './_lib';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';

export default async function Page() {
  const data = await getHistoryFunction();
  return (
    <QuizContextProvider data={data}>
      <ResponsiveImage>
        <Quiz></Quiz>
      </ResponsiveImage>
    </QuizContextProvider>
  );
}
