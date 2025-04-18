'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const SidebarHeader = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/finLogo.webp"
        alt="Avatar"
        height="150"
        width="150"
        className="object-cover object-top flex-shrink-0 hover:cursor-pointer"
        onClick={() => router.push('/')}
        priority
        unoptimized
      />
    </div>
  );
};
