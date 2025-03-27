// Variable ul/button/form/input
const list = document.querySelector('.list');
const button = document.querySelector('.bouton-add');
const formTask = document.querySelector('.add-task');
const input = document.querySelector('.zone-text');

/* Function pour créer un bouton avec une action 
    Valider ou supprimer le post-it
*/
function createButton(icon, className, action) {
    const bouton = document.createElement("button");
    bouton.classList.add(className);
    bouton.innerHTML = icon;
    bouton.onclick = action;
    return bouton;
}

/*  Function -> création d'un li>article p
    +2 button en utilisant la function createButton (valider ou supprimer)
*/
function createTaskElement(text) {
    const newLi = document.createElement("li");
    newLi.classList.add("task-li");

    const articleContainer = document.createElement("article");
    articleContainer.classList.add("task-article");

    const pInsideLi = document.createElement("p");
    pInsideLi.classList.add("task-p");
    pInsideLi.innerText = text;

    // Boutons
    const doneButton = createButton("✔", "done-button", function () {
        newLi.classList.toggle("validated"); // Marquer comme validé
    });

    /* Variable qui permet d'utiliser la fonction createButton
     avec les paramètres voulu et permet de supprimer newTask
    */
    const deleteButton = createButton("🗑", "delete-button", function () {
        newLi.remove();
    });

    articleContainer.appendChild(doneButton);
    articleContainer.appendChild(pInsideLi);
    articleContainer.appendChild(deleteButton);
    newLi.appendChild(articleContainer);

    return newLi;
}

/* 1 Function qui permet de récupérer la valeur de l'input
    2 Bloquer l'input vide
    3 Il y a une reprise de la function createTaskElement 
    avec comme paramètre la variable taskText.
*/
function addTask() {
    const taskText = input.value.trim();

    if (taskText === '') {
        alert("Vous devez écrire quelque chose !");
        return;
    }

    const newTask = createTaskElement(taskText);
    list.appendChild(newTask);
    input.value = "";
}

// Action sur le bouton. Dès le click fait, ça prend la function addTask en paramètre.
button.addEventListener('click', addTask);
// Empêche le form via l'input de recharger la page et appel la function addTask.
formTask.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});
