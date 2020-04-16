const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const colors = [
  "red",
  "yellow",
  "cyan",
  "blue",
  "pink",
  "green",
  "lightblue",
  "gray",
];

body.style.backgroundColor = "aqua";

btn.addEventListener("click", () => {
  const index = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[index];
});
