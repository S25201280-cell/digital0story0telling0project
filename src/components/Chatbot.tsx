import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot({ onHackingMode, onCallingMode, onUploadingMode }: { onHackingMode: () => void, onCallingMode: () => void, onUploadingMode: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'AEGIS_ASSISTANT online. Awaiting encrypted directives.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 讓聊天框永遠自動捲動到最新訊息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    
    // --- 🎭 彩蛋觸發區 ---
    if (userText.toLowerCase() === 'aegis model') {
      setInput('');
      onHackingMode();
      return;
    }

    if (userText.toLowerCase() === 'call') {
      setInput('');
      onCallingMode();
      return;
    }

    if (userText.toLowerCase() === 'upload evidence') {
      setInput('');
      onUploadingMode();
      return;
    }

    // --- 💬 一般訊息處理 ---
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    // 模擬駭客系統處理時間 (0.8秒)，然後給出隨機的終端機罐頭回覆
    setTimeout(() => {
      const genericResponses = [
        "ERR_403: COMMAND NOT RECOGNIZED. PLEASE INPUT A VALID DIRECTIVE.",
        "AEGIS_CORE: ACCESS DENIED. INSUFFICIENT CLEARANCE LEVEL.",
        "SYSTEM LOG: USER INPUT RECORDED. WAITING FOR S-CLASS OVERRIDE.",
        "DATA_NODE: SYNTAX ERROR. PLEASE REFER TO PROJECT_REBOOT PROTOCOL.",
        "WARNING: UNKNOWN INPUT. CONNECTION IS BEING MONITORED BY REYA_SECURITY."
      ];
      const randomResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)];
      
      setMessages(prev => [...prev, { role: 'model', text: randomResponse }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden text-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-xs text-[#00f3ff]/50 mb-1">
              {msg.role === 'user' ? 'USER_INPUT' : 'AEGIS_ASSISTANT'}
            </span>
            <div className={`p-2 max-w-[85%] rounded ${
              msg.role === 'user' 
                ? 'bg-[#00f3ff]/20 border border-[#00f3ff]/40 text-white' 
                : 'bg-[#050a10] border border-[#00f3ff]/20 text-[#00f3ff]'
            }`}>
              <div className="whitespace-pre-wrap font-mono">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex flex-col items-start">
            <span className="text-xs text-[#00f3ff]/50 mb-1">AEGIS_ASSISTANT</span>
            <div className="p-2 bg-[#050a10] border border-[#00f3ff]/20 text-[#00f3ff] animate-pulse">
              PROCESSING...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="p-3 border-t border-[#00f3ff]/30 bg-[#050a10] flex gap-2">
        <span className="text-[#00f3ff] mt-2">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="ENTER COMMAND..."
          className="flex-1 bg-transparent border-none outline-none text-[#00f3ff] placeholder-[#00f3ff]/30 font-mono"
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/20 disabled:opacity-50 disabled:hover:bg-transparent transition-colors font-bold"
        >
          [SEND]
        </button>
      </form>
    </div>
  );
}
