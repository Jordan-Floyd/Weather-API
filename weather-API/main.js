
const apiKey = '2ed588a584af3df991dcc9250eeb8dac'



const getData = async() =>{
    let city = document.querySelector('#city').value;
    console.log(city)
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    console.log(response.data)
    return response.data
};


const loadData = async() =>{
    let weatherData = await getData();

    
    let max = weatherData.main.temp_max
    console.log(max)
    max = Math.trunc(((max - 273) * 1.8) + 32) + "\xB0" +"f"
    let highTemp = document.createElement('td')
    highTemp.innerHTML = max
    document.getElementById(`table-row-0`).append(highTemp)



    let min = weatherData.main.temp_min
    console.log(min)
    min = Math.trunc(((min - 273) * 1.8) + 32) + "\xB0" +"f"
    let lowTemp = document.createElement('td')
    lowTemp.innerHTML = min
    document.getElementById(`table-row-1`).append(lowTemp)
    


    let forcast = weatherData.weather[0].main
    console.log(forcast)
    let weatherForcast = document.createElement('td')
    weatherForcast.innerHTML = forcast
    document.getElementById(`table-row-2`).append(weatherForcast)



    let humid = weatherData.main.humidity
    console.log(humid)
    let humidity = document.createElement('td')
    humidity.innerHTML = humid
    document.getElementById(`table-row-3`).append(humidity)

};



