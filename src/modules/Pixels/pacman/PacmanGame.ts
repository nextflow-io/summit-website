import {
  PACMAN_MAP,
  MAP_COLS,
  MAP_ROWS,
  TILE_WALL,
  TILE_EMPTY,
  TILE_POWER,
  TILE_GHOST_HOUSE,
  TILE_NO_DOT,
  TILE_PIXEL_ART_0,
  TILE_PIXEL_ART_1,
  TILE_PIXEL_ART_2,
  PACMAN_START,
  GHOST_STARTS,
  GHOST_SCATTER_TARGETS,
} from './pacmanMap';

// ── Types ──────────────────────────────────────────────────────────

export type Direction = 'up' | 'down' | 'left' | 'right' | null;

export interface Entity {
  col: number;
  row: number;
  dir: Direction;
  nextDir: Direction;
}

export interface Ghost extends Entity {
  mode: 'scatter' | 'chase' | 'frightened' | 'eaten';
  frightenedTimer: number;
  index: number;
}

export type GameState = 'waiting' | 'playing' | 'won' | 'dead' | 'gameover';

export interface PacmanGameState {
  pacman: Entity;
  ghosts: Ghost[];
  map: number[][];
  cols: number; // full grid width
  rows: number; // full grid height
  mazeOffsetCol: number; // where the classic maze was stamped
  mazeOffsetRow: number;
  pacmanStart: { col: number; row: number };
  ghostStarts: { col: number; row: number }[];
  scatterTargets: { col: number; row: number }[];
  ghostHouseEntrance: { col: number; row: number };
  score: number;
  lives: number;
  state: GameState;
  dotsRemaining: number;
  frightenedMode: boolean;
  level: number;
  ghostCombo: number; // for scoring successive ghost eats
  modeTimer: number; // scatter/chase alternation counter
}

// ── Colors ─────────────────────────────────────────────────────────

// Ghost colors: Seqera brand palette
export const GHOST_COLORS = [
  '#FA6863', // Blinky  - red (wave)
  '#F18046', // Pinky   - orange (fusion)
  '#3D95FD', // Inky    - blue (wave)
  '#0DC09D', // Clyde   - green (nextflow)
];
export const GHOST_FRIGHTENED_COLOR = '#1a1a5c';
export const GHOST_EATEN_COLOR = '#444444';

export const WALL_COLORS = ['#0A967B', '#087F68', '#065647']; // nextflow dark greens (800/900/1000)
export const DOT_COLOR = '#B6ECE2'; // nextflow-200
export const PACMAN_COLOR = '#0DC09D'; // nextflow-600

// ── Helpers ────────────────────────────────────────────────────────

function isWalkable(
  map: number[][],
  col: number,
  row: number,
  allowGhostHouse: boolean = false
): boolean {
  // Out of bounds = not walkable (no wrapping)
  if (row < 0 || row >= map.length) return false;
  if (col < 0 || col >= map[0].length) return false;
  const tile = map[row][col];
  if (tile === TILE_WALL) return false;
  if (tile >= TILE_PIXEL_ART_0 && tile <= TILE_PIXEL_ART_2) return false;
  if (tile === TILE_GHOST_HOUSE && !allowGhostHouse) return false;
  return true;
}

function clampCol(col: number, cols: number): number {
  if (col < 0) return 0;
  if (col >= cols) return cols - 1;
  return col;
}

const DIR_DELTAS: Record<string, { dc: number; dr: number }> = {
  up: { dc: 0, dr: -1 },
  down: { dc: 0, dr: 1 },
  left: { dc: -1, dr: 0 },
  right: { dc: 1, dr: 0 },
};

const OPPOSITE: Record<string, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

// ── Game Creation ──────────────────────────────────────────────────

/**
 * Create a game with the map spanning the full canvas grid.
 * The classic Pacman maze is stamped at (mazeOffsetCol, mazeOffsetRow).
 * If pixelArtGrid is provided, alive cells outside the maze footprint
 * become walls in the game map.
 */
