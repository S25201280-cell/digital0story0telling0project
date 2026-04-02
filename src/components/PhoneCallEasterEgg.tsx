import React, { useState, useEffect } from 'react';
import { Phone, Delete } from 'lucide-react';

interface PhoneCallEasterEggProps {
  onClose: () => void;
}

type CallPhase = 'dialing' | 'ringing' | 'connected' | 'error' | 'ended';

export default function PhoneCallEasterEgg({ onClose }: PhoneCallEasterEggProps) {
  const [phase, setPhase] = useState<CallPhase>('dialing');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timer, setTimer] = useState(0);
  const [subtitle, setSubtitle] = useState('');

  const fullMessage = "Welcome to the Ming Family Offshore Trust. Please hold... [SYSTEM GLITCH] ...Critical Error. All assets have been frozen. Goodbye.";
  const errorMessage = "We're sorry, the number you have dialed is not in service. Please check the number and try again.";

  // 處理鍵盤輸入
  const handleKeyPress = (key: string) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber(prev => prev + key);
    }
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      setPhase('ringing');
    }
  };

  const handleHangUp = () => {
    setPhase('ended');
  };

  // 階段切換邏輯
  useEffect(() => {
    if (phase === 'ringing') {
      const ringTimer = setTimeout(() => {
        const cleanNumber = phoneNumber.replace(/\s/g, '');
        if (cleanNumber === '38939980') {
          setPhase('connected');
        } else {
          setPhase('error');
        }
      }, 3500);
      return () => clearTimeout(ringTimer);
    }

    if (phase === 'connected') {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);

      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= fullMessage.length) {
          setSubtitle(fullMessage.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      const endTimer = setTimeout(() => {
        setPhase('ended');
      }, 7000);

      return () => {
        clearInterval(interval);
        clearInterval(typeInterval);
        clearTimeout(endTimer);
      };
    }

    if (phase === 'error') {
      setSubtitle(errorMessage);
      const endTimer = setTimeout(() => {
        setPhase('ended');
      }, 4000);
      return () => clearTimeout(endTimer);
    }

    if (phase === 'ended') {
      setSubtitle('');
      const closeTimer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(closeTimer);
    }
  }, [phase, phoneNumber, onClose, fullMessage, errorMessage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ==========================================
  // 第一階段：撥號盤 (Dialing Phase)
  // ==========================================
  if (phase === 'dialing') {
    return (
      /* 修改 1：改成 justify-center 讓鍵盤絕對置中，並加上 text-gray-900 強制黑色字體 */
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 font-sans text-gray-900">
        <div className="w-full max-w-sm px-6 flex flex-col items-center">
          
          {/* 修改 2：加上實體的白色背景框和陰影，確保螢幕區塊永遠可見 */}
          <div className="h-24 w-full flex items-center justify-center mb-10 bg-white rounded-xl shadow-sm border border-gray-200">
            {/* 強制設定 text-black 確保字體絕對是黑色的 */}
            <div className="text-4xl tracking-widest font-light text-center break-all text-black">
              {phoneNumber || '\u00A0'} {/* \u00A0 確保即使沒打字，框框也不會塌陷 */}
            </div>
          </div>

          {/* 鍵盤區塊 */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-12">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-light text-black hover:bg-gray-300 active:bg-gray-400 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* 底部撥出與刪除鈕 */}
          <div className="w-full grid grid-cols-3 items-center">
            <div className="col-start-2 flex justify-center">
              <button
                onClick={handleCall}
                className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 active:bg-green-700 transition-colors shadow-md"
              >
                <Phone size={36} className="text-white fill-current" />
              </button>
            </div>
            <div className="col-start-3 flex justify-center">
              {phoneNumber.length > 0 && (
                <button
                  onClick={handleDelete}
                  className="w-16 h-16 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Delete size={32} />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // 其他階段：通話中、錯誤、結束
  // ==========================================
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-black font-sans text-white transition-opacity duration-1000 ${phase === 'ended' ? 'opacity-30' : 'opacity-100'}`}>
      
      <div className="flex flex-col items-center mt-20 space-y-4">
        <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-4xl text-gray-300">
          {phase === 'connected' ? 'M' : '?'}
        </div>
        <h1 className="text-3xl font-light text-center px-4">
          {phase === 'connected' ? 'Ming Family Offshore Trust' : phoneNumber}
        </h1>
      </div>

      <div className="flex flex-col items-center flex-1 justify-center w-full px-8">
        <div className="text-lg text-gray-300 mb-8">
          {phase === 'ringing' && 'calling...'}
          {phase === 'connected' && formatTime(timer)}
          {phase === 'error' && 'Call Failed'}
          {phase === 'ended' && 'Call Ended'}
        </div>
        
        {(phase === 'connected' || phase === 'error') && (
          <div className="h-32 flex items-center justify-center text-center text-lg md:text-xl text-gray-200 min-h-[120px]">
            {subtitle}
            {phase === 'connected' && <span className="animate-pulse">_</span>}
          </div>
        )}
      </div>

      <div className="mb-20">
        <button 
          onClick={handleHangUp}
          className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
        >
          <Phone size={36} className="text-white transform rotate-[135deg] fill-current" />
        </button>
      </div>
    </div>
  );
}
