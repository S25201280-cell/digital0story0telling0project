import React, { useState, useEffect } from 'react';

interface EvidenceUploadEasterEggProps {
  onClose: () => void;
}

type Phase = 'connecting' | 'uploading' | 'success' | 'exit';

const FILES = [
  'chu_ming_30M_laundering_route.dat',
  'zhao_ze_dashcam_raw.mp4',
  'lin_group_financials.zip',
  'aegis_core_override_logs.txt',
  'offshore_trust_beneficiaries.pdf',
  'bribe_transactions_2024.csv',
  'encrypted_comms_intercept.pcap',
  'sysadmin_passwords_dump.hash',
  'project_icarus_blueprint.dwg',
  'blackmail_materials_archive.tar.gz'
];

export default function EvidenceUploadEasterEgg({ onClose }: EvidenceUploadEasterEggProps) {
  const [phase, setPhase] = useState<Phase>('connecting');
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState(FILES[0]);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // Phase 1: Connecting (0 - 2.5s)
    const t1 = setTimeout(() => setPhase('uploading'), 2500);
    
    // Phase 2: Uploading (2.5s - 6.5s) -> duration 4s
    const t2 = setTimeout(() => {
      setPhase('success');
      setFlash(true);
      setTimeout(() => setFlash(false), 100);
    }, 6500);

    // Phase 3: Success (6.5s - 9.5s) -> duration 3s
    const t3 = setTimeout(() => {
      setPhase('exit');
      onClose();
    }, 9500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onClose]);

  useEffect(() => {
    if (phase === 'uploading') {
      const startTime = Date.now();
      const duration = 4000;
      
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
      }, 50);

      const fileInterval = setInterval(() => {
        setCurrentFile(FILES[Math.floor(Math.random() * FILES.length)]);
      }, 150);

      return () => {
        clearInterval(progressInterval);
        clearInterval(fileInterval);
      };
    }
  }, [phase]);

  return (
    <>
      <style>
        {`
          @keyframes policeSiren {
            0% { background-color: rgba(255, 0, 0, 0.05); }
            50% { background-color: rgba(0, 0, 255, 0.05); }
            100% { background-color: rgba(255, 0, 0, 0.05); }
          }
          .animate-siren {
            animation: policeSiren 1s infinite;
          }
        `}
      </style>
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center font-mono overflow-hidden bg-black animate-siren ${flash ? 'bg-white' : ''}`}>
        
        {phase === 'connecting' && (
          <div className="text-center space-y-6 animate-pulse">
            <div className="text-[#00f3ff] text-3xl md:text-5xl font-bold tracking-widest">
              [ESTABLISHING SECURE CONNECTION...]
            </div>
            <div className="text-white text-xl md:text-2xl">
              TARGET: HONG KONG POLICE FORCE
            </div>
            <div className="text-white text-lg md:text-xl opacity-80">
              DEP: CYBER SECURITY AND TECHNOLOGY CRIME BUREAU (CSTCB)
            </div>
          </div>
        )}

        {phase === 'uploading' && (
          <div className="w-full max-w-4xl px-8 flex flex-col items-center justify-center space-y-8">
            <div className="text-red-500 text-2xl md:text-4xl font-bold animate-pulse text-center">
              WARNING: UPLOADING CLASSIFIED EVIDENCE PAYLOAD
            </div>
            
            <div className="w-full h-16 border-4 border-[#00f3ff] p-1 bg-black/50 relative">
              <div 
                className="h-full bg-[#00f3ff] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl mix-blend-difference">
                {Math.floor(progress)}%
              </div>
            </div>

            <div className="text-[#00f3ff] text-lg md:text-xl truncate w-full text-center opacity-80">
              &gt; uploading: {currentFile}
            </div>
          </div>
        )}

        {phase === 'success' && !flash && (
          <div className="text-center space-y-8 animate-in zoom-in duration-500">
            <div className="text-green-500 text-5xl md:text-7xl font-bold drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] border-8 border-green-500 p-8 inline-block transform -rotate-2">
              [ TRANSMISSION SUCCESSFUL ]
            </div>
            <div className="text-green-400 text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              ANONYMOUS TIP LOGGED. TARGET ASSETS MARKED FOR SEIZURE.
            </div>
          </div>
        )}

      </div>
    </>
  );
}
