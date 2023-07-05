const WEATHER_KEY = "1cc0f0a024374bfbb55234848230407";
const GIF_KEY = "ilQaJ5rWgybaLNZC6mPdTj0vTzBfZfER";

async function getCityWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${city}&aqi=no`, {mode: "cors"});
    const object = await response.json();
    console.log(object);
}