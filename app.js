let input = document.querySelector(".header_input");
let form = document.querySelector("form");
let setInputValue = "";
let listTodo = document.querySelector(".list");
let listItem = document.createElement("ul");
let imgAdd = document.querySelector(".header_btn_add");
let imgCircleChecked = `<img id=${"check_circle"} class="circle" src=${"./assets/check_circle.svg"}>`;
let imgCircleUnchecked = `<img id=${"uncheck_circle"} class="circle" src=${"./assets/unchecked_circle.svg"}>`;


input.addEventListener("input", (e) => (setInputValue = e.target.value));
form.addEventListener("submit", addList);
imgAdd.addEventListener("click", addList);
listItem.addEventListener("click", deleteCorbeille);
listItem.addEventListener("click", checkedCircle);

function addList(e) {
    e.preventDefault();
    if (setInputValue != "") {
        let imgDelete = `<img id="${setInputValue}_delete" class="item_delete" src=${"./assets/delete.svg"}>`;
        listItem.innerHTML += `<li id="${setInputValue}">${imgCircleUnchecked}${setInputValue}${imgDelete}</li>`;
        listTodo.appendChild(listItem);
        input.value = "";
    }
}

function deleteCorbeille(e) {
    if (e.target.className == "item_delete") {
        e.target.parentElement.remove("li");
    }
}


function checkedCircle(e) {
    if (e.target.parentElement.children[0].id == "uncheck_circle") {
        e.target.src = `${"./assets/check_circle.svg"}`;
        e.target.id = `${"check_circle"}`;

    } else if(e.target.parentElement.children[0].id == "check_circle") {
        e.target.src = `${"./assets/unchecked_circle.svg"}`;
        e.target.id = `${"uncheck_circle"}`;
    }
}
