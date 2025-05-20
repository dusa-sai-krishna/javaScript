document.getElementById("increment").onclick = function () {
  let num = document.getElementById("count").textContent;
  document.getElementById("count").textContent = Number(num) + 1;
};

document.getElementById("decrement").onclick = function () {
  let num = document.getElementById("count").textContent;
  document.getElementById("count").textContent = Number(num) - 1;
};

document.getElementById("reset").onclick = function () {
  document.getElementById("count").textContent = 0;
};
