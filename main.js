const containerDiv = document.querySelector("#containerDiv");

for (let i = 1; i <= 16; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "rows");
  for (let j = 1; j <= 16; j++) {
    let drawDiv = document.createElement("div");
    drawDiv.setAttribute("class", "smallDivs");
    drawDiv.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
      console.log("working");
    });
    rowDiv.appendChild(drawDiv);
  }
  containerDiv.appendChild(rowDiv);
}
