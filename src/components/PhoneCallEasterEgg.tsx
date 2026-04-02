import React, { useState, useEffect } from 'react';

interface PhoneCallEasterEggProps {
  onClose: () => void;
}

export default function PhoneCallEasterEgg({ onClose }: PhoneCallEasterEggProps) {
  const [phase, setPhase] = useState<'dialing' | 'ringing' | 'connected' | 'error' | 'ended'>('dialing');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timer, setTimer] = useState(0);

  // 處理按鍵輸入
  const handlePress = (digit: string) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber(prev => prev + digit);
    }
  };

  // 處理刪除退格
  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  // 撥出電話
  const handleCall = () => {
    if (!phoneNumber) return;
    setPhase('ringing');
  };

  // 階段切換與計時器邏輯
  useEffect(() => {
    // 撥號中 (等待 3.5 秒)
    if (phase === 'ringing') {
      const timeout = setTimeout(() => {
        const cleanNumber = phoneNumber.replace(/\s+/g, '');
        // 驗證號碼是否正確
        if (cleanNumber === '38939980') {
          setPhase('connected');
        } else {
          setPhase('error');
        }
      }, 3500);
      return () => clearTimeout(timeout);
    }

    // 接通成功 (播放駭客語音，持續 8 秒)
    if (phase === 'connected') {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      const timeout = setTimeout(() => setPhase('ended'), 8000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }

    // 號碼錯誤 (空號提示，持續 4 秒)
    if (phase === 'error') {
      const timeout = setTimeout(() => setPhase('ended'), 4000);
      return () => clearTimeout(timeout);
    }

    // 通話結束 (延遲 2 秒後關閉視窗)
    if (phase === 'ended') {
      const timeout = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase, phoneNumber, onClose]);

  // 格式化計時器顯示 (00:00)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center font-sans transition-colors duration-500 ${phase === 'dialing' ? 'bg-gray-50 text-black' : 'bg-black text-white'}`}>
      
      {/* 階段一：撥號鍵盤 */}
      {phase === 'dialing' && (
        <div className="w-full max-w-sm flex flex-col items-center">
          
          {/* 這裡是之前遺漏的：電話號碼顯示螢幕！ */}
          <div className="h-24 w-full flex items-center justify-center mb-6">
            <span className="text-4xl tracking-widest font-light">
              {phoneNumber || '\u00A0'}
            </span>
          </div>

          {/* 九宮格鍵盤 */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-10">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((btn) => (
              <button
                key={btn}
                onClick={() => handlePress(btn)}
                className="w-20 h-20 bg-gray-200 hover:bg-gray-300 rounded-full flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-3xl font-light">{btn}</span>
              </button>
            ))}
          </div>

          {/* 底部按鈕：撥出與刪除 */}
          <div className="flex items-center justify-center gap-8 w-full relative">
            <div className="w-16"></div> {/* 排版佔位用 */}
            
            <button
              onClick={handleCall}
              className="w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform active:scale-95"
            >
              {/* 電話圖標 SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
            
            <div className="w-16 flex justify-center">
              {/* 當有輸入數字時才顯示刪除鍵 */}
              {phoneNumber.length > 0 && (
                <button onClick={handleDelete} className="p-4 text-gray-400 hover:text-gray-800 transition-colors">
                  {/* 退格圖標 SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 階段二：撥號等待中 */}
      {phase === 'ringing' && (
        <div className="text-center animate-pulse">
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <div className="text-3xl font-light mb-2">{phoneNumber}</div>
          <div className="text-gray-400">Calling...</div>
        </div>
      )}

      {/* 階段三：接通 (駭客語音彩蛋) */}
      {phase === 'connected' && (
        <div className="text-center w-full max-w-lg px-8">
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">🏢</span>
          </div>
          <div className="text-3xl font-light mb-2">Ming Trust Fund</div>
          <div className="text-green-400 font-mono mb-8">{formatTime(timer)}</div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 min-h-[120px] flex items-center justify-center">
            <p className="text-lg text-gray-300 italic">
              "Welcome to the Ming Family Offshore Trust. Please hold... <br/>
              <span className="text-red-500 font-bold not-italic">[SYSTEM GLITCH]</span> <br/>
              ...Critical Error. All assets have been <span className="text-red-500 font-bold not-italic">FROZEN</span>. Goodbye."
            </p>
          </div>
        </div>
      )}

      {/* 階段四：空號錯誤 */}
      {phase === 'error' && (
        <div className="text-center w-full max-w-lg px-8">
          <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-red-500">❓</span>
          </div>
          <div className="text-3xl font-light mb-2">{phoneNumber}</div>
          <div className="text-red-500 mb-8">Call Failed</div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <p className="text-lg text-gray-300">
              "We're sorry, the number you have dialed is not in service. Please check the number and try again."
            </p>
          </div>
        </div>
      )}

      {/* 階段五：通話結束 */}
      {phase === 'ended' && (
        <div className="text-center opacity-50">
          <div className="text-3xl font-light mb-2">Call Ended</div>
        </div>
      )}

    </div>
  );
}
