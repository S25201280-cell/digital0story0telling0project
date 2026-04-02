import React, { useState } from 'react';
import { X, Lock, Unlock, ShieldAlert } from 'lucide-react';

// 匯入你放在 src 底下的 IG 貼文圖片
import igImage from '../ig_post.png';

interface SocialNetworkARGProps {
  onClose: () => void;
}

export default function SocialNetworkARG({ onClose }: SocialNetworkARGProps) {
  const [activeTab, setActiveTab] = useState<'ig' | 'darkweb'>('ig');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleDecrypt = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '738939980') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-[#050a10] border border-[#00f3ff]/50 shadow-[0_0_20px_rgba(0,243,255,0.2)] flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-[#00f3ff]/30 bg-[#00f3ff]/10">
          <span className="text-[#00f3ff] font-mono font-bold tracking-wider">INTEL_NETWORK_NODE</span>
          <button onClick={onClose} className="text-[#00f3ff] hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#00f3ff]/30 font-mono">
          <button
            onClick={() => setActiveTab('ig')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'ig' 
                ? 'bg-white text-black font-bold' 
                : 'bg-[#050a10] text-[#00f3ff]/60 hover:bg-[#00f3ff]/10 hover:text-[#00f3ff]'
            }`}
          >
            IG: @Wan_Lin_Official
          </button>
          <button
            onClick={() => setActiveTab('darkweb')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'darkweb' 
                ? 'bg-black text-[#00f3ff] font-bold border-b-2 border-[#00f3ff]' 
                : 'bg-[#050a10] text-[#00f3ff]/60 hover:bg-[#00f3ff]/10 hover:text-[#00f3ff]'
            }`}
          >
            DARKWEB: @Aegis_0x
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'ig' && (
            <div className="bg-white text-black min-h-full p-6 font-sans">
              
              {/* Profile Header (加入大頭貼) */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                    alt="Lin Wan Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Lin Wan</h2>
                  <p className="text-gray-600 text-sm">@Wan_Lin_Official</p>
                  <p className="text-gray-800 text-sm mt-1">Fangda International | Perfect Canary</p>
                </div>
              </div>

              {/* IG 圖片區 (替換成你上傳的咖啡杯照片) */}
              <div className="w-full bg-gray-100 border border-gray-200 rounded-md overflow-hidden mb-4 shadow-sm">
                <img 
                  src={igImage} 
                  alt="Turing Lab Rulebook" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Caption */}
              <div className="text-gray-800">
                <p>
                  <span className="font-bold mr-2">Wan_Lin_Official</span>
                  Quiet afternoon. Only the server's hum brings peace. Some people are truly laughable, can't even memorize the basic rules of the game, yet delusionally try to control the board. 🤫☕ #Fangda #TuringLab
                </p>
              </div>
            </div>
          )}

          {/* Darkweb Tab */}
          {activeTab === 'darkweb' && (
            <div className="bg-black text-[#00f3ff] min-h-full p-6 font-mono">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-[#00f3ff]/30 pb-4">
                <div className="w-16 h-16 bg-black border border-[#00f3ff] flex items-center justify-center">
                  <ShieldAlert size={32} className="text-[#00f3ff]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-widest">UNKNOWN_USER</h2>
                  <p className="text-[#00f3ff]/70 text-sm">@Aegis_0x</p>
                </div>
              </div>

              {/* Locked State */}
              {!isUnlocked ? (
                <div className="space-y-6">
                  {/* Blurred Image */}
                  <div className="w-full h-64 border border-[#00f3ff]/50 relative overflow-hidden flex items-center justify-center bg-gray-100">
                    {/* Fake Bank Receipt (Blurred) */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between filter blur-md">
                      <div className="space-y-2">
                        <div className="text-gray-500 text-sm font-sans">TRANSACTION ID: 9982-A4X-001</div>
                        <div className="text-gray-500 text-sm font-sans">DATE: 2026-04-01 14:32:00 UTC</div>
                        <div className="text-gray-800 font-bold mt-4">SENDER: MING FAMILY OFFSHORE TRUST</div>
                        <div className="text-red-600 font-bold text-xl">TARGET: CHU CINEMA CHAIN</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-500 text-sm">TRANSFER AMOUNT</div>
                        <div className="text-red-600 font-black text-4xl">TOTAL: $30,000,000.00</div>
                      </div>
                    </div>

                    {/* Dark Overlay & Padlock */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                      <Lock size={64} className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] animate-pulse" />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-sm md:text-base leading-relaxed text-[#00f3ff] font-bold">
                    <span className="text-red-500 font-bold">[SYSTEM LOG]</span> Intercepted Student Union President Chu Ming's offshore money laundering flow. Firewall triggered. 
                    <br/><br/>
                    <span className="text-yellow-400">Decryption Key Format:</span> [School Rule Chapter that triggered the Turing Lab conflict] + [Locked Offshore Trust Fund Phone Number].
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleDecrypt} className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <span className="text-[#00f3ff] mt-2">&gt;</span>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="ENTER DECRYPTION KEY..."
                        className="flex-1 bg-transparent border-b border-[#00f3ff]/50 outline-none text-[#00f3ff] placeholder-[#00f3ff]/30 font-mono py-1 focus:border-[#00f3ff] transition-colors"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className={`text-red-500 font-bold transition-opacity ${error ? 'opacity-100' : 'opacity-0'}`}>
                        [!] ACCESS DENIED. INVALID KEY.
                      </span>
                      <button 
                        type="submit"
                        className="px-6 py-2 border border-[#00f3ff] hover:bg-[#00f3ff]/20 transition-colors font-bold tracking-widest"
                      >
                        DECRYPT
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Unlocked State */
                <div className="space-y-6 animate-in fade-in duration-500">
                  {/* Unblurred Image */}
                  <div className="w-full h-64 border border-green-500 shadow-[0_0_15px_#22c55e] relative flex items-center justify-center bg-gray-100 overflow-hidden">
                    <div className="absolute top-4 right-4 z-20">
                      <Unlock size={24} className="text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                    </div>
                    
                    {/* Fake Bank Receipt (Clear) */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <div className="space-y-2">
                        <div className="text-gray-500 text-sm font-sans">TRANSACTION ID: 9982-A4X-001</div>
                        <div className="text-gray-500 text-sm font-sans">DATE: 2026-04-01 14:32:00 UTC</div>
                        <div className="text-gray-800 font-bold mt-4">SENDER: MING FAMILY OFFSHORE TRUST</div>
                        <div className="text-red-600 font-bold text-xl">TARGET: CHU CINEMA CHAIN</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-500 text-sm">TRANSFER AMOUNT</div>
                        <div className="text-red-600 font-black text-4xl">TOTAL: $30,000,000.00</div>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-sm md:text-base leading-relaxed text-green-400 font-bold">
                    <span className="font-bold">[DECRYPTION SUCCESSFUL]</span> Payload extracted. The money trail leads directly to Chu Ming's offshore accounts. The evidence is secured.
                  </div>

                  {/* Reward Prompt */}
                  <div className="mt-8 border-2 border-red-500 bg-red-900/30 p-4 text-center animate-pulse">
                    <p className="text-red-400 font-bold text-lg">
                      [DIRECTIVE RECOMMENDED: Return to Aegis_Assistant and enter "call" to paralyze the fund.]
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}