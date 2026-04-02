import React, { useState, useEffect, useRef } from 'react';
import { storyData, logOrder } from '../data/story';
import TypewriterText from './TypewriterText';
import { Volume2, VolumeX, Terminal, Network, Archive, FileText } from 'lucide-react';
import Chatbot from './Chatbot';
import SocialNetworkARG from './SocialNetworkARG';
import MediaArchive from './MediaArchive';
import ClassifiedDossiers from './ClassifiedDossiers';

export default function TerminalUI({ audioRef, onHackingMode, onCallingMode, onUploadingMode }: { audioRef: React.RefObject<HTMLAudioElement | null>, onHackingMode: () => void, onCallingMode: () => void, onUploadingMode: () => void }) {
  const [currentNodeId, setCurrentNodeId] = useState('prologue');
  const [isTyping, setIsTyping] = useState(true);
  const [audioOn, setAudioOn] = useState(true);
  const [showIntelNetwork, setShowIntelNetwork] = useState(false);
  const [showMediaArchive, setShowMediaArchive] = useState(false);
  const [showClassifiedDossiers, setShowClassifiedDossiers] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const contentEndRef = useRef<HTMLDivElement>(null);

  const currentNode = storyData[currentNodeId];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed", e));
      }
      setAudioOn(!audioOn);
    }
  };

  const handleChoice = (nextId: string) => {
    setIsTyping(true);
    setCurrentNodeId(nextId);
  };

  const handleContinue = () => {
    if (currentNode.nextId) {
      setIsTyping(true);
      setCurrentNodeId(currentNode.nextId);
    }
  };

  useEffect(() => {
    contentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentNodeId, isTyping]);

  return (
    <div className="relative z-10 flex flex-col h-screen bg-[#050a10]/80 text-[#00f3ff] font-mono overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-[#00f3ff]/30 bg-[#050a10]">
        <div className="text-xl font-bold tracking-widest drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
          Aegis_Core [Project_Reboot]
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowClassifiedDossiers(true)}
            className="flex items-center gap-2 px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-colors"
          >
            <FileText size={18} />
            <span className="hidden sm:inline">&gt; [CLASSIFIED_DOSSIERS]</span>
          </button>
          <button 
            onClick={() => {
              setShowMediaArchive(true);
              if (audioOn && audioRef.current) {
                audioRef.current.pause();
              }
            }}
            className="flex items-center gap-2 px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-colors"
          >
            <Archive size={18} />
            <span className="hidden sm:inline">&gt; [MEDIA_ARCHIVE]</span>
          </button>
          <button 
            onClick={() => setShowIntelNetwork(true)}
            className="flex items-center gap-2 px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-colors"
          >
            <Network size={18} />
            <span className="hidden sm:inline">&gt; [INTEL_NETWORK]</span>
          </button>
          <button 
            onClick={() => setShowChat(!showChat)}
            className="flex items-center gap-2 px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-colors"
          >
            <Terminal size={18} />
            <span className="hidden sm:inline">AEGIS_ASSISTANT</span>
          </button>
          <button 
            onClick={toggleAudio}
            className="flex items-center gap-2 px-3 py-1 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-colors"
          >
            {audioOn ? <Volume2 size={18} /> : <VolumeX size={18} className="text-[#ff2a2a]" />}
            <span>[AUDIO: {audioOn ? 'ON' : 'OFF'}]</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#00f3ff]/30 bg-[#050a10]/90 overflow-y-auto p-4 flex flex-col">
          <h2 className="text-sm text-[#00f3ff]/70 mb-4 tracking-widest">AEGIS DATA LOGS // THE FULL STORY</h2>
          <ul className="space-y-2 flex-1">
            {logOrder.map(logId => {
              const node = storyData[logId];
              const isActive = currentNodeId.startsWith(logId);
              
              return (
                <li key={logId}>
                  <button
                    onClick={() => {
                       setIsTyping(true);
                       setCurrentNodeId(logId);
                    }}
                    className={`w-full text-left px-3 py-2 transition-all ${
                      isActive 
                        ? 'border-l-4 border-[#00f3ff] bg-[#00f3ff]/10 text-white drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]' 
                        : 'border-l-4 border-transparent text-[#00f3ff]/60 hover:text-[#00f3ff] hover:bg-[#00f3ff]/5'
                    }`}
                  >
                    {node.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right Content Panel */}
        <main className="w-full md:w-3/4 p-6 overflow-y-auto bg-[#050a10]/60 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 text-white drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] border-b border-[#00f3ff]/20 pb-2">
              {currentNode.title}
            </h2>
            
            <div className="text-lg leading-relaxed mb-8 min-h-[200px]">
              <TypewriterText 
                text={currentNode.text} 
                onComplete={() => setIsTyping(false)} 
                speed={15}
              />
            </div>

            {!isTyping && (
              <div className="mt-8 flex flex-col gap-4 animate-in fade-in duration-500">
                {currentNode.choices ? (
                  <div className="flex flex-col gap-3">
                    {currentNode.choices.map((choice, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleChoice(choice.nextId)}
                        className="text-left p-3 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/20 hover:text-white transition-all text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]"
                      >
                        {choice.label}
                      </button>
                    ))}
                  </div>
                ) : currentNode.nextId ? (
                  <button
                    onClick={handleContinue}
                    className="self-start p-3 border border-[#00f3ff]/50 hover:bg-[#00f3ff]/20 hover:text-white transition-all text-[#00f3ff] drop-shadow-[0_0_5px_rgba(0,243,255,0.5)] animate-pulse"
                  >
                    &gt; [CONTINUE]
                  </button>
                ) : currentNode.isEnding ? (
                  <div className="text-[#ff2a2a] text-xl drop-shadow-[0_0_5px_rgba(255,42,42,0.8)] mt-8">
                    // END OF TRANSMISSION
                  </div>
                ) : null}
              </div>
            )}
            <div ref={contentEndRef} />
          </div>
        </main>
      </div>

      {/* Chatbot Overlay */}
      {showChat && (
        <div className="absolute bottom-0 right-0 w-full md:w-[400px] h-[60vh] md:h-[80vh] bg-[#050a10] border-t md:border-l border-[#00f3ff]/50 shadow-[-5px_0_20px_rgba(0,243,255,0.1)] flex flex-col z-50">
          <div className="flex justify-between items-center p-3 border-b border-[#00f3ff]/30 bg-[#00f3ff]/10">
            <span className="font-bold tracking-wider">AEGIS_ASSISTANT v1.0</span>
            <button onClick={() => setShowChat(false)} className="text-[#00f3ff] hover:text-white">
              [X]
            </button>
          </div>
          <Chatbot onHackingMode={onHackingMode} onCallingMode={onCallingMode} onUploadingMode={onUploadingMode} />
        </div>
      )}
      {/* Social Network ARG Modal */}
      {showIntelNetwork && (
        <SocialNetworkARG onClose={() => setShowIntelNetwork(false)} />
      )}

      {showMediaArchive && (
        <MediaArchive onClose={() => {
          setShowMediaArchive(false);
          if (audioOn && audioRef.current) {
            audioRef.current.play().catch(e => console.error("Audio play failed", e));
          }
        }} />
      )}

      {showClassifiedDossiers && (
        <ClassifiedDossiers onClose={() => setShowClassifiedDossiers(false)} />
      )}
    </div>
  );
}
