const WEATHER_KEY = "1cc0f0a024374bfbb55234848230407";
const GIF_KEY = "ilQaJ5rWgybaLNZC6mPdTj0vTzBfZfER";

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