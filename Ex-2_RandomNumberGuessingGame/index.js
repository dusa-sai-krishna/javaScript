const min = 1;
const max = 100;
const num = Math.floor(Math.random() * (max - min)) + min;

window.alert("You have 5 chances to guess the Number. It is from 1 to 100");
1;
for (let i = 0; i < 5; i++) {
  let guess = window.prompt("Enter your guess:");
  if (guess > num) {
    window.alert("Your guess is higher");
  } else if (guess < num) {
    window.alert("Your guess is smaller then num");
  } else {
    window.alert(`You have guessed correctly. Num:${num}`);
    break;
  }
}
