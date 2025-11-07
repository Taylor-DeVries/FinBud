import QuizPage from './_components/quiz';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { getHistoryFunction } from '../../_lib/services/history-functions';

export default async function Page() {
  const data = await getHistoryFunction();
  return (
    <ResponsiveImage>
      <QuizPage data={data}></QuizPage>
    </ResponsiveImage>
  );
}
