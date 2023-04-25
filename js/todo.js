const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteli = event.target.parentElement;
    deleteli.remove();
    toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id)); // 지울때 데이터베이스도 업데이트로 지워짐/ toDo는 DB안의 객체들
    saveToDos();                                                 // todos의 id는 숫자형, li의 id는 문자형이므로 문자형을 숫자형으로 변환해야 작동   
}                                                                




function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.style.color = "#FFF0F0";
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.border = "none";
    button.style.background = "none";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // toDos가 새로고침 시 지워지는 것을 복원
    parsedToDos.forEach(paintToDo); // 새로고침시 화면에서 지워지는 버튼과 내용을 저장하고 복원, item을 obj로
}

