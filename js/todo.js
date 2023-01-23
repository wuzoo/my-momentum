const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){ // 어떤 js object이든 array든 string 문자열로 바꿔준다
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
            // toDos 입력을 받을때마다 새로운 문자열로 key "toDos"를
            // 초기화

} // 입력을 받아 toDos에 push 될때마다
// 같은 키 toDos에 value 계속 setting

function deleteToDo(event){
    const li = event.target.parentElement;
    console.dir(event.target.parentElement);
    const deleteId = li.id;
    console.log(typeof deleteId);
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteId));
    saveToDos();
    // console.dir(event.target.parentElement.innerText);
}// button이 click 되는 것을 기다리는 것뿐 어느 button이 클릭되는지
// 알수 없음. 따라서 첫 argument를 이용하자 !

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;
    li.appendChild(span);
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    console.log(parseToDos);
    parseToDos.forEach(paintToDo);
    
    // array의 각 item마다의 function 실행
    // ArrayName.forEach(..);
}