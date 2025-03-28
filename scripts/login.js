const page = document.querySelector(".page"); 
// const color = document.getElementById("buttonColor");
const color = document.querySelector("#buttonColor");



color.addEventListener("click", () => {
    const originalColor = "#D9D9D9"; // Couleur d'origine si elle bien définie dans le CSS
    if (page.style.backgroundColor === "lightblue") {
        page.style.backgroundColor = originalColor; // Permet de revenir à la couleur d'origine
    } else {
        page.style.backgroundColor = "lightblue"; 
    }
});



const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passwordInput");
const logIn = document.querySelector("#buttonLogin");

logIn.addEventListener("click", (e) => {
    
    if (userName.value === "" || passWord.value === "") {
        alert("Please fill empty box");
        e.preventDefault();
        logIn.disabled = true;
    }
});
