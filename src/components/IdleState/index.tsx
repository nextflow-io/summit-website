import { useState, useEffect, useRef } from 'react';
import PongGame from '@modules/PongGame';

interface IdleStateProps {
  idleTimeout?: number;
}

export default function IdleState({ idleTimeout = 60000 }: IdleStateProps) {
  const [isIdle, setIsIdle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = () => {
    setIsIdle(false);
    setIsVisible(false);
    
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
      // Small delay to trigger CSS transition
      setTimeout(() => setIsVisible(true), 10);
    }, idleTimeout);
  };

  useEffect(() => {
    // Only listen to events when NOT idle (when game is not showing)
    if (isIdle) return;

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const handleEvent = () => resetIdleTimer();
    
    events.forEach(event => {
      document.addEventListener(event, handleEvent, { passive: true });
    });

    resetIdleTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, [idleTimeout, isIdle]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  if (!isIdle) return null;

  const handleExit = () => {
    setIsVisible(false);
    // Wait for fade out animation before removing from DOM
    setTimeout(() => {
      setIsIdle(false);
      // Restart the idle timer
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
        setTimeout(() => setIsVisible(true), 10);
      }, idleTimeout);
    }, 800); // Match the transition duration
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the game area
    if (e.target === e.currentTarget) {
      handleExit();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm transition-opacity duration-[800ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackgroundClick}
    >
      <div 
        className={`text-center transition-opacity duration-[800ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <PongGame width={600} height={400} />
        <button
          onClick={handleExit}
          className="mt-8 px-8 py-2 bg-nextflow-600 text-black hover:bg-nextflow-800 transition-colors monospace uppercase text-xs"
        >
          Exit game
        </button>
      </div>
    </div>
  );
}