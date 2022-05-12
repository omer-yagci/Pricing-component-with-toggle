const slider = document.querySelector(".slider");
const btnMid = document.querySelectorAll(".btn");

btnMid.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    buttons.addEventListener("click", changeColor);
  });
});

const body = document.querySelector("body");
slider.addEventListener("click", changeColor);

function changeColor() {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  btnMid.style.background = `rgb(${r}, ${g}, ${b})`;
}
console.log(btnMid);
