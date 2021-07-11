// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

// function onLoginBtnClick () {
//   console.dir(loginInput)
//   // console.log("click!!!")
//   // console.log(loginInput.value)
//   const username = loginInput.value
//   console.log(username)
//   // if (username === "") {
//   //   alert("please write your name")
//   // } else if (username.length > 15) {
//   //   alert("Your name is too long.")
//   // } else {
//   // }

// }

// // loginButton.addEventListener("click", onLoginBtnClick)

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const id_greeting = document.querySelector("#greeting")
const reset = document.querySelector('.reset')
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault()
  // console.log(event)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  console.log(username)
  // greeting.innerText = `Hello ${username}`
  // greeting.classList.remove(HIDDEN_CLASSNAME)
  paintGreetings(username)
}

function paintGreetings(username) {

  id_greeting.innerText = `Hello! ${username}`
  id_greeting.classList.remove(HIDDEN_CLASSNAME)
  reset.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
console.log(savedUsername)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  // greeting.innerText = `Hello ${savedUsername}`
  // greeting.classList.remove(HIDDEN_CLASSNAME)
  paintGreetings(savedUsername)
}


function handleReset() {
  localStorage.clear(),
  window.location.reload()
}
reset.addEventListener('click', handleReset)