function handleseachersubmit(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInputElement.value;
}

let seacherFormElement = document.querySelector("#search-form");
 seacherFormElement.addEventListener("submit", handleseachersubmit);