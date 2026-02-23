'use client';

import { createContext, useContext, useRef, useState } from 'react';

const AudioContext = createContext({ isPlaying: false, toggleAudio: () => {} });

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/audio/coma-media-piano-ambience-relax_broken-frame-12447.mp3"
        loop
        preload="auto"
      />

      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
