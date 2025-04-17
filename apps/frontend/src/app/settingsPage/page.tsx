import Image from 'next/image';

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="mt-50 bg-blue rounded text-center text-gray-100 dark:text-[#333]">
        <p className="px-4 py-4 text-4xl">Work in Progress</p>
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
