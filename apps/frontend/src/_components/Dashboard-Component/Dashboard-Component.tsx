import Textbox from '@/_components/Textbox-Component/Textbox';
import Image from 'next/image';
import { useState } from 'react';
import Goal from '@/_components/Dashboard-Component/Goal/Goal';
import Acheivements from '@/_components/Dashboard-Component/Achievements/Acheivements';

function Dashboard(url) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-5 m-8">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="font-bold text-xl sm:text-2xl text-white dark:text-[#333] drop-shadow-lg dark:text-shadow-none">
            Welcome to your dashboard User!
          </p>
        </div>

        <div className="w-full">
          <Goal goal={'make money'} percentage={78} />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between gap-x-5 gap-y-5">
          <div className="flex flex-col gap-y-10  w-full md:w-2/3">
            <div className="w-full">
              {/* <Textbox label="current acheivements"></Textbox> */}
              <Acheivements />
            </div>
          </div>

          <div className="flex flex-col ">
            <Textbox label="some cool tip here!" />
            <Image
              src="/images/Fin.webp"
              alt="Logo"
              width={300}
              height={300}
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
