let weather = {
  apiKey: "08ce7282cd0064b893a956da861a56e5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const tempc = (temp - 273).toFixed(0);
    console.log(name, description, temp, humidity, speed);
    document.querySelector("h2").innerText = name;
    document.querySelector("h1").innerText = tempc + "°";
    document.querySelector("h3").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity " + humidity + "%";
    document.querySelector(".speed").innerText = "Wind " + speed + "K/M";
  },
  search: function () {
    this.fetchWeather(document.querySelector("input").value);
  },
};

document.querySelector("button").addEventListener("click", function () {
  weather.search();
});

document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});
