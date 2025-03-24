const apiKey = 'YOUR_OPENWEATHER_API_KEY';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherDataDiv = document.getElementById('weather-data');

searchButton.addEventListener('click', async () => {
    const city = searchInput.value.trim();
    if (city) {
        try {
            const response = await fetch(`https:                                                                      
            const data = await response.json();
            const weatherData = {
                temperature: data.main.temp,
                humidity: data.main.humidity,
                conditions: data.weather[0].description,
            };
            renderWeatherData(weatherData);
        } catch (error) {
            console.error(error);
            renderError('Failed to fetch weather data');
        }
    } else {
        renderError('Please enter a city name');
    }
});

function renderWeatherData(weatherData) {
    const html = //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey});
            const data = await response.json();
            const weatherData = {
                temperature: data.main.temp,
                humidity: data.main.humidity,
                conditions: data.weather[0].description,
            };
            renderWeatherData(weatherData);
        } catch (error) {
            console.error(error);
            renderError('Failed to fetch weather data');
        }
    } else {
        renderError('Please enter a city name');
    }
});

function renderWeatherData(weatherData) {
    const html = `
        <h2>Weather in ${searchInput.value}</h2>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Humidity: ${weatherData.humidity}%</p>
        <p>Conditions: ${weatherData.conditions}</p>
    `;
    weatherDataDiv.innerHTML = html;
}

function renderError(message) {
    weatherDataDiv.innerHTML = `function renderError(message) {
    weatherDataDiv.innerHTML = <p style="color: red;">${message}</p>;
}
