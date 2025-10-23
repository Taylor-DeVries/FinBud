import { QuizPage } from './_ui';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';

export default async function Page() {

  try {  
  const data = await getHistoryFunction();
    return (
      <ResponsiveImage>
        <QuizPage data={data}></QuizPage>
      </ResponsiveImage>
    );
  }
  catch (error) {
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

  

