import { useEffect, useRef, useState } from 'react';

interface PongGameProps {
  width?: number;
  height?: number;
}

export default function PongGame({ width = 600, height = 400 }: PongGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [controlMode, setControlMode] = useState<'keyboard' | 'mouse'>('keyboard');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game state
    const ball = {
      x: width / 2,
      y: height / 2,
      radius: 8,
      velocityX: 5,
      velocityY: 5,
      speed: 5,
    };

    const paddleHeight = 80;
    const paddleWidth = 10;

    const leftPaddle = {
      x: 10,
      y: height / 2 - paddleHeight / 2,
      width: paddleWidth,
      height: paddleHeight,
      score: 0,
      dy: 0, // velocity for smooth movement
    };

    const rightPaddle = {
      x: width - paddleWidth - 10,
      y: height / 2 - paddleHeight / 2,
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
      // if (controlMode !== 'mouse') return;
      
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      
      // Keep paddle centered on mouse with boundaries
      leftPaddle.y = Math.max(
        0,
        Math.min(height - leftPaddle.height, mouseY - leftPaddle.height / 2)
      );
    }

    // Touch controls for mobile
    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touchY = e.touches[0].clientY - rect.top;
      
      leftPaddle.y = Math.max(
        0,
        Math.min(height - leftPaddle.height, touchY - leftPaddle.height / 2)
      );
    }

    // Draw functions
    function drawRect(x: number, y: number, w: number, h: number, color: string) {
      ctx!.fillStyle = color;
      ctx!.fillRect(x, y, w, h);
    }

    function drawCircle(x: number, y: number, r: number, color: string) {
      ctx!.fillStyle = color;
      ctx!.beginPath();
      ctx!.arc(x, y, r, 0, Math.PI * 2, false);
      ctx!.closePath();
      ctx!.fill();
    }

    function drawText(text: string, x: number, y: number, color: string, size: number = 45) {
      ctx!.fillStyle = color;
      ctx!.font = `${size}px monospace`;
      ctx!.fillText(text, x, y);
    }

    function drawNet() {
      for (let i = 0; i <= height; i += 15) {
        drawRect(width / 2 - 1, i, 2, 10, '#0DC09D');
      }
    }

    // Collision detection
    function collision(b: typeof ball, p: typeof leftPaddle) {
      const bTop = b.y - b.radius;
      const bBottom = b.y + b.radius;
      const bLeft = b.x - b.radius;
      const bRight = b.x + b.radius;

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
      ball.x = width / 2;
      ball.y = height / 2;
      ball.velocityX = -ball.velocityX;
      ball.speed = 5;
    }

    // Update game state
    function update() {
      // Player paddle movement (keyboard)
      if (controlMode === 'keyboard') {
        const paddleSpeed = 8;
        
        if (keys['w'] || keys['W'] || keys['ArrowUp']) {
          leftPaddle.y -= paddleSpeed;
        }
        if (keys['s'] || keys['S'] || keys['ArrowDown']) {
          leftPaddle.y += paddleSpeed;
        }

        // Keep paddle within bounds
        leftPaddle.y = Math.max(0, Math.min(height - leftPaddle.height, leftPaddle.y));
      }

      // Move ball
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;

      // AI for right paddle (opponent)
      const computerLevel = 0.1;
      rightPaddle.y += (ball.y - (rightPaddle.y + rightPaddle.height / 2)) * computerLevel;

      // Keep AI paddle within bounds
      rightPaddle.y = Math.max(0, Math.min(height - rightPaddle.height, rightPaddle.y));

      // Ball collision with top and bottom walls
      if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
      }

      // Check which paddle is hit
      const player = ball.x < width / 2 ? leftPaddle : rightPaddle;

      if (collision(ball, player)) {
        // Calculate where ball hit the paddle
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);

        // Calculate angle
        const angleRad = (Math.PI / 4) * collidePoint;

        // Change ball direction
        const direction = ball.x < width / 2 ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);

        // Increase speed slightly
        ball.speed += 0.2;
      }

      // Update score
      if (ball.x - ball.radius < 0) {
        rightPaddle.score++;
        resetBall();
      } else if (ball.x + ball.radius > width) {
        leftPaddle.score++;
        resetBall();
      }
    }

    // Render
    function render() {
      // Clear canvas
      drawRect(0, 0, width, height, '#000');

      // Draw net
      drawNet();

      // Draw scores
      drawText(leftPaddle.score.toString(), width / 4, height / 5, '#0DC09D');
      drawText(rightPaddle.score.toString(), (3 * width) / 4, height / 5, '#0DC09D');

      // Draw control instructions
      // const controlText = controlMode === 'keyboard' ? 'W/S or ↑/↓' : 'Move Mouse';
      // drawText(controlText, width / 2 - 80, height - 20, '#0DC09D', 16);

      // Draw paddles
      drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, '#0DC09D');
      drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, '#0DC09D');

      // Draw ball
      drawCircle(ball.x, ball.y, ball.radius, '#0DC09D');
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
  }, [width, height, controlMode]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-2 border-nextflow-500 cursor-crosshair"
      />
      <div className="text-nextflow-600 font-mono text-sm text-center">
        <p className="text-xs">Use your mouse or keyboard keys <kbd className="px-2 py-1 mx-1 bg-nextflow-200 text-black ">W</kbd> / <kbd className="px-2 py-1 mx-1 bg-nextflow-200 text-black">S</kbd> or <kbd className="px-2 py-1 mx-1 bg-nextflow-200 text-black">↑</kbd> / <kbd className="px-2 py-1 mx-1 bg-nextflow-200 text-black">↓</kbd> to play.</p>
      </div>
    </div>
  );
}