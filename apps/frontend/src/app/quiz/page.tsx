import QuizPage from '@/_components/Quiz-Component/quiz';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
  const session = await getSession();

  if (session) {
    const data = await getHistoryFunction();
    return <QuizPage data={data}></QuizPage>;
  }

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