export function createGame(
  cols: number,
  rows: number,
  pixelArtGrid: number[][] | null,
  ageGrid: number[][] | null,
  mazeOffsetCol: number,
  mazeOffsetRow: number
): PacmanGameState {
  // Create full-size map filled with TILE_NO_DOT (walkable, no dots)
  const map: number[][] = [];
  for (let r = 0; r < rows; r++) {
    map.push(new Array(cols).fill(TILE_NO_DOT));
  }

  // Stamp the classic Pacman maze at the offset position
  for (let r = 0; r < MAP_ROWS; r++) {
    for (let c = 0; c < MAP_COLS; c++) {
      const destRow = mazeOffsetRow + r;
      const destCol = mazeOffsetCol + c;
      if (destRow >= 0 && destRow < rows && destCol >= 0 && destCol < cols) {
        map[destRow][destCol] = PACMAN_MAP[r][c];
      }
    }
  }

  // Absorb pixel art as walls (outside the maze footprint only)
  // pixelArtGrid is [col][row] (column-major), value 1 = alive cell
  // Use age-based tile types to preserve original pixel art colors
  if (pixelArtGrid) {
    for (let gridCol = 0; gridCol < pixelArtGrid.length; gridCol++) {
      for (let gridRow = 0; gridRow < pixelArtGrid[gridCol].length; gridRow++) {
        if (pixelArtGrid[gridCol][gridRow] === 1) {
          // Skip cells that fall inside the classic maze footprint
          const inMaze =
            gridCol >= mazeOffsetCol &&
            gridCol < mazeOffsetCol + MAP_COLS &&
            gridRow >= mazeOffsetRow &&
            gridRow < mazeOffsetRow + MAP_ROWS;
          if (!inMaze && gridRow < rows && gridCol < cols) {
            // Pick pixel art tile type based on age (3 visible greens only)
            const age = ageGrid?.[gridCol]?.[gridRow] || 0;
            let tile: number;
            if (age < 3) tile = TILE_PIXEL_ART_0;
            else if (age < 6) tile = TILE_PIXEL_ART_1;
            else tile = TILE_PIXEL_ART_2;
            map[gridRow][gridCol] = tile;
          }
        }
      }
    }
  }

  // Count dots (only from the stamped maze region)
  let dotsRemaining = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === TILE_EMPTY || map[r][c] === TILE_POWER) {
        dotsRemaining++;
      }
    }
  }

  // Offset-adjusted positions
  const pacmanStart = {
    col: mazeOffsetCol + PACMAN_START.col,
    row: mazeOffsetRow + PACMAN_START.row,
  };
  const ghostStarts = GHOST_STARTS.map((s) => ({
    col: mazeOffsetCol + s.col,
    row: mazeOffsetRow + s.row,
  }));
  const scatterTargets = GHOST_SCATTER_TARGETS.map((t) => ({
    col: mazeOffsetCol + t.col,
    row: mazeOffsetRow + t.row,
  }));
  const ghostHouseEntrance = {
    col: mazeOffsetCol + 14,
    row: mazeOffsetRow + 13,
  };

  return {
    pacman: {
      col: pacmanStart.col,
      row: pacmanStart.row,
      dir: null,
      nextDir: null,
    },
    ghosts: ghostStarts.map((start, i) => ({
      col: start.col,
      row: start.row,
      dir: null,
      nextDir: null,
      mode: 'scatter' as const,
      frightenedTimer: 0,
      index: i,
    })),
    map,
    cols,
    rows,
    mazeOffsetCol,
    mazeOffsetRow,
    pacmanStart,
    ghostStarts,
    scatterTargets,
    ghostHouseEntrance,
    score: 0,
    lives: 3,
    state: 'waiting',
    dotsRemaining,
    frightenedMode: false,
    level: 1,
    ghostCombo: 0,
    modeTimer: 0,
  };
}

// ── Input ──────────────────────────────────────────────────────────

export function setDirection(game: PacmanGameState, dir: Direction): void {
  if (game.state === 'waiting') {
    game.state = 'playing';
  }
  if (game.state !== 'playing') return;
  game.pacman.nextDir = dir;
}

// ── Tick ───────────────────────────────────────────────────────────

export function tick(game: PacmanGameState): void {
  if (game.state !== 'playing') return;

  movePacman(game);
  collectDot(game);

  for (const ghost of game.ghosts) {
    moveGhost(game, ghost);
  }

  checkCollisions(game);

  // Check win
  if (game.dotsRemaining <= 0) {
    game.state = 'won';
  }
}

// ── Pacman Movement ────────────────────────────────────────────────

function movePacman(game: PacmanGameState): void {
  const { pacman, map } = game;

  // Try next direction first
  if (pacman.nextDir) {
    const delta = DIR_DELTAS[pacman.nextDir];
    const nc = pacman.col + delta.dc;
    const nr = pacman.row + delta.dr;
    if (isWalkable(map, nc, nr)) {
      pacman.dir = pacman.nextDir;
      pacman.nextDir = null;
    }
  }

  // Move in current direction
  if (pacman.dir) {
    const delta = DIR_DELTAS[pacman.dir];
    const nc = pacman.col + delta.dc;
    const nr = pacman.row + delta.dr;
    if (isWalkable(map, nc, nr)) {
      pacman.col = nc;
      pacman.row = nr;
    }
  }
}

// ── Dot Collection ─────────────────────────────────────────────────

