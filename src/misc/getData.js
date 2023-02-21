//Get city weather data by city name
async function getData(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
        {
            method: 'GET'
        })
    return response.json();
}

export default getData;