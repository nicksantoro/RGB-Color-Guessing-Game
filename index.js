function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  // make array
  let array = []
  // add num random colors to array
  for (let i = 0; i < num; i++) {
    // get random color and push into array
    array.push(randomColor());
  }
  // return array
  return array;
}

function randomColor() {
  // pick a red from 0 - 255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  let g = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

let colors = generateRandomColors(6)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor()
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let headerColor = document.getElementById("header");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    // compare color of pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      header.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again"
    }
  })
}



