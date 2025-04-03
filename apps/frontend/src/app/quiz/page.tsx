import QuizPage from '@/_components/Quiz/quiz';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
  const session = await getSession();

  if (session) {
    const data = await getHistoryFunction();
    return <QuizPage data={data}></QuizPage>;
  }

  return (
    <QuizPage
      data={{ loading: false, historyArray: [0], error: 'Not logged in' }}
    ></QuizPage>
  );
}
