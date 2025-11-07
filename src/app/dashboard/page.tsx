import Dashboard from '@/_components/Dashboard-Component/Dashboard-Component';
import { ThemeProvider } from '@/app/settings/providers';
import { auth0 } from '@/_lib/auth0';
import ResponsiveImage from '@/_components/Responsive-Image-Component/ResponsiveImage';
import { getHistoryFunction } from '@/_lib/services/history-functions';

export default async function Page() {
  const session = await auth0.getSession();

  if (session) {
    const data = await getHistoryFunction();

    return (
      <>
        <ThemeProvider>
          <div className="h-screen w-full flex justify-center bg-dashboard_blue_bg dark:bg-[#2C3E50] p-8">
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
        <ResponsiveImage>
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-white/95 dark:bg-[#333] rounded-3xl shadow-lg backdrop-blur p-8 max-w-md w-full">
              <div className="text-center">
                <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-2">
                  Sign in to your Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Track goals, earn achievements, and continue your journey.
                </p>

                <a
                  href="/auth/login"
                  className="block w-full bg-[#5491B3] text-white rounded-2xl py-3.5 font-medium hover:bg-[#4A82A3] transition-colors"
                >
                  Sign in to continue
                </a>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                  By continuing you agree to our{' '}
                  <a
                    href="/info/terms"
                    className="text-[#5491B3] hover:text-[#4A82A3] dark:text-[#7BAFD1] dark:hover:text-[#5491B3] transition-colors"
                  >
                    Terms
                  </a>{' '}
                  and{' '}
                  <a
                    href="/info/privacy"
                    className="text-[#5491B3] hover:text-[#4A82A3] dark:text-[#7BAFD1] dark:hover:text-[#5491B3] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </ResponsiveImage>
      </ThemeProvider>
    );
  }
}
