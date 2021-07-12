const API_KEY = "45a952f140717a845a01fd9b6bd0a7ef"

function onGeoOk(position) {
  // console.log(position)
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // console.log(lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(url)

  fetch(url).then(response => response.json()).then(data => {
    // console.log(data.name, data.weather[0].main)
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name
    weather.innerText = `${data.weather[0].main} ${data.main.temp}°C /`
    
  })
}
function onGeoError(params) {
  // alert("Can't find you. No weather for you")
  const weather = document.querySelector("#weather span:first-child")
  const city = document.querySelector("#weather span:last-child")
  city.innerText = "None"
  weather.innerText = "None/"
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
