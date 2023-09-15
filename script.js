// create a webpage with a grid of squares as the default "sketch pad" using divs (make sure they're inside of another div "container")

const container = document.querySelector("#grid-container");

function createGrid(size) {
  // clear existing content in the container
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.cssText = `flex-basis: calc(100% / ${size})` // allows size of square to be based on user input so as to not break dimensions
    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  }
}

// allow for user input for grid size

function newGrid() {

  const gridSize = prompt("Enter the grid size (Please choose a size less than or equal to 100):");
  const size = parseInt(gridSize);

  if (!isNaN(size)) {
    createGrid(size);
  } else {
    alert("Invalid input. Please enter a valid number for the grid size.");
  }
}

newGrid();

// set up a "hover" effect so that the grid divs change color when mouse passes over them
// add a button that prompts the user, asking them for a number of squares (grid divs) to generate (using a function) (make sure they occupy the SAME TOTAL SPACE AS BEFORE WITHIN THE CONTAINER)(limit: 100 squares)

const resizeButton = document.querySelector("#change-grid");

resizeButton.addEventListener("click", () => {
  newGrid();
});

// add a button that allows the user to clear the grid

const resetButton = document.querySelector("#reset");

// calculates the square root of the number of children in the container (which equals the size of the grid), then recreates the grid
// this works because we can take the sqrt of the total # of cells (divs) to figure out how many rows and columns it has. for example: sqrt(9) = 3; you can return the 3 back to the createGrid function to get a 3x3 (9) grid.
resetButton.addEventListener("click", () => {
  createGrid(container.children.length ** 0.5);
});
