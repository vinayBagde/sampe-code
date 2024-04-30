let h1 = document.querySelector("h1");
let body = document.querySelector("body");

let btn = document.querySelector("button");
h1.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

btn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
