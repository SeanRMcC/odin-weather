const WEATHER_KEY = "1cc0f0a024374bfbb55234848230407";
const GIF_KEY = "ilQaJ5rWgybaLNZC6mPdTj0vTzBfZfER";

const searchButton = document.querySelector(".fetch");
const locationInput = document.querySelector("#location")
const city = document.querySelector(".city");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const condition = document.querySelector(".condition");
const temp = document.querySelector(".temp");
const img = document.querySelector(".condition-gif");
const error = document.querySelector(".error");

async function requestCityWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${city}&aqi=no`, {mode: "cors"});
    const object = await response.json();
    return object;
}

async function requestGif(keyword){
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIF_KEY}&s=${keyword}`, {mode: "cors"});
    const object = await response.json();
    const imageURL = object.data.images.original.url;
    return imageURL;
}

searchButton.addEventListener("click", async () => {
    const location = locationInput.value;
    const weatherObject = await requestCityWeather(location);
    if("error" in weatherObject){
        displayError();
    }else{
        updatePage(weatherObject);
    }
});

function updatePage(weatherObject){
    error.classList.remove("error-revealed");
    city.textContent = weatherObject.location.name;
    region.textContent = weatherObject.location.region;
    country.textContent = weatherObject.location.country;
    const currentCondition = weatherObject.current.condition.text
    condition.textContent = currentCondition;
    temp.textContent = `${weatherObject.current.temp_f}°F`;
    requestGif(currentCondition)
        .then(url => img.src = url);
}

function displayError(){
    error.classList.add("error-revealed");
}