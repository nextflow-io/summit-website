import {
  type PacmanGameState,
  GHOST_COLORS,
  GHOST_FRIGHTENED_COLOR,
  GHOST_EATEN_COLOR,
  WALL_COLORS,
  DOT_COLOR,
  PACMAN_COLOR,
} from './PacmanGame';
import {
  MAP_COLS,
  MAP_ROWS,
  TILE_WALL,
  TILE_EMPTY,
  TILE_POWER,
  TILE_GHOST_HOUSE,
  TILE_PIXEL_ART_0,
  TILE_PIXEL_ART_1,
  TILE_PIXEL_ART_2,
} from './pacmanMap';

// Pixel art color palette (must match Pixels component colors.green.alive)
const PIXEL_ART_COLORS: Record<number, string> = {
  [TILE_PIXEL_ART_0]: '#B6ECE2',
  [TILE_PIXEL_ART_1]: '#56D3BA',
  [TILE_PIXEL_ART_2]: '#0CAE8E',
};
import nextflowIconUrl from './nextflow-icon.png';
import seqeraIconUrl from './seqera-icon.png';

// ── Icon Image Loading ─────────────────────────────────────────────

let nfIcon: HTMLImageElement | null = null;
let nfIconLoaded = false;
let seqeraIcon: HTMLImageElement | null = null;
let seqeraIconLoaded = false;

function ensureIconsLoaded(): void {
  if (!nfIcon) {
    nfIcon = new Image();
    nfIcon.onload = () => {
      nfIconLoaded = true;
    };
    nfIcon.src =
      typeof nextflowIconUrl === 'string'
        ? nextflowIconUrl
        : nextflowIconUrl.src;
  }
  if (!seqeraIcon) {
    seqeraIcon = new Image();
    seqeraIcon.onload = () => {
      seqeraIconLoaded = true;
    };
    seqeraIcon.src =
      typeof seqeraIconUrl === 'string' ? seqeraIconUrl : seqeraIconUrl.src;
  }
}

// ── Nextflow Logo Drawing ──────────────────────────────────────────

function drawNextflowIcon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  rotation: number = 0
): void {
  ensureIconsLoaded();
  if (!nfIcon || !nfIconLoaded) return;
  ctx.save();
  ctx.translate(cx, cy);
  if (rotation) ctx.rotate(rotation);
  ctx.drawImage(nfIcon, -size / 2, -size / 2, size, size);
  ctx.restore();
}

// ── Failed CI (Ghost) Drawing ───────────────────────────────────────

function drawFailedCI(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string
): void {
  const cx = x + size / 2;
  const cy = y + size / 2;
  const r = size * 0.38;
  const thickness = Math.max(2, size * 0.16);

  // Draw a filled circle background
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, r + thickness * 0.5, 0, Math.PI * 2);
  ctx.fill();

  // Draw the X in dark color
  const xr = r * 0.7;
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = thickness;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - xr, cy - xr);
  ctx.lineTo(cx + xr, cy + xr);
  ctx.moveTo(cx + xr, cy - xr);
  ctx.lineTo(cx - xr, cy + xr);
  ctx.stroke();
}

// ── Seqera Icon Drawing ─────────────────────────────────────────────

function drawSeqeraIcon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number
): void {
  ensureIconsLoaded();
  if (!seqeraIcon || !seqeraIconLoaded) return;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.drawImage(seqeraIcon, -size / 2, -size / 2, size, size);
  ctx.restore();
}

// ── Wall Hash ──────────────────────────────────────────────────────

function wallColorForTile(col: number, row: number): string {
  // Deterministic but varied wall colors based on position
  const hash = (col * 7 + row * 13) % WALL_COLORS.length;
  return WALL_COLORS[hash];
}

// ── Maze Bounds (used by createGame to compute offset) ──────────────

/** Returns the col/row offset where the classic maze should be stamped
 *  within a grid of the given dimensions. */
export function getMazeBounds(
  gridCols: number,
  gridRows: number
): { offsetCol: number; offsetRow: number; cols: number; rows: number } {
  const offsetCol = gridCols - MAP_COLS - 1;
  const offsetRow = Math.floor((gridRows - MAP_ROWS) / 2);
  return { offsetCol, offsetRow, cols: MAP_COLS, rows: MAP_ROWS };
}

// ── Main Render ────────────────────────────────────────────────────

