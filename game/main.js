/*
This file contains the main logic for the snake game.
*/
// Constants
const GRID_SIZE = 20;
const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;
const INITIAL_SPEED = 200;
const MIN_SPEED = 50; // Minimum speed threshold
// Variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 10 };
let direction = "right";
let speed = INITIAL_SPEED;
let gameInterval;
// Function to start the game
function startGame() {
  // Initialize the game
  initialize();
  // Start the game loop
  gameInterval = setInterval(gameLoop, speed);
}
// Function to initialize the game
function initialize() {
  // Clear the grid
  clearGrid();
  // Reset the snake
  snake = [{ x: 10, y: 10 }];
  // Reset the direction
  direction = "right";
  // Reset the speed
  speed = INITIAL_SPEED;
  // Generate new food
  generateFood();
  // Add event listener for keyboard input
  document.addEventListener("keydown", handleKeyPress);
}
// Function to clear the grid
function clearGrid() {
  const grid = document.getElementById("grid");
  // Remove all child elements
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  // Create the grid cells
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell-${col}-${row}`;
      grid.appendChild(cell);
    }
  }
}
// Function to generate new food
function generateFood() {
  const emptyCells = [];
  // Find all empty cells
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      if (!isSnakeCell(col, row)) {
        emptyCells.push({ x: col, y: row });
      }
    }
  }
  // Randomly select an empty cell
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  food = emptyCells[randomIndex];
  // Set the food cell class
  const foodCell = document.getElementById(`cell-${food.x}-${food.y}`);
  foodCell.classList.add("food");
}
// Function to check if a cell is occupied by the snake
function isSnakeCell(x, y) {
  return snake.some((cell) => cell.x === x && cell.y === y);
}
// Function to handle keyboard input
function handleKeyPress(event) {
  const key = event.key;
  if (key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
}
// Function to update the game state
function update() {
  // Get the head of the snake
  const head = { ...snake[0] };
  // Update the head position based on the direction
  if (direction === "up") {
    head.y--;
  } else if (direction === "down") {
    head.y++;
  } else if (direction === "left") {
    head.x--;
  } else if (direction === "right") {
    head.x++;
  }
  // Check if the snake has collided with the wall or itself
  if (
    head.x < 0 ||
    head.x >= GRID_WIDTH ||
    head.y < 0 ||
    head.y >= GRID_HEIGHT ||
    isSnakeCell(head.x, head.y)
  ) {
    // Game over
    clearInterval(gameInterval);
    alert("Game Over!");
    return;
  }
  // Check if the snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    // Increase the snake length
    snake.unshift(head);
    // Generate new food
    generateFood();
    // Increase the speed
    speed -= 10;
    if (speed < MIN_SPEED) {
      speed = MIN_SPEED; // Set a minimum speed threshold
    }
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
  } else {
    // Remove the tail of the snake from the grid
    const tail = snake.pop();
    const tailCell = document.getElementById(`cell-${tail.x}-${tail.y}`);
    tailCell.classList.remove("snake");
    // Add the new head to the snake
    snake.unshift(head);
  }
}
// Function to render the game state
function render() {
  // Clear the grid
  clearGrid();
  // Render the snake
  snake.forEach((cell) => {
    const snakeCell = document.getElementById(`cell-${cell.x}-${cell.y}`);
    snakeCell.classList.add("snake");
  });
  // Render the food
  const foodCell = document.getElementById(`cell-${food.x}-${food.y}`);
  foodCell.classList.add("food");
}
// Function for the game loop
function gameLoop() {
  update();
  render();
}
// Start the game
startGame();