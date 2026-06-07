async function updateWeather() {
    const badges = document.querySelectorAll('.weather-badge');

    badges.forEach(async (badge) => {
        const city = badge.getAttribute('data-city');
        if (!city) return;

        try {
            const res = await fetch(`http://localhost:5185/api/weather/${city}`);
            const data = await res.json();
            if (!data) return;

            badge.querySelector('.temp').textContent = Math.round(data.tempC) + '°C';
            badge.querySelector('.condition').textContent = data.condition;

        } catch (err) {
            badge.style.display = 'none';
        }
    });
}