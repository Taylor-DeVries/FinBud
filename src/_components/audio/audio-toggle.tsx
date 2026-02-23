'use client';

import { useAudio } from './audio-context';

export default function AudioToggle() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      className="
        fixed bottom-4 right-4 z-[9999]
        flex items-center justify-center
        h-10 w-10 rounded-xl

        /* Match sidebar colors */
        bg-zinc-100 dark:bg-[#333]

        /* Icon color */
        text-neutral-700 dark:text-white

        /* Subtle depth */
        shadow-md shadow-black/10

        /* Interactions */
        hover:bg-zinc-200 dark:hover:bg-[#3d3d3d]
        active:scale-95
        transition-all duration-200
      "
    >
      <span className="text-xl">{isPlaying ? '🔊' : '🔈'}</span>
    </button>
  );
}
