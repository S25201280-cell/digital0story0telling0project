import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, onComplete, speed = 20 }: { text: string, onComplete?: () => void, speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span className="whitespace-pre-wrap">{displayedText}</span>;
}
