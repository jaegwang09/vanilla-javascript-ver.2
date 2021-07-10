const a = 5;
const b = 2
console.log(a + b)
console.log(a * b)
console.log(a / b)

const fruits = ["apple", "pineapple", "banana"]
fruits.push("watermelon")
fruits[1] = "strawberry"
console.log(fruits)

const player = {
  name: "Nico",
  points: 10,
  fat: true
}
console.log(player)
console.log(player.name)
player.fat = false
player.favorite = "potato"
player.points = player.points + 10
console.log(player.fat)
console.log(player)

function sayHello(nickname, age) {
  console.log("Hello my name is " + nickname + " and I'm " + age)
}
sayHello("Nico", 20)

function plus(a, b) {
  console.log(a + b)
}
plus(1,2);

const Player = {
  name: 'nico',
  sayHello: function (name) {
    console.log('Hello ' + name + ' nice to meet you')
  }
}
console.log(Player.name)
Player.sayHello('lynn')

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner +2;
}
const krAge = calculateKrAge(age);
console.log(krAge)

