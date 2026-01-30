import { useEffect, useRef, useState } from 'react';

interface PongGameProps {
  width?: number;
  height?: number;
}

export default function PongGame({ width, height }: PongGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [controlMode, setControlMode] = useState<'keyboard' | 'mouse'>('keyboard');
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 400 });

  // Calculate responsive canvas size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const isMobile = window.innerWidth < 640;
        
        // Use custom dimensions if provided, otherwise calculate responsive sizes
        let newWidth = width || (isMobile ? Math.min(containerWidth - 32, 350) : 600);
        let newHeight = height || (isMobile ? Math.min((containerWidth - 32) * 0.75, 300) : 400);
        
        setCanvasSize({ width: newWidth, height: newHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameWidth = canvasSize.width;
    const gameHeight = canvasSize.height;

    // Scale factors for responsive sizing
    const isMobile = window.innerWidth < 640;
    const sizeFactor = isMobile ? 0.7 : 1;

    // Game state
    const ball = {
      x: gameWidth / 2,
      y: gameHeight / 2,
      size: 32 * sizeFactor,
      velocityX: 5 * sizeFactor,
      velocityY: 5 * sizeFactor,
      speed: 5 * sizeFactor,
      rotation: 0,
    };

    const paddleHeight = 80 * sizeFactor;
    const paddleWidth = 10 * sizeFactor;

    const leftPaddle = {
      x: 10,
      y: gameHeight / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      score: 0,
      dy: 0,
    };

    const rightPaddle = {
      x: gameWidth - paddleWidth - 10,
      y: gameHeight / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      score: 0,
    };

    let animationFrameId: number;
    const keys: { [key: string]: boolean } = {};

    // Keyboard controls
    function handleKeyDown(e: KeyboardEvent) {
      keys[e.key] = true;
    }

    function handleKeyUp(e: KeyboardEvent) {
      keys[e.key] = false;
    }

    // Mouse controls
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      
      leftPaddle.y = Math.max(
        0,
        Math.min(gameHeight - leftPaddle.height, mouseY - leftPaddle.height / 2)
      );
    }

    // Touch controls for mobile
    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touchY = e.touches[0].clientY - rect.top;
      
      leftPaddle.y = Math.max(
        0,
        Math.min(gameHeight - leftPaddle.height, touchY - leftPaddle.height / 2)
      );
    }

    // Draw functions
    function drawRect(x: number, y: number, w: number, h: number, color: string) {
      ctx!.fillStyle = color;
      ctx!.fillRect(x, y, w, h);
    }

    // Draw Nextflow logo (exact SVG paths)
    function drawNextflowLogo(x: number, y: number, size: number, rotation: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(rotation);
      
      // Scale factor based on original viewBox (17x16) to desired size
      const scale = size / 17;
      
      // Center the logo
      ctx!.translate(-8.5 * scale, -8 * scale);
      ctx!.scale(scale, scale);
      
      ctx!.fillStyle = '#0DC09D';
      
      // Top-left quadrant
      const path1 = new Path2D('M1.72466e-06 2.94912C2.61628 3.1168 4.71262 5.14496 4.87709 7.67232H7.93241C7.76263 3.51488 4.30609 0.1728 1.72466e-06 0V2.94912Z');
      ctx!.fill(path1);
      
      // Bottom-left quadrant
      const path2 = new Path2D('M4.89433 8.34496C4.72058 10.8698 2.61893 12.8928 0 13.0515V16C4.30808 15.8362 7.77125 12.5005 7.95031 8.34496H4.89433Z');
      ctx!.fill(path2);
      
      // Top-right quadrant
      const path3 = new Path2D('M11.6854 7.65504C11.8591 5.13024 13.9608 3.1072 16.5797 2.94848V0C12.2716 0.16384 8.80848 3.49952 8.62941 7.65504H11.6854Z');
      ctx!.fill(path3);
      
      // Bottom-right quadrant
      const path4 = new Path2D('M16.5797 13.0509C13.9634 12.8832 11.8671 10.855 11.7026 8.32768H8.64732C8.8171 12.4851 12.2736 15.8272 16.5797 16V13.0509Z');
      ctx!.fill(path4);
      
      ctx!.restore();
    }

    function drawText(text: string, x: number, y: number, color: string, size: number = 24) {
      ctx!.fillStyle = color;
      ctx!.font = `${size * sizeFactor}px monospace`;
      ctx!.fillText(text, x, y);
    }

    function drawNet() {
      for (let i = 0; i <= gameHeight; i += 15) {
        drawRect(gameWidth / 2 - 1, i, 2, 10, '#0DC09D');
      }
    }

    // Collision detection
    function collision(b: typeof ball, p: typeof leftPaddle) {
      const halfSize = b.size / 2;
      const bTop = b.y - halfSize;
      const bBottom = b.y + halfSize;
      const bLeft = b.x - halfSize;
      const bRight = b.x + halfSize;

      const pTop = p.y;
      const pBottom = p.y + p.height;
      const pLeft = p.x;
      const pRight = p.x + p.width;

      return (
        bRight > pLeft &&
        bBottom > pTop &&
        bLeft < pRight &&
        bTop < pBottom
      );
    }

    // Reset ball
    function resetBall() {
      ball.x = gameWidth / 2;
      ball.y = gameHeight / 2;
      ball.velocityX = -ball.velocityX;
      ball.speed = 5 * sizeFactor;
      ball.rotation = 0;
    }

    // Update game state
    function update() {
      // Player paddle movement (keyboard)
      if (controlMode === 'keyboard') {
        const paddleSpeed = 8 * sizeFactor;
        
        if (keys['w'] || keys['W'] || keys['ArrowUp']) {
          leftPaddle.y -= paddleSpeed;
        }
        if (keys['s'] || keys['S'] || keys['ArrowDown']) {
          leftPaddle.y += paddleSpeed;
        }

        leftPaddle.y = Math.max(0, Math.min(gameHeight - leftPaddle.height, leftPaddle.y));
      }

      // Move ball and rotate it
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      ball.rotation += 0.05;

      // AI for right paddle (opponent)
      const computerLevel = 0.1;
      rightPaddle.y += (ball.y - (rightPaddle.y + rightPaddle.height / 2)) * computerLevel;

      rightPaddle.y = Math.max(0, Math.min(gameHeight - rightPaddle.height, rightPaddle.y));

      // Ball collision with top and bottom walls
      const halfSize = ball.size / 2;
      if (ball.y + halfSize > gameHeight || ball.y - halfSize < 0) {
        ball.velocityY = -ball.velocityY;
      }

      // Check which paddle is hit
      const player = ball.x < gameWidth / 2 ? leftPaddle : rightPaddle;

      if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);

        const angleRad = (Math.PI / 4) * collidePoint;

        const direction = ball.x < gameWidth / 2 ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);

        ball.speed += 0.2 * sizeFactor;
      }

      // Update score
      if (ball.x - halfSize < 0) {
        rightPaddle.score++;
        resetBall();
      } else if (ball.x + halfSize > gameWidth) {
        leftPaddle.score++;
        resetBall();
      }
    }

    // Render
    function render() {
      // Clear canvas
      drawRect(0, 0, gameWidth, gameHeight, '#000');

      // Draw net
      drawNet();

      // Draw scores
      drawText(leftPaddle.score.toString(), gameWidth / 4, 30 * sizeFactor, '#0DC09D', 24);
      drawText(rightPaddle.score.toString(), (3 * gameWidth) / 4, 30 * sizeFactor, '#0DC09D', 24);

      // Draw paddles
      drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, '#0DC09D');
      drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, '#0DC09D');

      // Draw Nextflow logo as ball
      drawNextflowLogo(ball.x, ball.y, ball.size, ball.rotation);
    }

    // Game loop
    function gameLoop() {
      update();
      render();
      animationFrameId = requestAnimationFrame(gameLoop);
    }

    // Event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    gameLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [canvasSize, controlMode]);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-2 sm:gap-4 w-full max-w-2xl mx-auto px-4">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="border-2 border-nextflow-500 cursor-crosshair w-full max-w-full h-auto"
        style={{ touchAction: 'none' }}
      />
      <div className="text-nextflow-600 font-mono text-xs sm:text-sm text-center">
        <p className="text-[10px] sm:text-xs">
          Use your mouse or keyboard keys{' '}
          <kbd className="px-1 sm:px-2 py-1 mx-1 bg-nextflow-200 text-black text-[10px] sm:text-xs">W</kbd>
          {' / '}
          <kbd className="px-1 sm:px-2 py-1 mx-1 bg-nextflow-200 text-black text-[10px] sm:text-xs">S</kbd>
          {' or '}
          <kbd className="px-1 sm:px-2 py-1 mx-1 bg-nextflow-200 text-black text-[10px] sm:text-xs">↑</kbd>
          {' / '}
          <kbd className="px-1 sm:px-2 py-1 mx-1 bg-nextflow-200 text-black text-[10px] sm:text-xs">↓</kbd>
          {' to play.'}
        </p>
      </div>
    </div>
  );
}