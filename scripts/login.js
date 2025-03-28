// const userName = document.querySelector("#Username")
// const passWord = document.querySelector("#passwordInput")
// const logIn = document.querySelector("#login")

// logIn.addEventListener("click", () => {
//     if (userName === "" && passWord === "") {
//         alert("Please enter your Username and your Password");
//         return;
//     } else if (userName === "" || passWord === "") {
//         alert(You )
//     }
// })

// const backPage =document.querySelector(".page")
// const color = document.querySelector("#changecolor")

// color.addEventListener("click", () => {
//     if (backPage.style.backgroundcolor === "red") 
//         return
//         backPage.style.backgroundcolor = "#D9D9D9"
//     } else {
//         backPage.style.backgroundcolor ="red"
    

// });

const backPage = document.querySelector(".page")
const color = document.querySelector("#buttonColor")

document.getElementById("buttonColor").addEventListener("click", function() {
    document.backPage.style.backgroundColor = "lightblue"; // Remplace "lightblue" par la couleur que tu veux
});

