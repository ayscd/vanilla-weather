function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let city = document.querySelector("#city");
    city.innerHTML = searchInput.value;

    //still needs to add link to API
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);