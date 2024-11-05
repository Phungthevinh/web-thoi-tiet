const api_id = ''
const temp = document.querySelector('.temp')
const icon = document.querySelector('.icon')
const cityname = document.querySelector('.city-name')
const search_input = document.querySelector('#search-input')
const weather_description = document.querySelector('.weather-description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
search_input.addEventListener('change', (e)=>{
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${api_id}&units=metric&lang=vi`)
   .then( async res=> {
    data = await res.json()
    cityname.innerHTML = data.name
    weather_description.innerHTML = data.weather[0].description 
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` 
    temp.innerHTML = data.main.temp + ' độ'
    humidity.innerHTML = data.main.humidity + '%'
    wind.innerHTML = data.wind.speed + 'Km/h'
   })
})