function collectDot(game: PacmanGameState): void {
  const { pacman, map } = game;
  const tile = map[pacman.row]?.[pacman.col];

  if (tile === TILE_EMPTY) {
    map[pacman.row][pacman.col] = TILE_NO_DOT;
    game.score += 10;
    game.dotsRemaining--;
  } else if (tile === TILE_POWER) {
    map[pacman.row][pacman.col] = TILE_NO_DOT;
    game.score += 50;
    game.dotsRemaining--;
    game.frightenedMode = true;
    game.ghostCombo = 0;
    for (const ghost of game.ghosts) {
      if (ghost.mode !== 'eaten') {
        ghost.mode = 'frightened';
        ghost.frightenedTimer = 40; // ~40 ticks of frightened mode
        // Reverse direction
        if (ghost.dir) {
          ghost.dir = OPPOSITE[ghost.dir];
        }
      }
    }
  }
}

// ── Ghost Movement ─────────────────────────────────────────────────

function moveGhost(game: PacmanGameState, ghost: Ghost): void {
  const { map, pacman } = game;

  // Decrement frightened timer
  if (ghost.mode === 'frightened') {
    ghost.frightenedTimer--;
    if (ghost.frightenedTimer <= 0) {
      ghost.mode = 'chase';
      game.frightenedMode = game.ghosts.some((g) => g.mode === 'frightened');
    }
  }

  // Determine target tile
  let target = getGhostTarget(game, ghost);

  // Get available directions (can't reverse)
  const available: Direction[] = [];
  for (const dir of ['up', 'down', 'left', 'right'] as Direction[]) {
    if (!dir) continue;
    if (ghost.dir && dir === OPPOSITE[ghost.dir]) continue;
    const delta = DIR_DELTAS[dir];
    const nc = ghost.col + delta.dc;
    const nr = ghost.row + delta.dr;
    // Allow entering ghost house if eaten or already near it
    const canEnterHouse =
      ghost.mode === 'eaten' ||
      (ghost.row >= game.mazeOffsetRow + 12 &&
        ghost.row <= game.mazeOffsetRow + 15 &&
        ghost.col >= game.mazeOffsetCol + 11 &&
        ghost.col <= game.mazeOffsetCol + 17);
    if (isWalkable(map, nc, nr, canEnterHouse)) {
      available.push(dir);
    }
  }

  if (available.length === 0) {
    // Can only reverse
    if (ghost.dir) {
      ghost.dir = OPPOSITE[ghost.dir];
    }
    return;
  }

  // In frightened mode, choose randomly
  if (ghost.mode === 'frightened') {
    const chosen = available[Math.floor(Math.random() * available.length)];
    ghost.dir = chosen;
  } else {
    // Choose direction that minimizes distance to target
    let bestDir = available[0];
    let bestDist = Infinity;
    for (const dir of available) {
      if (!dir) continue;
      const delta = DIR_DELTAS[dir];
      const nc = ghost.col + delta.dc;
      const nr = ghost.row + delta.dr;
      const dist = (nc - target.col) ** 2 + (nr - target.row) ** 2;
      if (dist < bestDist) {
        bestDist = dist;
        bestDir = dir;
      }
    }
    ghost.dir = bestDir;
  }

  // Apply movement
  if (ghost.dir) {
    const delta = DIR_DELTAS[ghost.dir];
    ghost.col = ghost.col + delta.dc;
    ghost.row = ghost.row + delta.dr;
  }

  // If eaten ghost reached home, respawn
  const houseEntrance = game.ghostHouseEntrance;
  if (
    ghost.mode === 'eaten' &&
    ghost.row === houseEntrance.row &&
    ghost.col >= houseEntrance.col - 2 &&
    ghost.col <= houseEntrance.col + 1
  ) {
    ghost.mode = 'chase';
  }
}

