import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="mt-50 bg-blue text-gray-100 dark:text-[#333] rounded text-center">
        <h2 className="px-4 py-4 text-4xl">Work in Progress</h2>
      </div>
      <Image
        src="/images/FinConstruction.png"
        alt="Fin"
        width={400}
        height={400}
        className="w-[300px] h-auto sm:w-[400px] sm:h-auto object-contain"
        unoptimized={true}
      />
    </div>
  );
}
