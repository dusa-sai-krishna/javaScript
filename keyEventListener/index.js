/**
 * Regarding keys we have two events
 * keyup
 * keydown
 * we can use event.key to identify which is pressed or released
 *
 */

const box = document.getElementById("box");
const movement = 10;
let x = 0;
let y = 0;

addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= movement;
        break;
      case "ArrowDown":
        y += movement;
        break;
      case "ArrowLeft":
        x -= movement;
        break;
      case "ArrowRight":
        x += movement;
        break;
    }

    box.style.transform = `translate(${x}px, ${y}px)`;
  }
});
