const list = document.querySelector('.list');
const button = document.querySelector('.bouton-add');
const formTask = document.querySelector('.add-task');
const input = document.querySelector('.zone-text');

button.addEventListener('click', () => {
    if (input.value === '') {
        alert("Vous devez écrire quelque chose !")

    } else {
    const newLi = document.createElement("li");
    newLi.width = "300";
    newLi.height = "260";
    newLi.style.backgroundColor = "red";
    newLi.innerText = input.value;
    // newLi.style.maxWidth = "60ch";
    list.appendChild(newLi);
    input.value = "";}
});

formTask.addEventListener('submit', (event) => {
    event.preventDefault();

    const newLi = document.createElement("li");
    newLi.width = "300";
    newLi.height = "260";
    newLi.style.backgroundColor = "red";
    newLi.innerText = input.value;
    // newLi.style.maxWidth = "60ch";
    list.appendChild(newLi);
    input.value = "";
})