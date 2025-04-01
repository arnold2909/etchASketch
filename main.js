let gridSize = 16;

const containerDiv = document.querySelector("#containerDiv");
const gridButton = document.querySelector("#gridSizeButton");
const gridInput = document.querySelector("#gridSizeInput");

function makeGrid() {
  for (let i = 1; i <= gridSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "rows");
    for (let j = 1; j <= gridSize; j++) {
      const drawDiv = document.createElement("div");
      drawDiv.setAttribute("class", "smallDivs");
      drawDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
      });
      rowDiv.appendChild(drawDiv);
    }
    containerDiv.appendChild(rowDiv);
  }
}

gridButton.addEventListener("click", () => {
  if (gridInput.value > 0) {
    gridSize = gridInput.value;
    gridInput.value = "";
    containerDiv.innerHTML = "";
    makeGrid();
  } else {
    gridInput.value = "";
    containerDiv.innerHTML = "";
    makeGrid();
  }
});

makeGrid();
