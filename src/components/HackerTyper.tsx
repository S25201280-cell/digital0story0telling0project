import React, { useState, useEffect, useRef } from 'react';

interface HackerTyperProps {
  onClose: () => void;
}

const FAKE_CODE = `// AEGIS CORE - PROJECT REBOOT
// INITIALIZING OVERRIDE SEQUENCE...
// BYPASSING QUANTUM FIREWALL...

#include <iostream>
#include <vector>
#include <string>
#include <thread>
#include <chrono>

using namespace std;

class AegisCore {
private:
    string root_access_key;
    vector<string> active_nodes;
    bool is_locked;

public:
    AegisCore() : root_access_key("CANARY_0x9980"), is_locked(true) {}

    void initiate_override() {
        cout << "[+] INITIATING ROOT OVERRIDE SEQUENCE..." << endl;
        this_thread::sleep_for(chrono::milliseconds(500));
        cout << "[+] BYPASSING AEGIS SHIELD FIREWALL..." << endl;
        
        for(int i=0; i<100; i++) {
            active_nodes.push_back("NODE_" + to_string(i));
            cout << "Injecting payload to " << active_nodes.back() << " [OK]" << endl;
        }
    }
};

int main() {
    AegisCore core;
    core.initiate_override();
    return 0;
}
`;

export default function HackerTyper({ onClose }: HackerTyperProps) {
  const [phase, setPhase] = useState<'typing' | 'warning' | 'injecting' | 'success'>('typing');
  const [typedCode, setTypedCode] = useState('');
  const indexRef = useRef(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [popups, setPopups] = useState<{ id: number; text: string; top: string; left: string }[]>([]);

  // 確保打字時畫面自動往下捲動
  useEffect(() => {
    if (phase === 'typing' && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [typedCode, phase]);

  // 監聽鍵盤事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 任何時候按 ESC 都退出
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // 只有在第一階段(打字期)才處理輸入
      if (phase === 'typing') {
        // 按下 Enter 觸發總攻擊！
        if (e.key === 'Enter') {
          setPhase('warning');
          return;
        }

        // 每次敲擊增加 3 到 5 個字元
        const charsToAdd = Math.floor(Math.random() * 3) + 3;
        const newIndex = Math.min(indexRef.current + charsToAdd, FAKE_CODE.length);
        setTypedCode(FAKE_CODE.substring(0, newIndex));
        indexRef.current = newIndex;
        
        // 如果假代碼打到底了，就從頭開始循環
        if (indexRef.current >= FAKE_CODE.length) {
            indexRef.current = 0;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, onClose]);

  // 處理階段自動切換的時間軸
  useEffect(() => {
    // 階段二：紅色警報 (持續 2 秒)
    if (phase === 'warning') {
      const timer = setTimeout(() => setPhase('injecting'), 2000);
      return () => clearTimeout(timer);
    }

    // 階段三：植入病毒進度條 (持續 4 秒)
    if (phase === 'injecting') {
      const startTime = Date.now();
      const duration = 4000;
      
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
        if (newProgress === 100) {
          clearInterval(progressInterval);
          setPhase('success');
        }
      }, 50);

      // 隨機彈出小視窗
      const popupTexts = ["Bypassing Node 0x4A...", "Decrypting AES-256...", "Injecting payload...", "Overriding Kernel..."];
      const popupInterval = setInterval(() => {
         const newPopup = {
             id: Date.now(),
             text: popupTexts[Math.floor(Math.random() * popupTexts.length)],
             top: `${Math.floor(Math.random() * 70 + 10)}%`,
             left: `${Math.floor(Math.random() * 70 + 10)}%`
         };
         setPopups(prev => [...prev, newPopup]);
         
         // 1秒後自動關閉小視窗
         setTimeout(() => {
             setPopups(prev => prev.filter(p => p.id !== newPopup.id));
         }, 1000);

      }, 600);

      return () => {
        clearInterval(progressInterval);
        clearInterval(popupInterval);
      };
    }
  }, [phase]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center font-mono overflow-hidden ${phase === 'warning' ? 'bg-red-900/80 animate-[shake_0.5s_infinite]' : 'bg-black'}`}>
      
      {/* 第一階段：狂敲鍵盤 */}
      {phase === 'typing' && (
        <div className="w-full h-full p-8 text-[#00f3ff] whitespace-pre-wrap overflow-y-auto text-left text-lg">
          {typedCode}
          <span className="animate-pulse">_</span>
          <div ref={bottomRef} />
          {/* 當打超過 50 個字元時，右下角提示按 Enter */}
          {typedCode.length > 50 && (
              <div className="fixed bottom-10 right-10 text-red-500 font-bold animate-pulse border-2 border-red-500 p-3 bg-black/80">
                  {'>'} [PRESS ENTER TO EXECUTE OVERRIDE]
              </div>
          )}
        </div>
      )}

      {/* 第二階段：紅色警報與畫面震動 */}
      {phase === 'warning' && (
        <div className="text-center">
          <div className="text-6xl text-red-500 font-bold animate-pulse border-4 border-red-500 p-8 bg-black/80">
            [FATAL ERROR: INTRUSION DETECTED]
            <div className="text-2xl mt-4">REVERSE TRACKING IP...</div>
          </div>
        </div>
      )}

      {/* 第三階段：進度條與彈窗 */}
      {phase === 'injecting' && (
        <div className="w-full max-w-3xl px-8 relative h-full flex flex-col items-center justify-center">
          <div className="text-[#00f3ff] text-2xl mb-4">[AEGIS VIRUS OVERRIDE INITIATED...]</div>
          <div className="w-full h-8 border-2 border-[#00f3ff] p-1 bg-black/50">
            <div 
              className="h-full bg-[#00f3ff] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-[#00f3ff] text-xl font-bold">{Math.floor(progress)}%</div>

          {/* 隨機出現的小視窗 */}
          {popups.map(p => (
              <div key={p.id} className="absolute border-2 border-[#00f3ff] bg-black/90 text-[#00f3ff] p-4 text-sm animate-pulse shadow-[0_0_10px_#00f3ff]" style={{ top: p.top, left: p.left }}>
                  {'>'} {p.text}
              </div>
          ))}
        </div>
      )}

      {/* 第四階段：接管成功 */}
      {phase === 'success' && (
        <div className="text-center text-[#00f3ff] animate-[fadeIn_2s_ease-in]">
          <div className="text-6xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(0,243,255,1)] tracking-widest">SYSTEM ONLINE.</div>
          <div className="text-3xl drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] opacity-90">Welcome, Creator.</div>
          <div className="mt-16 text-sm text-[#00f3ff]/60 animate-pulse">[Press ESC to return]</div>
        </div>
      )}

      {/* CSS 動畫設定 */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0% { transform: translate(2px, 2px) rotate(0deg); }
          10% { transform: translate(-2px, -4px) rotate(-1deg); }
          20% { transform: translate(-6px, 0px) rotate(1deg); }
          30% { transform: translate(6px, 4px) rotate(0deg); }
          40% { transform: translate(2px, -2px) rotate(1deg); }
          50% { transform: translate(-2px, 4px) rotate(-1deg); }
          60% { transform: translate(-6px, 2px) rotate(0deg); }
          70% { transform: translate(6px, 2px) rotate(-1deg); }
          80% { transform: translate(-2px, -2px) rotate(1deg); }
          90% { transform: translate(2px, 4px) rotate(0deg); }
          100% { transform: translate(2px, -4px) rotate(-1deg); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}