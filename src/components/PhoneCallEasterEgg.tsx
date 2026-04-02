import React, { useState, useEffect } from 'react';
import { Phone, Delete } from 'lucide-react';

interface PhoneCallEasterEggProps {
  onClose: () => void;
}

type CallPhase = 'dialing' | 'ringing' | 'connected' | 'error' | 'ended';

export default function PhoneCallEasterEgg({ onClose }: PhoneCallEasterEggProps) {
  const [phase, setPhase] = useState<CallPhase>('dialing');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timer, setTimer] = useState(0);
  const [subtitle, setSubtitle] = useState('');

  const fullMessage = "Welcome to the Ming Family Offshore Trust. Please hold... [SYSTEM GLITCH] ...Critical Error. All assets have been frozen. Goodbye.";
  const errorMessage = "We're sorry, the number you have dialed is not in service. Please check the number and try again.";

  // Handle Keypad Input
  const handleKeyPress = (key: string) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber(prev => prev + key);
    }
  };

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      setPhase('ringing');
    }
  };

  const handleHangUp = () => {
    setPhase('ended');
  };

  // Phase Logic
  useEffect(() => {
    if (phase === 'ringing') {
      const ringTimer = setTimeout(() => {
        const cleanNumber = phoneNumber.replace(/\s/g, '');
        if (cleanNumber === '38939980') {
          setPhase('connected');
        } else {
          setPhase('error');
        }
      }, 3500);
      return () => clearTimeout(ringTimer);
    }

    if (phase === 'connected') {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);

      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= fullMessage.length) {
          setSubtitle(fullMessage.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      const endTimer = setTimeout(() => {
        setPhase('ended');
      }, 7000);

      return () => {
        clearInterval(interval);
        clearInterval(typeInterval);
        clearTimeout(endTimer);
      };
    }

    if (phase === 'error') {
      setSubtitle(errorMessage);
      const endTimer = setTimeout(() => {
        setPhase('ended');
      }, 4000);
      return () => clearTimeout(endTimer);
    }

    if (phase === 'ended') {
      setSubtitle('');
      const closeTimer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(closeTimer);
    }
  }, [phase, phoneNumber, onClose, fullMessage, errorMessage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Render Dialing Phase
  if (phase === 'dialing') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-end bg-gray-50 font-sans text-black pb-12">
        <div className="w-full max-w-sm px-6 flex flex-col items-center">
          
          {/* Number Display */}
          <div className="h-24 w-full flex items-center justify-center mb-8">
            <div className="text-4xl tracking-widest font-light text-center break-all">
              {phoneNumber}
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 mb-12">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-light hover:bg-gray-300 active:bg-gray-400 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="w-full grid grid-cols-3 items-center">
            <div className="col-start-2 flex justify-center">
              <button
                onClick={handleCall}
                className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 active:bg-green-700 transition-colors shadow-md"
              >
                <Phone size={36} className="text-white fill-current" />
              </button>
            </div>
            <div className="col-start-3 flex justify-center">
              {phoneNumber.length > 0 && (
                <button
                  onClick={handleDelete}
                  className="w-16 h-16 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Delete size={32} />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Render Calling/Connected/Error/Ended Phases
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-black font-sans text-white transition-opacity duration-1000 ${phase === 'ended' ? 'opacity-30' : 'opacity-100'}`}>
      
      {/* Top Section */}
      <div className="flex flex-col items-center mt-20 space-y-4">
        <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-4xl text-gray-300">
          {phase === 'connected' ? 'M' : '?'}
        </div>
        <h1 className="text-3xl font-light text-center px-4">
          {phase === 'connected' ? 'Ming Family Offshore Trust' : phoneNumber}
        </h1>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center flex-1 justify-center w-full px-8">
        <div className="text-lg text-gray-300 mb-8">
          {phase === 'ringing' && 'calling...'}
          {phase === 'connected' && formatTime(timer)}
          {phase === 'error' && 'Call Failed'}
          {phase === 'ended' && 'Call Ended'}
        </div>
        
        {(phase === 'connected' || phase === 'error') && (
          <div className="h-32 flex items-center justify-center text-center text-lg md:text-xl text-gray-200 min-h-[120px]">
            {subtitle}
            {phase === 'connected' && <span className="animate-pulse">_</span>}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="mb-20">
        <button 
          onClick={handleHangUp}
          className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
        >
          <Phone size={36} className="text-white transform rotate-[135deg] fill-current" />
        </button>
      </div>
    </div>
  );
}

