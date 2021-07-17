let locationEl = document.getElementById('location');
let temperatureEl = document.getElementById('temperature');
let condition = document.getElementById('weather');
getLocation();

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
}
  


function showPosition(position)
  {
  fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.2188091ae322e8de0ec25f5304b2c192&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let cityName=(data.address.city);
      let location = data.display_name;
      locationEl.innerText = location;
    

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62bf16fa111bda17a889ef15caef9678`)
        .then(response => response.json())
        .then(values => {
          let temp = ((values.main.temp) - 273.15).toFixed(2);
          let cond = (values.weather[0].main);

          temperatureEl.innerText = temp+' C';
          condition.innerText = cond;
         
      })


    
    })
  
}



