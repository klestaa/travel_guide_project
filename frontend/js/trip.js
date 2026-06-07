
function openTripCalculator() {
    document.getElementById('tripModal').classList.add('active');
}

function closeTripCalculator() {
    document.getElementById('tripModal').classList.remove('active');
}

// Calculator 
function calculateTrip() {
    const from   = document.getElementById('tripFrom').value;
    const city   = document.getElementById('tripCity').value;
    const people = parseInt(document.getElementById('tripPeople').value);
    const start  = new Date(document.getElementById('tripStart').value);
    const end    = new Date(document.getElementById('tripEnd').value);
    const days   = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (!from || !city || !people || days <= 0) {
        alert('Please fill all fields correctly.');
        return;
    }

    const flightPerPerson = 200;
    const hotelPerNight   = 120;
    const dailyCost       = 50;

    const totalFlights = flightPerPerson * people;
    const totalHotel   = hotelPerNight * days;
    const totalFood    = dailyCost * people * days;
    const total        = totalFlights + totalHotel + totalFood;

    const startStr = document.getElementById('tripStart').value;
    const endStr   = document.getElementById('tripEnd').value;

    const flightLink = `https://www.google.com/travel/flights?q=Flights%20from%20${from}%20to%20${city}%20on%20${startStr}`;
    const hotelLink  = `https://www.booking.com/searchresults.html?ss=${city}&checkin=${startStr}&checkout=${endStr}`;
    const airbnbLink = `https://www.airbnb.com/s/${city}/homes?checkin=${startStr}&checkout=${endStr}`;

    document.getElementById('tripResult').innerHTML = `
        <div class="trip-summary">
            <div class="trip-header">
                <h3>${from} → ${city}</h3>
                <span>${days} days • ${people} traveler${people > 1 ? 's' : ''}</span>
            </div>
            <div class="trip-costs">
                <div class="cost"><span>✈️ Flights</span><strong>$${totalFlights.toLocaleString()}</strong></div>
                <div class="cost"><span>🏨 Hotel</span><strong>$${totalHotel.toLocaleString()}</strong></div>
                <div class="cost"><span>🍽️ Expenses</span><strong>$${totalFood.toLocaleString()}</strong></div>
            </div>
            <div class="trip-total">Total: $${total.toLocaleString()}</div>
            <div class="trip-actions">
                <a href="${flightLink}" target="_blank" class="trip-btn-action">✈️ Flights</a>
                <a href="${hotelLink}"  target="_blank" class="trip-btn-action">🏨 Hotel</a>
                <a href="${airbnbLink}" target="_blank" class="trip-btn-action">🏡 Airbnb</a>
            </div>
        </div>
    `;
}

function setupAutocomplete(inputId, suggestionId) {
    const input = document.getElementById(inputId);
    const box   = document.getElementById(suggestionId);
    if (!input || !box) return;

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        box.innerHTML = '';
        if (!value) return;

        Object.values(destinationsData).forEach(dest => {
            if (dest.title.toLowerCase().includes(value) || dest.country.toLowerCase().includes(value)) {
                const item = document.createElement('div');
                item.textContent = dest.title;
                item.onclick = () => {
                    input.value = dest.title;
                    box.innerHTML = '';
                };
                box.appendChild(item);
            }
        });
    });
}
