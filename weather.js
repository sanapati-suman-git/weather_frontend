document.addEventListener("DOMContentLoaded", () => {
  const loc = document.getElementById("location");
  const weatherbtn = document.getElementById("search");
  const locdis = document.getElementById("weather_of_the_locaion");
  const ciname = document.getElementById("city_name");
  const temp = document.getElementById("temperature");
  const des = document.getElementById("description");
  const error = document.getElementById("error-message");

  const key = "afcf1c0a61320e1d3ce567ea8767bb0a";

  weatherbtn.addEventListener("click", async () => {
    const city = loc.value.trim();
    if (!city) return;

    //it may hrow an error
    //it may be in some other contiinent
    try {
      const weather = await fetchWeather(city);
      weatherDis(weather);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status:${response.status}`);
    }
    const jason = await response.json();
    return jason;
  }
  function weatherDis(data) {
    console.log(data);
    const { name, main, weather } = data;
    ciname.textContent = name;
    temp.textContent = `Temperature: ${main.temp}`;
    des.textContent = `Weather:${weather[0].main}`;

    locdis.classList.remove("hidden");
    error.classList.add("hidden");
  }
  function showError() {
    locdis.classList.remove("hidden");
    error.classList.add("hidden");
  }
});
