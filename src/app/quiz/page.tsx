import QuizPage from '@/app/quiz/_components/quiz';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { getHistoryFunction } from '@/_lib/_services/quiz-functions';

export default async function Page() {
  try {
    const data = await getHistoryFunction();
    return (
      <ResponsiveImage>
        <QuizPage data={data}></QuizPage>
      </ResponsiveImage>
    );
  } catch (error) {
    return (
      <ResponsiveImage>
        <QuizPage
          data={{
            loading: false,
            historyArray: [0],
            error: 'Not logged in',
            initialState: false,
          }}
        ></QuizPage>
      </ResponsiveImage>
    );
  }
}
