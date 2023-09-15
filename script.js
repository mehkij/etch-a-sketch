const gridContainer = document.querySelector("#grid-container");
let hovering = false;

for (let i = 0; i < 240; i++) {
  var gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  gridDiv.style.cssText = "width: 31.25px; height: 31.25px";
  gridContainer.appendChild(gridDiv);
}

// // add button that sets the color of the grid to white ("clears the grid")

const clearButton = document.querySelector("#clear-grid");

clearButton.addEventListener("click", () => {
  const allGridDivs = document.querySelectorAll(".grid");

  allGridDivs.forEach((gridDiv) => {
    gridDiv.style.cssText = "background-color: white";
  });
});

// // make it so when you hover your mouse over the grid, it fills the grid with the color black

gridDiv.addEventListener("mouseover", () => {
  const gridSection = document.querySelector(".grid");
  if (true) {
    gridSection.style.cssText = "background-color: black";
  }
});

// let isPressed = false;
// gridContainer.addEventListener("mousedown", () => {isPressed = true;});
// gridContainer.addEventListener("mouseup", () => {isPressed = true});
// gridContainer.addEventListener("mousemove", (e) => {isPressed ? e.target.style.backgroundColor = "black" : e.target.backgroundColor = "white"});
// for(let i = 0; i < 256; i++) {gridContainer.appendChild(document.createElement("div"))}


