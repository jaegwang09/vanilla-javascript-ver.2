const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
// const toDos = []
let toDos = []
const TODOS_KEY = "todos"

function saveToDos() {
  // localStorage.setItem("todos", toDos)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteToDo(event) {
  // console.log(event.target.parentElement)
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li")
  li.id = newTodoObj.id
  const span = document.createElement("span")
  span.innerText = newTodoObj.text
  const button = document.createElement("button")
  button.innerText = " ❌"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  // console.log(li)
  toDoList.appendChild(li)
}


function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value)
  const newTodo = toDoInput.value
  toDoInput.value =""
  // console.log(newTodo, toDoInput.value)
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  // toDos.push(newTodo)
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)
// console.log(savedToDos)

// function sayhello(item) {
//   console.log("hello"+item)
// }

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  // console.log(parsedToDos)
  // parsedToDos.forEach((item) => console.log(item))
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}

// function sexyFilter(item) {
  // return item !== 3
// }
// [1,2,3,4].filter(sexyFilter)


