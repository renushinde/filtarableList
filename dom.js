// Add Items

let form = document.getElementById('addForm'); // form is selected
let itemUl = document.getElementById("items"); // ul is selected
let lis = document.getElementsByClassName("list-group-item");
let buttons = document.getElementsByClassName("btn btn-danger btn-sm float-right delete")
let filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemUl.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

function addItem(e){
	e.preventDefault();
	
// Get input value
let newItem = document.getElementById("item").value; // input value 

// Create new Li, add class
let li = document.createElement("li");
li.className = "list-group-item";

// Add text node with input value to Li and append it to Ul
let newText = document.createTextNode(newItem);
li.appendChild(newText);

// Create a delete button for new li
let deleteButton = document.createElement("button");
deleteButton.className ="btn btn-danger btn-sm float-right delete";
deleteButton.appendChild(document.createTextNode("X"));
//Append button to Li
li.appendChild(deleteButton);

// append li to Ul
itemUl.appendChild(li);
}

// REMOVE ITEM
function removeItem(e){
	if (e.target.classList.contains('delete')) {
		let li = e.target.parentElement;
		itemUl.removeChild(li);
	}
}

// Filter Item List
function filterItem(e) {

	let text = e.target.value.toLowerCase();
	Array.from(lis).forEach(function(element){
		let itemName = element.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			element.style.display = "block";
		} else {
			element.style.display ="none";
		}
	});

}