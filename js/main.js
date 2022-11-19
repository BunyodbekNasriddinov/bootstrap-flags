var body = document.querySelector("body");
var modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", () => {
  body.classList.toggle("mode");
})