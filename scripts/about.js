const color = document.querySelector("main");
const buttonColorCarte = document.querySelector(".carte");

buttonColorCarte.addEventListener("click", () => {
  if (color.style.backgroundColor === "white") {
    color.style.backgroundColor = "lightblue";
  } else {
    color.style.backgroundColor = "white";
  }
});
