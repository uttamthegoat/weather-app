let city = document.getElementById("search-btn");
let cityName;
city.onclick = function(){
  try {
    cityName = document.getElementById("search-city").value;
    document.getElementById('cityName').innerHTML=cityName
    apiCall();
}catch(error){
    console.log(error);
  }
};

async function apiCall() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bfea96b9b0msh95e1d05e1cf154ep13966ajsnf990a599dd2a",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  weatherDetails(result);
}
function weatherDetails(result) {
  let humidityValue = document.getElementsByClassName("weather-details");
  humidityValue[0].innerHTML = result.humidity;
  humidityValue[1].innerHTML = result.min_temp;
  humidityValue[2].innerHTML = result.max_temp;
  humidityValue[3].innerHTML = result.temp;
  humidityValue[4].innerHTML = result.wind_degrees;
  humidityValue[5].innerHTML = result.wind_speed;
}
