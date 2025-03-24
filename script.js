const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your actual API key
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherDataDiv = document.getElementById('weather-data');
const errorMessageDiv = document.getElementById('error-message');

searchButton.addEventListener('click', async () => {
    const city = searchInput.value.trim();
    if (city) {
        errorMessageDiv.innerHTML = ''; // Clear previous error messages
        try {
            const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            const weatherData = {
                temperature: data.main.temp,
                humidity: data.main.humidity,
                conditions: data.weather[0].description,
                icon: data.weather[0].icon,
            };
            renderWeatherData(weatherData);
        } catch (error) {
            console.error(error);
            renderError(error.message);
        }
    } else {
        renderError('Please enter a city name');
    }
});
