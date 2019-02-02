let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let headerColor = document.getElementById("header");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset()
    })
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      // compare color of pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        header.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again"
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again"
      }
    })
  }
}

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

function reset() {
  // genereate all new colors
  colors = generateRandomColors(numSquares)
  // pick a new random color from array
  pickedColor = pickColor()
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  headerColor.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function () {
  reset();
})