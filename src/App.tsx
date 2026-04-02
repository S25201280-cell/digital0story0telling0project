/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import MatrixRain from './components/MatrixRain';
import LandingScreen from './components/LandingScreen';
import TerminalUI from './components/TerminalUI';
import HackerTyper from './components/HackerTyper';
import PhoneCallEasterEgg from './components/PhoneCallEasterEgg';
import EvidenceUploadEasterEgg from './components/EvidenceUploadEasterEgg';

// 確保你的 hacking.mp3 檔案已經放在 src 資料夾底下
import hackingMusic from './hacking.mp3';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isHackingMode, setIsHackingMode] = useState(false);
  const [isCallingMode, setIsCallingMode] = useState(false);
  const [isUploadingMode, setIsUploadingMode] = useState(false);
  
  // 建立兩個獨立的音樂控制器
  const audioRef = useRef<HTMLAudioElement>(null);
  const hackingAudioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.error("Audio play failed", e));
    }
  };

  // 監聽是否進入駭客模式，並切換音樂
  useEffect(() => {
    if (isHackingMode || isCallingMode || isUploadingMode) {
      // 1. 暫停平時的背景音樂
      if (audioRef.current) audioRef.current.pause();
      
      // 2. 播放駭客專屬音樂 (每次都從頭開始播)
      if (isHackingMode && hackingAudioRef.current) {
        hackingAudioRef.current.volume = 0.8; // 駭客音樂可以稍微大聲一點，增加壓迫感
        hackingAudioRef.current.currentTime = 0;
        hackingAudioRef.current.play().catch(e => console.error("Hacking audio play failed", e));
      }
    } else {
      // 1. 退出駭客模式時，暫停駭客音樂
      if (hackingAudioRef.current) {
        hackingAudioRef.current.pause();
      }
      
      // 2. 恢復播放平時的背景音樂
      if (hasStarted && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Audio play failed", e));
      }
    }
  }, [isHackingMode, isCallingMode, isUploadingMode, hasStarted]);

  return (
    <div className="min-h-screen bg-[#050a10] text-[#00f3ff] font-mono selection:bg-[#00f3ff] selection:text-[#050a10]">
      <MatrixRain dimmed={hasStarted && !isHackingMode} />
      
      {/* 平時的背景音樂 (使用你下載的 hacking.mp3 作為預設) */}
      <audio 
        ref={audioRef} 
        src={hackingMusic} 
        loop 
      />
      
      {/* 駭客模式專屬的背景音樂 (使用你下載的 hacking.mp3) */}
      <audio 
        ref={hackingAudioRef} 
        src={hackingMusic} 
        loop 
        preload="auto" 
      />

      {isHackingMode ? (
        <HackerTyper onClose={() => setIsHackingMode(false)} />
      ) : isCallingMode ? (
        <PhoneCallEasterEgg onClose={() => setIsCallingMode(false)} />
      ) : isUploadingMode ? (
        <EvidenceUploadEasterEgg onClose={() => setIsUploadingMode(false)} />
      ) : !hasStarted ? (
        <LandingScreen onStart={handleStart} />
      ) : (
        <TerminalUI audioRef={audioRef} onHackingMode={() => setIsHackingMode(true)} onCallingMode={() => setIsCallingMode(true)} onUploadingMode={() => setIsUploadingMode(true)} />
      )}
    </div>
  );
}