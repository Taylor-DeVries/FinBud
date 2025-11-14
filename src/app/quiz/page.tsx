import QuizPage from '@/app/quiz/_components/quiz';
import ResponsiveImage from '@/_components/responsive-image-component/responsive-image';
import { getHistoryFunction } from '@/_lib/_services/quiz-functions';

export default async function Page() {
  const data = await getHistoryFunction();
  return (
    <ResponsiveImage>
      <QuizPage data={data}></QuizPage>
    </ResponsiveImage>
  );
}
