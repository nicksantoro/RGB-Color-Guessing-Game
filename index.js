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

let numSquares = 6;

let colors = generateRandomColors(numSquares)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor()
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let headerColor = document.getElementById("header");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset()
  })
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

// easyBtn.addEventListener("click", function () {
//   hardBtn.classList.remove("selected")
//   easyBtn.classList.add("selected")
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })

// hardBtn.addEventListener("click", function () {
//   easyBtn.classList.remove("selected")
//   hardBtn.classList.add("selected")
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })

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
      resetButton.textContent = "Play Again"
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again"
    }
  })
}

resetButton.addEventListener("click", function () {
  reset();
})



