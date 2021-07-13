const quotes = [
  {
    quote: "\"拜啓 わたなべひろこさん やっぱり はずかしくて、 この手紙は 出せません。\"",
    author: "-Love Letter, 1995-",
    image : "Love Letter.jpg"
  },
  {
    quote: "\"Hope is good thing, maybe the best of things. And no good thing ever dies.\"",
    author: "-The Shawshank Redemption, 1994-",
    image : "The Shawshank Redemption.jpeg"
  },
  {
    quote: "\"It's not your fault. It's not your fault.\"",
    author: "-Good Will Hunting, 1997-",
    image : "Good Will Hunting.jpg"
  },
  {
    quote: "\"Good morning, and in case i don't see ya, good afternoon, good evening, and good night.\"",
    author: "-The Truman Show, 1998-",
    image : "The Truman Show.jpg"
  },
  {
    quote: "\"モロ…… 森と人間が爭わずにすむ道はないのか? ほんとにもうとめられないのか?\"",
    author: "-もののけ姬, 1997-",
    image : "もののけ姬.jpeg"
  },
  {
    quote: "\"They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn.\"",
    author: "-The Dark Knight, 2008-",
    image : "The Dark Knight.jpg"
  },
  {
    quote: "\"All is well\"",
    author: "-3 Idiots, 2009-",
    image : "3 Idiots.jpg"
  },
  {
    quote: "\"But every once in awhile, you find someone who's iridescent. And when you do, nothing will ever compare.\"",
    author: "-Flipped, 2010-",
    image : "Flipped.jpg"
  },
  {
    quote: "\"Life is like a box of chocolates, you never know what you are gonna get.\"",
    author: "-Forrest Gump, 1994-",
    image : "Forrest Gump.jpg"
  },
  {
    quote: "\"무서운 꿈을 꾸었느냐?\" \"아닙니다.\" \"슬픈 꿈을 꾸었느냐?\"\"아닙니다. 달콤한 꿈을 꾸었습니다.\" \"그런데 왜 그리 슬피 우느냐?\" 제자는 흐르는 눈물을 닦아내며 나지막이 말했다. \"그 꿈은 이루어질 수 없기 때문입니다.\"",
    author: "-달콤한 인생, 2005-",
    image : "달콤한 인생.jpg"
  },
]

const quote = document.querySelector("#quote div:first-child span")
const author = document.querySelector("#quote div:last-child span")

// console.log(Math.floor(Math.random()*10))

// console.log(quotes[Math.floor(Math.random()*quotes.length)])
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = `${todaysQuote.quote}\n`
author.innerText = todaysQuote.author
const bgImage = document.createElement("img")
bgImage.src =`img/${todaysQuote.image}`
bgImage.className += "bg"
// console.log(bgImage)
const background = document.querySelector('.background')
background.appendChild(bgImage)