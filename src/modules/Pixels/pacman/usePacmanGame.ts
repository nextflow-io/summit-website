import { useEffect, useRef, useCallback } from 'react';
import {
  createGame,
  setDirection,
  tick,
  tickModeTimer,
  toggleTile as toggleGameTile,
  type PacmanGameState,
  type Direction,
} from './PacmanGame';
import { getMazeBounds, renderPacmanGame } from './pacmanRenderer';

const GAME_TICK_MS = 150; // how often pacman/ghosts move
const MODE_TICK_MS = 7000; // how often scatter/chase toggles
const RENDER_FPS = 30; // visual render rate

export function usePacmanGame(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  cellSize: number,
  gridCols: number,
  gridRows: number,
  active: boolean,
  pixelArtGrid: number[][] | null,
  ageGrid: number[][] | null
): { toggleTile: (col: number, row: number) => void } {
  const gameRef = useRef<PacmanGameState | null>(null);
  const gameTickRef = useRef<number>(0);
  const renderRef = useRef<number>(0);
  const tickCountRef = useRef<number>(0);
  const lastGameTickRef = useRef<number>(0);
  const lastModeTickRef = useRef<number>(0);
  const lastRenderRef = useRef<number>(0);

  // Initialize game when activated
  useEffect(() => {
    if (active) {
      const maze = getMazeBounds(gridCols, gridRows);
      gameRef.current = createGame(
        gridCols,
        gridRows,
        pixelArtGrid,
        ageGrid,
        maze.offsetCol,
        maze.offsetRow
      );
      tickCountRef.current = 0;
      lastGameTickRef.current = 0;
      lastModeTickRef.current = 0;
      lastRenderRef.current = 0;
    } else {
      gameRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Keyboard handler
  useEffect(() => {
    if (!active) return;

    const handleKey = (e: KeyboardEvent) => {
      const game = gameRef.current;
      if (!game) return;

      let dir: Direction = null;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          dir = 'up';
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          dir = 'down';
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          dir = 'left';
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          dir = 'right';
          break;
        default:
          return;
      }

      e.preventDefault();

      if (game.state === 'waiting') {
        // Start game on first arrow press
        setDirection(game, dir);
        game.state = 'playing';
      } else if (game.state === 'gameover' || game.state === 'won') {
        // Restart on arrow press after game over or win
        const maze = getMazeBounds(gridCols, gridRows);
        gameRef.current = createGame(
          gridCols,
          gridRows,
          null, // no pixel art absorption on restart
          null,
          maze.offsetCol,
          maze.offsetRow
        );
        gameRef.current.state = 'playing';
        setDirection(gameRef.current, dir);
      } else {
        // Normal gameplay — update direction
        setDirection(game, dir);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [active, gridCols, gridRows]);

  // Game logic tick loop
  useEffect(() => {
    if (!active) return;

    const gameLoop = (timestamp: number) => {
      const game = gameRef.current;
      if (!game) {
        gameTickRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      // Game tick
      if (timestamp - lastGameTickRef.current >= GAME_TICK_MS) {
        if (game.state === 'playing') {
          tick(game);
          tickCountRef.current++;
        }
        lastGameTickRef.current = timestamp;
      }

      // Mode tick (scatter/chase toggle)
      if (timestamp - lastModeTickRef.current >= MODE_TICK_MS) {
        if (game.state === 'playing') {
          tickModeTimer(game);
        }
        lastModeTickRef.current = timestamp;
      }

      gameTickRef.current = requestAnimationFrame(gameLoop);
    };

    gameTickRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (gameTickRef.current) cancelAnimationFrame(gameTickRef.current);
    };
  }, [active]);

  // Render loop (separate from game logic for smooth visuals)
  useEffect(() => {
    if (!active) return;

    const renderLoop = (timestamp: number) => {
      const canvas = canvasRef.current;
      const game = gameRef.current;
      if (!canvas || !game) {
        renderRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      const elapsed = timestamp - lastRenderRef.current;
      if (elapsed >= 1000 / RENDER_FPS) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          renderPacmanGame(canvas, ctx, game, cellSize, tickCountRef.current);
        }
        lastRenderRef.current = timestamp;
      }

      renderRef.current = requestAnimationFrame(renderLoop);
    };

    renderRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (renderRef.current) cancelAnimationFrame(renderRef.current);
    };
  }, [active, canvasRef, cellSize]);

  // Expose a callback to toggle maze tiles from clicks
  const toggleTile = useCallback((col: number, row: number) => {
    const game = gameRef.current;
    if (!game) return;
    toggleGameTile(game, col, row);
  }, []);

  return { toggleTile };
}
