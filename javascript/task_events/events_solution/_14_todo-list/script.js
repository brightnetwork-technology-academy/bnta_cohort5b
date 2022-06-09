var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allDeleteButtons = document.querySelectorAll('.delete--button');


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li, inputText, btn;
	li = document.createElement("li");
	inputText = document.createTextNode(input.value);
	btn = document.createElement("button");

	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(inputText);
	li.appendChild(btn);
	ul.appendChild(li);
	
	input.value = "";
	btn.onclick = deleteListItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	enterPressed === event.keyCode === 13;
	if (inputLength() > 0 && enterPressed) {
		createListElement();
	}
}

function deleteListItem(event) {
	var listElement = event.target.parentNode;
	event.target.parentNode.parentNode.removeChild(listElement);

}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


Array.from(allDeleteButtons).forEach(button => {
    button.addEventListener('click', deleteListItem);
});

