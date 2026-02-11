import { useState, useEffect, useRef } from 'react';
import PongGame from '@modules/PongGame';

interface IdleStateProps {
  idleTimeout?: number;
}

export default function IdleState({ idleTimeout = 60000 }: IdleStateProps) {
  const [isIdle, setIsIdle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownThisSession, setHasShownThisSession] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check if idle state has been shown this session
  useEffect(() => {
    const shownFlag = sessionStorage.getItem('idleStateShown');
    if (shownFlag === 'true') {
      setHasShownThisSession(true);
    }
  }, []);

  const resetIdleTimer = () => {
    setIsIdle(false);
    setIsVisible(false);

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }

    // Don't restart timer if already shown this session
    if (hasShownThisSession) {
      return;
    }

    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
      // Mark as shown in session storage
      sessionStorage.setItem('idleStateShown', 'true');
      setHasShownThisSession(true);
      // Small delay to trigger CSS transition
      setTimeout(() => setIsVisible(true), 10);
    }, idleTimeout);
  };

  useEffect(() => {
    // Don't listen to events if already shown this session
    if (isIdle || hasShownThisSession) return;

    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
    ];

    const handleEvent = () => resetIdleTimer();

    events.forEach((event) => {
      document.addEventListener(event, handleEvent, { passive: true });
    });

    resetIdleTimer();

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, [idleTimeout, isIdle, hasShownThisSession]);

  // Listen for ESC key when game is showing
  useEffect(() => {
    if (!isIdle) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isIdle]);

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
      // Don't restart timer after exit - already shown this session
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