/*** VARIABLES DOM ***/

let result = document.getElementById("result")
let search = document.getElementById("searchBtn")
let cityRef = document.getElementById("city")

const getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if (cityValue.length == 0) {
      result.innerHTML = `
      <h3 style= "color: black;">Please enter a city name</h3>
      <img src= "img/lupa.png" width= "75px" style= "margin-top: 10px;">
      `
    }else {
      let API_KEY = "6a604e7ee2c005697546c46d1ba1418b";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}`;

      cityRef.value = "";
      fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let dataName = data.name,
            dataIcon = data.weather[0].icon,
            dataDescription = data.weather[0].description,
            dataMain = data.weather[0].main,
            dataTemp = data.main.temp,
            dataTempMAX = data.main.temp_max,
            dataTempMIN = data.main.temp_min,
            dataPressure = data.main.pressure,
            dataHumidity = data.main.humidity,
            dataCountry = data.sys.country;

            

        console.log(data);
        console.log(dataIcon)
        console.log(data.weather[0].description)
        console.log(data.weather[0].main)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.main.temp_max)
        console.log(data.main.temp_min)
        console.log(data.main.pressure)
        console.log(dataCountry)

        result.innerHTML = `
          <h1 class= "dataName">${dataName}</h1>
          <h4>Country: ${dataCountry}</h4>
          <hr>
          <div class= "dataMainContent">
           <h1 class="main">${dataMain}</h1>
           <h4 class="description">${dataDescription}</h4>
         </div>
          <hr>
          <div class= "iconContent">
           <h1>${Math.round(dataTemp - 273) + "°"}</h1>
           <img src="https://openweathermap.org/img/w/${dataIcon}.png">
          </div>
          <div class="temp-container">
           <div>
              <h4 class="title">min</h4>
              <h4 class="temp">${Math.round(dataTempMIN - 273) + "°"}</h4>
           </div>
           <div>
              <h4 class="title">max</h4>
              <h4 class="temp">${Math.round(dataTempMAX - 273) + "°"}</h4>
           </div>
          </div>
          <hr>
          <h2 style="margin-top: 5px;"> Pressure</h2>
          <h4>${dataPressure} hPa</h4>
          <hr>
          <h2 style="margin-top: 5px;"> Humidity</h2>
          <h4>${dataHumidity} %</h4>
        `
      })
      .catch( () => {
        result.innerHTML = `
        <h2> Oops! We couldn't find information about the city: "${cityValue}"</h2>
        <img src= "https://cdn-icons-png.flaticon.com/512/3262/3262387.png" width= "75px">
        `
      })
    }
}

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather)