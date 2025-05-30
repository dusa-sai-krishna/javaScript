const inputBox = document.getElementById("inputBox");
const celToF = document.getElementById("celToF");
const fToCel = document.getElementById("fToCel");
const convertBtn = document.getElementById("convertBtn");
const value = document.getElementById("value");

convertBtn.onclick = function () {
  let temp = inputBox.value;
  if (celToF.checked) {
    let convertedTemp = temp * (9 / 5) + 32;
    value.textContent = convertedTemp + "°" + "F";
  } else if (fToCel.checked) {
    let convertedTemp = ((temp - 32) * 5) / 9;
    value.textContent = convertedTemp + "°" + "C";
  } else {
    window.alert("Select a unit");
  }
};
