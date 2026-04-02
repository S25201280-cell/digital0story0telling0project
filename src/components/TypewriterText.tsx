import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, onComplete, speed = 20 }: { text: string, onComplete?: () => void, speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showRest, setShowRest] = useState(false);

  // 決定開頭要「逐字打出」的字數長度 (60 個字元約等於一兩句話)
  // 你可以自由修改這個數字來調整節奏
  const TYPED_LENGTH = 60;

  useEffect(() => {
    // 每次傳入新文字時，重置狀態
    setDisplayedText('');
    setShowRest(false);
    let i = 0;

    // 確保不會超過原本文字的總長度
    const limit = Math.min(text.length, TYPED_LENGTH);

    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;

      // 當逐字打字的進度達到限制長度時
      if (i >= limit) {
        clearInterval(interval);

        // 如果還有剩下的文字，暫停 0.5 秒後漸入顯示
        if (text.length > limit) {
          setTimeout(() => {
            setShowRest(true);
            if (onComplete) onComplete();
          }, 500); // 500 = 暫停 0.5 秒
        } else {
          // 如果文字本來就很短，打完就直接觸發完成
          if (onComplete) onComplete();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  // 擷取剩下的所有文字
  const restText = text.substring(TYPED_LENGTH);

  return (
    <span className="whitespace-pre-wrap">
      {/* 這是逐字打出來的前半段 */}
      {displayedText}
      
      {/* 這是漸入浮現的後半段 */}
      {showRest && restText && (
        <span 
          style={{ animation: 'fadeInText 1.2s ease-out forwards' }} 
          className="opacity-0"
        >
          {restText}
        </span>
      )}

      {/* 定義漸入的 CSS 動畫 */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInText {
          from { opacity: 0; filter: blur(2px); }
          to { opacity: 1; filter: blur(0px); }
        }
      `}} />
    </span>
  );
}
