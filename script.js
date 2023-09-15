const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
  var gridDiv = document.createElement("div");
  gridDiv.classList.add("grid");
  gridDiv.style.cssText = "height: 31.25px; background-color: red";
  gridContainer.appendChild(gridDiv);
}

// add button that sets the color of the grid to white ("clears the grid")

const clearButton = document.querySelector("#clear-grid");

clearButton.addEventListener("click", () => {
  const allGridDivs = document.querySelectorAll(".grid");

  allGridDivs.forEach((gridDiv) => {
    gridDiv.style.cssText = "background-color: white";
  });
});

// make it so when you hover your mouse over the grid, it fills the grid with the color black

gridDiv.addEventListener("mouseover", () => {
  const gridSection = document.querySelector(".grid");
  if (true) {
    gridSection.style.cssText = "background-color: black";
  }
});
