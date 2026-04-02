import React, { useEffect } from 'react';

export default function LandingScreen({ onStart }: { onStart: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onStart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart]);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#00f3ff] mb-4 tracking-widest drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">
        AEGIS_CORE [PROJECT_REBOOT]
      </h1>
      <p className="text-lg md:text-xl text-[#00f3ff] mb-12 opacity-80">
        The Compute Bottleneck and the Chained Dragon
      </p>
      <button
        onClick={onStart}
        className="text-[#00f3ff] text-xl md:text-2xl animate-pulse hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all cursor-pointer bg-transparent border-none outline-none"
      >
        &gt; [PRESS ENTER TO DECRYPT DATA]
      </button>
    </div>
  );
}
