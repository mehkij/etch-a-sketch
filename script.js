// create a webpage with a 16 x 16 grid of squares as the default "sketch pad" using divs (make sure they're inside of another div "container")

const container = document.querySelector("#grid-container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  }
}

createGrid();

// set up a "hover" effect so that the grid divs change color when mouse passes over them
// add a button that prompts the user, asking them for a number of squares (grid divs) to generate (using a function) (make sure they occupy the SAME TOTAL SPACE AS BEFORE WITHIN THE CONTAINER)(limit: 100 squares)

// extra credit challenge: add a "rainbow" option to where every drag of the mouse randomizes the square's RGB value
// extra credit challenge: make it so each interaction with the square adds 10% more of a color to the square (should have a completely full square after 10 interactions with it)

