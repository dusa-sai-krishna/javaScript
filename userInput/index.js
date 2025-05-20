// Easy way - window prompt

// let username = window.prompt("Enter your username.");
// document.getElementById("h1").textContent = username;

// HardWay - text box

let username;
document.getElementById("subbtn").onclick = function () {
  username = document.getElementById("username").value;
  window.alert(username);
  document.getElementById("h1").textContent = `Username is ${username}`;
};
