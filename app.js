let input = document.querySelector(".header_input");
let setInputValue = "";
let listTodo = document.querySelector(".list");
let listItem = document.createElement('ul');
let imgAdd = document.querySelector(".header_btn_add");
let imgCircleChecked = `<img class="circle" src=${"./assets/check_circle.svg"}>`;


let imgCircleUnchecked = `<img class="circle" src=${"./assets/unchecked_circle.svg"} onclick="checkedCircle()">`;
let imgDelete = `<img id="${setInputValue}" class="item_delete" src=${"./assets/delete.svg"} onclick="deleteCorb()">`;

input.addEventListener("input", (e) => (setInputValue = e.target.value));
input.addEventListener("keydown", addKeyDown);
imgAdd.addEventListener("click", listImgAdd);


function addKeyDown(e) {
    if (e.key == "Enter" && setInputValue != "") {
        listItem.innerHTML += `<li id="${setInputValue}">${imgCircleUnchecked}${setInputValue}${imgDelete}</li>`;
        listTodo.appendChild(listItem);
        imgDelete
        console.log(imgDelete);
        input.value = "";

    }
}
function listImgAdd() {
    if (setInputValue != "") {
        listItem.innerHTML += `<li id="${setInputValue}">${imgCircleUnchecked}${setInputValue}${imgDelete}</li>`;
        listTodo.appendChild(listItem);
        input.value = "";

    }
}
function checkedCircle() {
    listItem.innerHTML = `<li id="${setInputValue}">${imgCircleChecked}${setInputValue}${imgDelete}</li>`;
    listTodo.appendChild(listItem)
}
function deleteCorb() {
console.log(imgDelete);

}