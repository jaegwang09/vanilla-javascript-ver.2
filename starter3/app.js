const title = document.getElementById("title")
console.dir(title)
title.innerText = "Got you!"

// const hello = document.getElementsByClassName("hello")
// console.log(hello)

const h = document.querySelector(".hello h1");

function handleClick() {
  //   const currentColor = h.style.color;
  //   let newColor
  //   if(currentColor === "blue") {
  //     newColor = "tomato"
  //   } else {
  //     newColor = "blue"
  //   }
  // h.style.color = newColor

  // const clickedClass = "active"
  // if(h.className === clickedClass) {
  //   h.className = "";
  // } else {
  //   h.className = clickedClass
  // }

  // const clickedClass = "active"
  // if(h.classList.contains(clickedClass)) {
  //   h.classList.remove(clickedClass) = "";
  // } else {
  //   h.classList.add(clickedClass) 
  // }

  const clickedClass = "active"
  h.classList.toggle(clickedClass)
}

// function handleMouseEnter() {
//   h.innerText = "Mouse is here"
// }

// function handleMouseLeave() {
//   h.innerText = "Mouse is gone"
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato"
// }

// function handleWindowCopy() {
//   alert("copier!")
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI")
// }

// function handleWindowOnline() {
//   alert("GOOD JOB")
// }

h.addEventListener('click', handleClick)
// h.addEventListener('mouseenter', handleMouseEnter)
// h.addEventListener("mouseleave", handleMouseLeave)
// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline" , handleWindowOffline)
// window.addEventListener("online" , handleWindowOnline)