export function renderPacmanGame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  game: PacmanGameState,
  cellSize: number,
  tickCount: number
): void {
  // Clear the entire canvas — the game map now spans the full grid
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw all map tiles (full canvas)
  for (let r = 0; r < game.rows; r++) {
    for (let c = 0; c < game.cols; c++) {
      const px = c * cellSize;
      const py = r * cellSize;
      const tile = game.map[r][c];

      if (tile === TILE_WALL) {
        ctx.fillStyle = wallColorForTile(c, r);
        ctx.fillRect(px, py, cellSize, cellSize);
      } else if (tile === TILE_EMPTY) {
        // Dot
        const dotSize = Math.max(2, cellSize * 0.2);
        ctx.fillStyle = DOT_COLOR;
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, dotSize, 0, Math.PI * 2);
        ctx.fill();
      } else if (tile === TILE_POWER) {
        // Power pellet: Seqera icon (monochrome white)
        drawSeqeraIcon(ctx, px + cellSize / 2, py + cellSize / 2, cellSize);
      } else if (tile === TILE_GHOST_HOUSE) {
        // Ghost house interior - subtle dark fill
        ctx.fillStyle = 'rgba(10, 150, 123, 0.08)';
        ctx.fillRect(px, py, cellSize, cellSize);
      }
      // Pixel art tiles: preserve original pixel art colors
      const pixelColor = PIXEL_ART_COLORS[tile];
      if (pixelColor) {
        ctx.fillStyle = pixelColor;
        ctx.fillRect(px, py, cellSize, cellSize);
      }
      // TILE_NO_DOT: black bg already painted
    }
  }

  // Draw ghost house gate (positioned relative to the maze offset)
  const oC = game.mazeOffsetCol;
  const oR = game.mazeOffsetRow;
  const gateY = (oR + 12) * cellSize + cellSize - 2;
  const gateX1 = (oC + 13) * cellSize;
  const gateX2 = (oC + 15) * cellSize;
  ctx.fillStyle = '#F18046'; // fusion orange for the gate
  ctx.fillRect(gateX1, gateY, gateX2 - gateX1, 2);

  // Draw ghosts
  for (const ghost of game.ghosts) {
    const gx = ghost.col * cellSize;
    const gy = ghost.row * cellSize;

    let color: string;
    if (ghost.mode === 'frightened') {
      // Flash white when almost done
      if (ghost.frightenedTimer < 10 && tickCount % 6 < 3) {
        color = '#ffffff';
      } else {
        color = GHOST_FRIGHTENED_COLOR;
      }
    } else if (ghost.mode === 'eaten') {
      color = GHOST_EATEN_COLOR;
    } else {
      color = GHOST_COLORS[ghost.index];
    }

    if (ghost.mode === 'eaten') {
      // Faded X for eaten ghosts (returning to ghost house)
      ctx.globalAlpha = 0.3;
      drawFailedCI(ctx, gx, gy, cellSize, color);
      ctx.globalAlpha = 1;
    } else {
      drawFailedCI(ctx, gx, gy, cellSize, color);
    }
  }

  // Draw Pacman (Nextflow logo)
  const pacX = game.pacman.col * cellSize + cellSize / 2;
  const pacY = game.pacman.row * cellSize + cellSize / 2;
  let rotation = 0;
  if (game.pacman.dir === 'right') rotation = 0;
  else if (game.pacman.dir === 'down') rotation = Math.PI / 2;
  else if (game.pacman.dir === 'left') rotation = Math.PI;
  else if (game.pacman.dir === 'up') rotation = -Math.PI / 2;

  drawNextflowIcon(ctx, pacX, pacY, cellSize * 1.1, rotation);

  // Draw score at the top of the maze area
  renderScore(ctx, game, cellSize);

  // Draw lives at the bottom of the maze area
  renderLives(ctx, game, cellSize);

  // Draw game state overlays (centered on the maze area)
  if (game.state === 'waiting') {
    renderCenteredText(ctx, 'PRESS ARROW KEY TO START', game, cellSize, 0.4);
  } else if (game.state === 'gameover') {
    renderCenteredText(ctx, 'GAME OVER', game, cellSize, 0);
    renderCenteredText(ctx, `SCORE: ${game.score}`, game, cellSize, 1.5);
    renderCenteredText(ctx, 'PRESS ANY KEY TO RESTART', game, cellSize, 3);
  } else if (game.state === 'won') {
    renderCenteredText(ctx, 'YOU WIN!', game, cellSize, 0);
    renderCenteredText(ctx, `SCORE: ${game.score}`, game, cellSize, 1.5);
    renderCenteredText(ctx, 'PRESS ANY KEY TO RESTART', game, cellSize, 3);
  }
}

// ── HUD Rendering ──────────────────────────────────────────────────

function renderScore(
  ctx: CanvasRenderingContext2D,
  game: PacmanGameState,
  cellSize: number
): void {
  const oC = game.mazeOffsetCol;
  const oR = game.mazeOffsetRow;
  const x = (oC + 1) * cellSize;
  const y = (oR - 1) * cellSize + cellSize * 0.8;

  if (oR < 2) return; // No space above maze

  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, cellSize * 0.7)}px monospace`;
  ctx.textAlign = 'left';
  ctx.fillText(`SCORE: ${game.score}`, x, y);
}

function renderLives(
  ctx: CanvasRenderingContext2D,
  game: PacmanGameState,
  cellSize: number
): void {
  const oC = game.mazeOffsetCol;
  const oR = game.mazeOffsetRow;
  const y = (oR + MAP_ROWS) * cellSize + cellSize * 0.5;
  for (let i = 0; i < game.lives; i++) {
    const x = (oC + 1 + i * 2) * cellSize + cellSize / 2;
    drawNextflowIcon(ctx, x, y + cellSize * 0.3, cellSize * 0.9);
  }
}

function renderCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  game: PacmanGameState,
  cellSize: number,
  lineOffset: number
): void {
  const oC = game.mazeOffsetCol;
  const oR = game.mazeOffsetRow;
  const cx = (oC + MAP_COLS / 2) * cellSize;
  const cy = (oR + MAP_ROWS / 2) * cellSize + lineOffset * cellSize;

  const fontSize = Math.max(10, cellSize * 0.65);

  // Background for readability
  ctx.font = `bold ${fontSize}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const metrics = ctx.measureText(text);
  const pad = cellSize * 0.3;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.fillRect(
    cx - metrics.width / 2 - pad,
    cy - fontSize / 2 - pad / 2,
    metrics.width + pad * 2,
    fontSize + pad
  );

  ctx.fillStyle = PACMAN_COLOR;
  ctx.fillText(text, cx, cy);
}
