import React, { useState, useEffect, useRef, useCallback } from 'react';

const Pixels = ({
  initialCellSize = 20,
  initialSpeed = 100,
  initialDensity = 0.3,
  colorScheme = 'green',
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [cellSize, setCellSize] = useState(initialCellSize);
  const [speed, setSpeed] = useState(initialSpeed);
  const [generation, setGeneration] = useState(0);
  const [density, setDensity] = useState(initialDensity);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  const gridRef = useRef(null);
  const ageGridRef = useRef(null);
  const animationRef = useRef(null);
  const lastUpdateRef = useRef(0);

  // Color schemes
  const colors = {
    green: {
      alive: ['#B6ECE2', '#56D3BA', '#0CAE8E', '#000000'],
      dead: 'rgba(0, 0, 0, 0)',
      bg: 'rgba(0, 0, 0, 0)',
    },
  };

  const currentColors = colors[colorScheme] || colors.green;

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize grid
  const createEmptyGrid = useCallback((cols, rows) => {
    return Array(cols)
      .fill(null)
      .map(() => Array(rows).fill(0));
  }, []);

  const createRandomGrid = useCallback((cols, rows, density) => {
    const grid = Array(cols)
      .fill(null)
      .map(() =>
        Array(rows)
          .fill(null)
          .map(() => (Math.random() < density ? 1 : 0))
      );

    // Initialize age grid with random ages for variety
    ageGridRef.current = Array(cols)
      .fill(null)
      .map((_, i) =>
        Array(rows)
          .fill(null)
          .map((_, j) => (grid[i][j] ? Math.floor(Math.random() * 9) : 0))
      );

    return grid;
  }, []);

  // Calculate next generation
  const countNeighbors = useCallback((grid, x, y, cols, rows) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newX = (x + i + cols) % cols;
        const newY = (y + j + rows) % rows;
        count += grid[newX][newY];
      }
    }
    return count;
  }, []);

  const computeNextGeneration = useCallback(
    (grid, cols, rows) => {
      const newGrid = createEmptyGrid(cols, rows);
      const newAgeGrid = Array(cols)
        .fill(null)
        .map(() => Array(rows).fill(0));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const neighbors = countNeighbors(grid, i, j, cols, rows);
          const current = grid[i][j];

          if (current === 1 && (neighbors === 2 || neighbors === 3)) {
            newGrid[i][j] = 1;
            newAgeGrid[i][j] = (ageGridRef.current?.[i]?.[j] || 0) + 1;
          } else if (current === 0 && neighbors === 3) {
            newGrid[i][j] = 1;
            newAgeGrid[i][j] = 0;
          } else {
            newGrid[i][j] = 0;
            newAgeGrid[i][j] = 0;
          }
        }
      }

      ageGridRef.current = newAgeGrid;
      return newGrid;
    },
    [countNeighbors, createEmptyGrid]
  );

  // Draw on canvas
  const draw = useCallback(
    (canvas, ctx, grid, cols, rows) => {
      ctx.fillStyle = currentColors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;

          if (grid[i][j]) {
            const age = ageGridRef.current?.[i]?.[j] || 0;
            let colorIndex;
            if (age < 3) {
              colorIndex = 0; // Color 1: #B6ECE2
            } else if (age < 6) {
              colorIndex = 1; // Color 2: #56D3BA
            } else if (age < 9) {
              colorIndex = 2; // Color 3: #0CAE8E
            } else {
              colorIndex = 3; // Color 4: #000000 
            }
            ctx.fillStyle = currentColors.alive[colorIndex];
            ctx.fillRect(x, y, cellSize, cellSize);
          } else {
            ctx.fillStyle = currentColors.dead;
            ctx.fillRect(x, y, cellSize, cellSize);
          }
        }
      }
    },
    [cellSize, currentColors]
  );

  // Initialize canvas and grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);

    // Recreate grid if dimensions changed or grid doesn't exist
    if (
      !gridRef.current ||
      gridRef.current.length !== cols ||
      (gridRef.current[0] && gridRef.current[0].length !== rows)
    ) {
      gridRef.current = createRandomGrid(cols, rows, density);
    }

    draw(canvas, ctx, gridRef.current, cols, rows);
  }, [cellSize, createRandomGrid, draw, density, dimensions]);

  // Animation loop
  useEffect(() => {
    if (!isRunning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);

    const animate = (timestamp) => {
      if (timestamp - lastUpdateRef.current >= speed) {
        gridRef.current = computeNextGeneration(gridRef.current, cols, rows);
        draw(canvas, ctx, gridRef.current, cols, rows);
        setGeneration((g) => g + 1);
        lastUpdateRef.current = timestamp;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, speed, cellSize, computeNextGeneration, draw]);

  const handleReset = () => {
    setIsRunning(false);
    setGeneration(0);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);
    gridRef.current = createRandomGrid(cols, rows, density);

    const ctx = canvas.getContext('2d');
    draw(canvas, ctx, gridRef.current, cols, rows);
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / cellSize);
    const y = Math.floor((e.clientY - rect.top) / cellSize);

    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);

    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      // Initialize age grid if it doesn't exist
      if (!ageGridRef.current) {
        ageGridRef.current = Array(cols)
          .fill(null)
          .map(() => Array(rows).fill(0));
      }

      const currentAge = ageGridRef.current[x][y] || 0;
      const isAlive = gridRef.current[x][y] === 1;

      if (!isAlive) {
        // Dead -> Color 1 (age 0-2)
        gridRef.current[x][y] = 1;
        ageGridRef.current[x][y] = 0;
      } else if (currentAge < 3) {
        // Color 1 -> Color 2 (age 3-5)
        ageGridRef.current[x][y] = 3;
      } else if (currentAge < 6) {
        // Color 2 -> Color 3 (age 6-8)
        ageGridRef.current[x][y] = 6;
      } else if (currentAge < 9) {
        // Color 3 -> Color 4 (age 9+)
        ageGridRef.current[x][y] = 9;
      } else {
        // Color 4 -> Dead
        gridRef.current[x][y] = 0;
        ageGridRef.current[x][y] = 0;
      }

      const ctx = canvas.getContext('2d');
      draw(canvas, ctx, gridRef.current, cols, rows);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute top-0 left-0 z-20"
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-cell"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};

export default Pixels;
