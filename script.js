const apiKey ="75ef91a728235b995fb36381aff6265e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }
    else{
        document.querySelector(".error").style.display ="none"

    }
    var data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"; 

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "img/cloud.png";

    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "img/Rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "img/mist.png";
    }
    document.querySelector(".weather").style.display = "block"

}
searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);


})

