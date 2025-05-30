/**
 * Mouse has following event listerns
 * click
 * mouseover
 * mouseout
 *
 * .addEventListener("eventType",callback/arrow function/ anonymous function)
 */

const btn = document.getElementById("btn");
const btnContent = document.querySelector("#btn>p");

btn.addEventListener("click", (event) => {
  btn.classList.remove("bg-green-500");
  btn.classList.add("bg-red-500");
  btnContent.textContent = "It hurts!! 🤕";
});

btn.addEventListener("mouseover", (event) => {
  btn.classList.remove("bg-green-500");
  btn.classList.add("bg-yellow-500");
  btnContent.textContent = "Don't come near me 😨";
});

btn.addEventListener("mouseout", (event) => {
  btn.classList.remove("bg-yellow-500");
  btn.classList.remove("bg-red-500");
  btn.classList.add("bg-green-500");
  btnContent.textContent = "Click Me 😀";
});
