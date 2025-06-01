import Textbox from '@/_components/Textbox-Component/Textbox';
import Image from 'next/image';
import { useState } from 'react';

function Dashboard(url) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full flex flex-col gap-y-10 ">
      <div className="flex flex-col md:flex-row justify-between ">
        <Textbox label="Welcome To Your Dashboard, User!"></Textbox>
        <Textbox label="Toolbox"></Textbox>
      </div>

      <div className="w-full ">
        <Textbox label="your goals"></Textbox>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between gap-x-10">
        <div className="flex flex-col gap-y-10  w-2/3">
          <div className="w-full">
            <Textbox label="current acheivements"></Textbox>
          </div>
        </div>

        <div className="flex flex-col">
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
  );
}
export default Dashboard;
