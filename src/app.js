function displayDate(time) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[time.getDay()];
  let minutes = time.getMinutes();
  let hours = time.getHours();

  if (minutes < 10) {
     minutes = `0${minutes}`;
    }

  return `${day}, ${hours}:${minutes}`;
}


function updateInfo(info) {
  let temp = document.querySelector("#real-temp");
  let realTemp = info.data.temperature.current;
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let date = document.querySelector("#date");
  let time = new Date(info.data.time * 1000);

  temp.innerHTML = Math.round(realTemp);
  city.innerHTML = info.data.city;
  description.innerHTML = info.data.condition.description;
  humidity.innerHTML = `${info.data.temperature.humidity}%`;
  wind.innerHTML = `${info.data.wind.speed}km/h`;
  date.innerHTML = displayDate(time);
}

function searchInfo(city) {
    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(updateInfo);
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");

    searchInfo(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchInfo("Belo Horizonte");