
let temperature = document.getElementById('placetemp');
let weathertype = document.getElementById('weathertype');

function citysubmit() {
    let cityname = document.getElementById('mycity').value;
    // let cityname = "jabalpur";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a5905030ca9c50c3a516d13d5fd3bd59`
    // console.log(url);
    document.getElementById('displaycityname').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('city-error').style.display = 'none'
        console.log(data.main.temp);
        weathertype.innerHTML = data.weather[0].main;
        temp = data.main.temp - 273.15;
        temperature.innerHTML = temp.toFixed(2) + ' °C';
        document.getElementById('weathercard').style.display = 'flex'

    })
        .catch((data) => {
            document.getElementById('city-error').style.display = 'flex'
        })


}