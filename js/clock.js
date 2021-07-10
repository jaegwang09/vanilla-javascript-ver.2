const clock = document.querySelector("h2#clock")

// function sayHello() {
//   console.log("hello")
// }
// setInterval(sayHello, 1000)
// setTimeout(sayHello, 1000)

// const date = new Date()
// console.log(date.getFullYear())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// console.log("1".padStart(2, "0"))

function getClock() {
  const date = new Date()
  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)