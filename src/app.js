function updateTemp(info) {
  let temp = document.querySelector("#real-temp");
  let realTemp = info.data.temperature.current;
  let city = document.querySelector("#city");

  city.innerHTML = info.data.city;
  temp.innerHTML = Math.round(realTemp);
}

function searchInfo(city) {
    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(updateTemp);
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");

    searchInfo(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchInfo("Belo Horizonte");