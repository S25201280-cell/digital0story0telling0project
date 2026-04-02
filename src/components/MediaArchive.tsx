import React from 'react';
import { X, Video, Radio } from 'lucide-react';
import explanationVideo from '../video.mp4';
import podcastAudio from '../podcast.mp3';

interface MediaArchiveProps {
  onClose: () => void;
}

export default function MediaArchive({ onClose }: MediaArchiveProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
      <div className="w-full max-w-6xl bg-[#050a10] border border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.2)] flex flex-col max-h-[90vh] overflow-hidden font-mono">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#00f3ff]/30 bg-[#00f3ff]/10">
          <span className="text-[#00f3ff] font-bold tracking-widest text-lg md:text-xl">
            [DECRYPTED_MEDIA_VAULT]
          </span>
          <button onClick={onClose} className="text-[#00f3ff] hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Video Player */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[#00f3ff] font-bold text-lg border-b border-[#00f3ff]/30 pb-2">
              <Video size={20} />
              <span>&gt; INTERCEPTED_VIDEO_FEED.mp4</span>
            </div>
            
            <div className="relative w-full aspect-video border-2 border-[#00f3ff]/50 bg-black overflow-hidden group">
              {/* Scanline effect overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.05)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 opacity-50"></div>
              
              <video 
                src={explanationVideo} 
                controls 
                className="w-full h-full object-contain relative z-20"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-[#00f3ff]/70 text-sm">
              [VISUAL_DATA_LOG]: Decrypted visual feed. Subject analysis pending.
            </div>
          </div>

          {/* Right Column: Audio/Podcast Player */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[#00f3ff] font-bold text-lg border-b border-[#00f3ff]/30 pb-2">
              <Radio size={20} />
              <span>&gt; DECRYPTED_PODCAST_LOG.mp3</span>
            </div>
            
            <div className="w-full border-2 border-[#00f3ff]/50 bg-[#050a10] p-6 flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
              {/* Fake Audio Waveform Visualizer */}
              <div className="flex items-end justify-center gap-1 h-24 w-full px-4">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-full max-w-[12px] bg-[#00f3ff] rounded-t-sm opacity-80 animate-pulse"
                    style={{ 
                      height: `${Math.max(20, Math.random() * 100)}%`,
                      animationDuration: `${0.5 + Math.random() * 1}s`,
                      animationDelay: `${Math.random() * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <audio 
                src={podcastAudio} 
                controls 
                className="w-full max-w-md"
                preload="metadata"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="text-[#00f3ff]/70 text-sm">
              [AUDIO_INTERCEPT]: Extracted audio log. Voice matching algorithms engaged.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
