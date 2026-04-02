import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// === 🚨 請在這裡匯入你的多張圖片 🚨 ===
// (如果你的圖片附檔名是 .png，記得改成 .png)
import linComic1 from '../lin_comic_1.jpg'; // Lin Wan 漫畫第 1 頁
import linComic2 from '../lin_comic_2.jpg'; // Lin Wan 漫畫第 2 頁
// import linComic3 from '../lin_comic_3.jpg'; // 依此類推...

import rickComic1 from '../rick_comic_1.jpg'; // Rick 漫畫第 1 頁
import rickComic2 from '../rick_comic_2.jpg'; // Rick 漫畫第 2 頁

// 建立圖片陣列
const linComics = [linComic1, linComic2]; // 如果有第三張就加進去：[linComic1, linComic2, linComic3]
const rickComics = [rickComic1, rickComic2];

interface ClassifiedDossiersProps {
  onClose: () => void;
}

export default function ClassifiedDossiers({ onClose }: ClassifiedDossiersProps) {
  const [activeSubject, setActiveSubject] = useState<'lin' | 'rick'>('lin');
  
  // 記錄目前觀看的圖片索引
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 取得目前選擇的圖片陣列
  const currentComics = activeSubject === 'lin' ? linComics : rickComics;

  // 切換人物時，將圖片索引歸零
  const handleSubjectChange = (subject: 'lin' | 'rick') => {
    setActiveSubject(subject);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentComics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentComics.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050a10]/95 backdrop-blur-md p-4 font-mono">
      <div className="w-full max-w-6xl h-[85vh] bg-black border-2 border-[#00f3ff]/40 shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col overflow-hidden relative">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00f3ff_2px,#00f3ff_4px)] mix-blend-overlay"></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b-2 border-[#00f3ff]/40 bg-[#00f3ff]/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 animate-pulse rounded-full"></div>
            <span className="text-[#00f3ff] font-bold tracking-widest text-lg md:text-xl shadow-[#00f3ff]">
              [ AEGIS_CORE // CLASSIFIED_PERSONNEL_DOSSIERS ]
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="text-[#00f3ff] hover:text-white hover:bg-red-500/20 p-2 transition-all border border-transparent hover:border-red-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden relative z-10 flex-col md:flex-row">
          
          {/* Left Sidebar (Subject Selection) */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r-2 border-[#00f3ff]/30 bg-black/50 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="text-xs text-[#00f3ff]/60 mb-2">// SELECT TARGET PROFILE</div>
            
            <button
              onClick={() => handleSubjectChange('lin')}
              className={`text-left p-4 transition-all duration-300 border-l-4 ${
                activeSubject === 'lin' 
                  ? 'border-[#00f3ff] bg-[#00f3ff]/10 text-[#00f3ff] shadow-[inset_4px_0_10px_rgba(0,243,255,0.2)]' 
                  : 'border-transparent text-[#00f3ff]/50 hover:bg-[#00f3ff]/5 hover:text-[#00f3ff]/80'
              }`}
            >
              <div className="text-xs opacity-70 mb-1">SUBJECT_01</div>
              <div className="font-bold tracking-wider">THE_CANARY</div>
              <div className="text-sm mt-1 opacity-80">(Lin Wan)</div>
            </button>

            <button
              onClick={() => handleSubjectChange('rick')}
              className={`text-left p-4 transition-all duration-300 border-l-4 ${
                activeSubject === 'rick' 
                  ? 'border-red-500 bg-red-500/10 text-red-400 shadow-[inset_4px_0_10px_rgba(239,68,68,0.2)]' 
                  : 'border-transparent text-[#00f3ff]/50 hover:bg-red-500/5 hover:text-red-400/80'
              }`}
            >
              <div className="text-xs opacity-70 mb-1">SUBJECT_02</div>
              <div className="font-bold tracking-wider">THE_DRAGON</div>
              <div className="text-sm mt-1 opacity-80">(Rick)</div>
            </button>

            <div className="mt-auto pt-4 border-t border-[#00f3ff]/20 text-xs text-[#00f3ff]/40">
              [SYSTEM: INTERCEPTING MEMORY FRAGMENTS...]
            </div>
          </div>

          {/* Right Reading Pane (Carousel Viewer) */}
          <div className="flex-1 bg-[#020508] p-4 md:p-8 relative flex flex-col items-center justify-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
            
            {/* 圖片數量指示器 */}
            <div className="absolute top-4 right-8 text-[#00f3ff]/70 text-sm">
                PAGE {currentImageIndex + 1} / {currentComics.length}
            </div>

            {/* 圖片展示區 */}
            <div className="relative w-full h-full flex items-center justify-center max-w-4xl">
              
              {/* 如果沒有圖片，顯示警告 */}
              {currentComics.length === 0 || !currentComics[currentImageIndex] ? (
                 <div className="text-red-500 border border-red-500 p-8 bg-red-900/20 text-center animate-pulse">
                    [ERROR: IMAGE DATA NOT FOUND OR CORRUPTED]
                 </div>
              ) : (
                <div className="relative group w-full h-full flex items-center justify-center">
                    {/* 左箭頭 */}
                    <button 
                        onClick={prevImage}
                        className="absolute left-0 md:-left-12 z-20 bg-black/50 hover:bg-[#00f3ff]/20 text-[#00f3ff] p-2 rounded-full border border-[#00f3ff]/30 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
                        disabled={currentComics.length <= 1}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* 漫畫圖片 */}
                    <img 
                        key={currentImageIndex} // 加上 key 讓 React 知道圖片換了，可配合 CSS 動畫
                        src={currentComics[currentImageIndex]} 
                        alt={`${activeSubject} comic page ${currentImageIndex + 1}`}
                        className="max-w-full max-h-full object-contain shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-[#00f3ff]/20 animate-in fade-in duration-500" 
                    />

                    {/* 右箭頭 */}
                    <button 
                        onClick={nextImage}
                        className="absolute right-0 md:-right-12 z-20 bg-black/50 hover:bg-[#00f3ff]/20 text-[#00f3ff] p-2 rounded-full border border-[#00f3ff]/30 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
                        disabled={currentComics.length <= 1}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
              )}
            </div>

            {/* 下方進度條 / 小圓點 */}
            {currentComics.length > 1 && (
                <div className="absolute bottom-4 flex gap-2">
                    {currentComics.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentImageIndex === index ? 'bg-[#00f3ff] w-6' : 'bg-[#00f3ff]/30 hover:bg-[#00f3ff]/60'
                            }`}
                        />
                    ))}
                </div>
            )}
            
            {/* 掃描線特效裝飾 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#00f3ff]/30 animate-[scan_3s_ease-in-out_infinite] shadow-[0_0_10px_#00f3ff] pointer-events-none"></div>

          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}