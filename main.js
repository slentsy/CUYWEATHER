const APIKEY = "9de8e63dfd1845ecb3862718251307";
const city = document.querySelector(".city").textContent; 

function isNight(hour){
    
}

// alert(city);
function getWeatherByCity(city){
    const url = `http://api.weatherapi.com/v1//forecast.json?key=${APIKEY}&q=${city}`;

    fetch(url)
    .then(response => response.json())
    .then(result => {
        const location = result.location; 

        const localHour = new Date(location.localtime).getHours(); 

        console.log(localHour);

    }).catch(err => {
        console.error(err)
    })

}

window.onload= () =>{
    getWeatherByCity(city);
}
