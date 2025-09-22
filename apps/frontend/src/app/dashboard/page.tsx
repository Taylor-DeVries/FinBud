import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';
import { getHistoryFunction } from '@/_utils/quiz-functions';
import Image from 'next/image';
import { ThemeProvider } from '@/app/settings/providers';
import { auth0 } from '@/lib/auth0';

export default async function Page() {
  const session = await auth0.getSession();

  if (session) {
    const data = await getHistoryFunction();

    return (
      <>
        <ThemeProvider>
          <div className="h-screen w-full flex justify-center bg-dashboard_blue_bg dark:bg-dark_blue p-8">
            <div className="w-full">
              <Dashboard historyData={data} />
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  } else {
    return (
      <ThemeProvider>
        <div className="h-screen w-full flex justify-center items-center bg-dashboard_blue_bg dark:bg-dark_blue p-8">
          <div className="w-full flex flex-col items-center justify-center gap-y-5 text-3xl text-center">
            <a className="underline" href="/auth/login">
              Sign In to view your Dashboard
            </a>
            <Image
              src="/images/Fin.png"
              alt="Fin"
              width={400}
              height={400}
              className="w-[300px] h-auto sm:w-[300px] sm:h-auto object-contain"
              unoptimized={true}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
