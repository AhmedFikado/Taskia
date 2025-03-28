// Variable ul/button/form/input

const list = document.querySelector(".list");
const button = document.querySelector(".bouton-add");
const formTask = document.querySelector(".add-task");
const input = document.querySelector(".zone-text");
const imgSelect = document.querySelector(".img-select-list");
const select = document.querySelector("select");
const errorMsg = document.querySelector(".error-message");
// Variable qui va nous permettre de compter le nombre de post-it
let taskCount = 0;

// Permet à l'utilisateur de pouvoir intéragir avec le select
imgSelect.addEventListener("click", () => {
	select.style.display = "block";
});
/* Variable pour récupérer la valeur des options du select 
	(visible dans la function createTaskElement avec les if else if)
*/
let selectOption = "";
select.addEventListener("change", (e) => {
	selectOption = e.target.value;
});
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

	if (selectOption === "Urgent") {
		newLi.style.backgroundColor = "#FF8787";
	} else if (selectOption === "To do soon") {
		newLi.style.backgroundColor = "#F1CB85";
	} else if (selectOption === "Can wait") {
		newLi.style.backgroundColor = "#D6F1AA";
	}

	const articleContainer = document.createElement("article");
	articleContainer.classList.add("task-article");

	const pInsideLi = document.createElement("p");
	pInsideLi.classList.add("task-p");
	pInsideLi.innerText = text;

	// Boutons
	const doneButton = createButton("✔", "done-button", () => {
		newLi.classList.toggle("validated"); // Marquer comme validé
	});

	/* Variable qui permet d'utiliser la fonction createButton
     avec les paramètres voulu et permet de supprimer newTask
    */

	const deleteButton = createButton("🗑", "delete-button", () => {
		newLi.remove();
		// Suppression d'un li donc on retire 1 à la variable qui compte les li.
		taskCount--;
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
	/* Ce if permet de vérifier que les li ne dépassent pas 3 post-it. 
	   Sans le return, l'action pourrait être faite. */
	if (taskCount >= 3) {
		const textStop = document.createElement("a");
		textStop.classList.add("textStop");
		errorMsg.appendChild(textStop);
		textStop.textContent =
			"Veuillez vous connecter afin d'utiliser davantage de post-it.";
		textStop.href = "../pages/login.html";
		input.disabled = true;

		// alert("Veuillez vous connecter pour avoir plus de post-it !");
		return;
	}

	if (taskText === "") {
		alert("Vous devez écrire quelque chose !");
		return;
	}
	if (selectOption === "") {
		alert("Vous devez choisir une option dans le menu !");
		return;
	}

	const newTask = createTaskElement(taskText);
	list.appendChild(newTask);
	input.value = "";
	taskCount++;
}

// Action sur le bouton. Dès le click fait, ça prend la function addTask en paramètre.
button.addEventListener("click", addTask);
// Empêche le form via l'input de recharger la page et appel la function addTask.

formTask.addEventListener("submit", (event) => {
	event.preventDefault();
	addTask();
});
