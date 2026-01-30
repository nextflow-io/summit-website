import { useState, useEffect, useRef } from 'react';
import PongGame from '@modules/PongGame';

interface IdleStateProps {
  idleTimeout?: number;
}

export default function IdleState({ idleTimeout = 60000 }: IdleStateProps) {
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = () => {
    setIsIdle(false);
    
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
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
  }, [idleTimeout, isIdle]); // Added isIdle to dependency array

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
    setIsIdle(false);
    // Restart the idle timer
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, idleTimeout);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the game area
    if (e.target === e.currentTarget) {
      handleExit();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div 
        className="text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <PongGame width={600} height={400} />
        <button
          onClick={handleExit}
          className="mt-8 px-8 py-2 bg-nextflow-600 text-black hover:bg-nextflow-800 transition-colors monospace uppercase text-xs"
        >
          exit game
        </button>
      </div>
    </div>
  );
}