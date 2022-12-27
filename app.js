let input = document.querySelector(".header_input");
let form = document.querySelector("form");
let setInputValue = "";
let listTodo = document.querySelector(".list");
let listItem = document.createElement("ul");
let imgAdd = document.querySelector(".header_btn_add");
let imgCircleChecked = `<img class="circle" src=${"./assets/check_circle.svg"}>`;
let imgCircleUnchecked = `<img class="circle" src=${"./assets/unchecked_circle.svg"}>`;


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
    if (e.target.src == "http://127.0.0.1:5500/assets/delete.svg") {
        e.target.parentElement.remove("li");
    }
}


function checkedCircle(e) {
    if (e.target.parentElement.children[0].src && "http://127.0.0.1:5500/assets/unchecked_circle.svg") {
        e.target.src = `${"./assets/check_circle.svg"}`;
        console.log("if");
    } else if(e.target.parentElement.children[0].src && "http://127.0.0.1:5500/assets/check_circle.svg") {
        e.target.src = `${"./assets/unchecked_circle.svg"}`;
        console.log("else if");
    }
    console.log(e.target.parentElement.children[0].src);
}