function getGhostTarget(
  game: PacmanGameState,
  ghost: Ghost
): { col: number; row: number } {
  const { pacman } = game;

  if (ghost.mode === 'eaten') {
    return game.ghostHouseEntrance;
  }

  if (ghost.mode === 'scatter') {
    return game.scatterTargets[ghost.index];
  }

  // Chase mode - each ghost has different targeting
  switch (ghost.index) {
    case 0: // Blinky - targets pacman directly
      return { col: pacman.col, row: pacman.row };

    case 1: {
      // Pinky - targets 4 tiles ahead of pacman
      const delta = pacman.dir ? DIR_DELTAS[pacman.dir] : { dc: 0, dr: 0 };
      return {
        col: clampCol(pacman.col + delta.dc * 4, game.cols),
        row: Math.max(0, Math.min(game.rows - 1, pacman.row + delta.dr * 4)),
      };
    }

    case 2: {
      // Inky - complex: uses blinky's position
      const blinky = game.ghosts[0];
      const delta = pacman.dir ? DIR_DELTAS[pacman.dir] : { dc: 0, dr: 0 };
      const pivotCol = pacman.col + delta.dc * 2;
      const pivotRow = pacman.row + delta.dr * 2;
      return {
        col: clampCol(pivotCol + (pivotCol - blinky.col), game.cols),
        row: Math.max(
          0,
          Math.min(game.rows - 1, pivotRow + (pivotRow - blinky.row))
        ),
      };
    }

    case 3: {
      // Clyde - targets pacman if far, scatter corner if near
      const dist =
        (ghost.col - pacman.col) ** 2 + (ghost.row - pacman.row) ** 2;
      if (dist > 64) {
        return { col: pacman.col, row: pacman.row };
      }
      return game.scatterTargets[ghost.index];
    }

    default:
      return { col: pacman.col, row: pacman.row };
  }
}

// ── Collision Detection ────────────────────────────────────────────

function checkCollisions(game: PacmanGameState): void {
  const { pacman, ghosts } = game;

  for (const ghost of ghosts) {
    if (ghost.col === pacman.col && ghost.row === pacman.row) {
      if (ghost.mode === 'frightened') {
        // Eat ghost
        ghost.mode = 'eaten';
        game.ghostCombo++;
        game.score += 200 * game.ghostCombo;
      } else if (ghost.mode !== 'eaten') {
        // Pacman dies
        game.lives--;
        if (game.lives <= 0) {
          game.state = 'gameover';
        } else {
          game.state = 'dead';
          // Reset positions
          resetPositions(game);
        }
        return;
      }
    }
  }
}

function resetPositions(game: PacmanGameState): void {
  game.pacman.col = game.pacmanStart.col;
  game.pacman.row = game.pacmanStart.row;
  game.pacman.dir = null;
  game.pacman.nextDir = null;
  game.state = 'waiting';

  game.ghosts.forEach((ghost, i) => {
    ghost.col = game.ghostStarts[i].col;
    ghost.row = game.ghostStarts[i].row;
    ghost.dir = null;
    ghost.mode = 'scatter';
    ghost.frightenedTimer = 0;
  });

  game.frightenedMode = false;
}

// ── Tile Editing ────────────────────────────────────────────────────

export function toggleTile(
  game: PacmanGameState,
  col: number,
  row: number
): void {
  if (row < 0 || row >= game.rows || col < 0 || col >= game.cols) return;

  const tile = game.map[row][col];

  // Protect ghost house and power pellets
  if (tile === TILE_GHOST_HOUSE || tile === TILE_POWER) return;

  // Don't toggle if pacman or a ghost is on this tile
  if (game.pacman.col === col && game.pacman.row === row) return;
  for (const ghost of game.ghosts) {
    if (ghost.col === col && ghost.row === row) return;
  }

  // Cycle through pixel art colors like the original pixel art click handler:
  // empty/no-dot → lightest → medium → darkest → empty
  // walls also enter the cycle at lightest
  if (tile === TILE_WALL || tile === TILE_NO_DOT) {
    // Wall or empty no-dot → lightest pixel art color
    game.map[row][col] = TILE_PIXEL_ART_0;
  } else if (tile === TILE_PIXEL_ART_0) {
    game.map[row][col] = TILE_PIXEL_ART_1;
  } else if (tile === TILE_PIXEL_ART_1) {
    game.map[row][col] = TILE_PIXEL_ART_2;
  } else if (tile === TILE_PIXEL_ART_2) {
    // Darkest (or black) → empty path with dot
    game.map[row][col] = TILE_EMPTY;
    game.dotsRemaining++;
  } else if (tile === TILE_EMPTY) {
    // Empty with dot → lightest pixel art (removes dot)
    game.map[row][col] = TILE_PIXEL_ART_0;
    game.dotsRemaining--;
  }
}

// ── Mode Switching ─────────────────────────────────────────────────

export function tickModeTimer(game: PacmanGameState): void {
  if (game.state !== 'playing') return;
  game.modeTimer++;

  // Simple scatter/chase alternation
  // Scatter for 35 ticks, chase for 100 ticks
  const cycle = game.modeTimer % 135;
  const shouldScatter = cycle < 35;

  for (const ghost of game.ghosts) {
    if (ghost.mode === 'frightened' || ghost.mode === 'eaten') continue;
    const newMode = shouldScatter ? 'scatter' : 'chase';
    if (ghost.mode !== newMode) {
      ghost.mode = newMode;
      // Reverse direction on mode switch
      if (ghost.dir) {
        ghost.dir = OPPOSITE[ghost.dir];
      }
    }
  }
}
