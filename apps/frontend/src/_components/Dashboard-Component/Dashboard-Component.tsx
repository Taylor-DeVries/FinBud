import Textbox from '@/_components/Textbox-Component/Textbox';
import Image from 'next/image';
import { useState } from 'react';
import Goal from '@/_components/Dashboard-Component/Goal/Goal';
import Acheivements from '@/_components/Dashboard-Component/Achievements/Acheivements';
import Toolbox from './Toolbox/Toolbox';
import { useUser } from '@auth0/nextjs-auth0/client';

function Dashboard(url) {
  const [loading, setLoading] = useState(true);

  const { user, isLoading } = useUser();
  const welcomeMessage = user?.name
    ? `Welcome to your dashboard ${user.name}!`
    : 'Welcome to your dashboard!';

  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="flex flex-col gap-y-8 m-8 text-white dark:text-[#333]">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="font-bold text-xl sm:text-2xl  drop-shadow-lg dark:text-shadow-none">
            `{welcomeMessage}`
          </p>
        </div>

        <div className="w-full">
          <Goal goal={'make money'} percentage={78} />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between items-start gap-x-5 md:gap-y-5 lg:gap-y-5 gap-y-5 ">
          <div className="flex flex-col gap-y-8 w-full md:w-2/3">
            <div className="w-full">
              {/* <Textbox label="current acheivements"></Textbox> */}
              <Acheivements />
            </div>

            <div>
              <Toolbox />
            </div>
          </div>

          <div className="flex flex-col justify-end items-center lg:items-start md:items-start h-full md:w-1/2 gap-y-8">
            <div className="w-80 md:ml-auto">
              <Textbox
                label="Tip! You can open a TFSA through an online brokerage and buy ETFs that capture the market!"
                paddingBetween={false}
                chatBubble={true}
                centerAlignment={false}
                dashboard={true}
              />
            </div>
            <Image
              src="/images/Fin.webp"
              alt="Logo"
              width={250}
              height={250}
              className=""
              priority
              unoptimized
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
