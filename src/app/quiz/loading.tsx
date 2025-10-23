'use client';
import { SyncLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center bg-transparent">
      <SyncLoader size={25} color="#5298b8" />
    </div>
  );
}

export default Loader;
