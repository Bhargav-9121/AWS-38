let todoItemsContainer = document.getElementById("todoItemsContainer");
let addBtn = document.getElementById("addTodoButton");

function onTick(labID) {
    let labelEle = document.getElementById(labID);
    labelEle.classList.toggle("checkThing");
}

function onDel(liID) {
    let liEle = document.getElementById(liID);
    todoItemsContainer.removeChild(liEle);
}

function createAndAppendTodo(todo) {
    let checkID = "checkboxInput" + todo.uniqueNo;
    let labID = "la" + todo.uniqueNo;
    let liID = "li" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = liID;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkID;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput" + todo.uniqueNo);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labID;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

    inputElement.onclick = function() {
        onTick(labID);
    };

    deleteIcon.onclick = function() {
        onDel(liID);
    };
}

let count = 1;

function onBtn() {
    let writtenThing = document.getElementById("todoUserInput");
    let val = writtenThing.value;
    if (val === "") {
        alert("Enter Valid Text");
    } else {
        let newToDo = {
            text: val,
            uniqueNo: count
        };
        count = count + 1;
        createAndAppendTodo(newToDo);
        writtenThing.value = "";
    }
}

addBtn.onclick = function() {
    onBtn();
};