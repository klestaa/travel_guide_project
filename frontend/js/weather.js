// ============================================================
// weather.js — Live weather badges via OpenWeatherMap API
// Note: move the API key to your C# backend to keep it secret
// ============================================================

const WEATHER_API_KEY = '9518812adb4b16a1dcae480a48642706';

async function updateWeather() {
    const badges = document.querySelectorAll('.weather-badge');

    badges.forEach(async (badge) => {
        const city = badge.getAttribute('data-city');
        if (!city) return;

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
            );
            const data = await res.json();

            if (!data.main) {
                badge.style.display = 'none';
                return;
            }

            badge.querySelector('.temp').textContent      = Math.round(data.main.temp) + '°C';
            badge.querySelector('.condition').textContent  = data.weather[0].main;

        } catch (err) {
            badge.style.display = 'none';
        }
    });
}
