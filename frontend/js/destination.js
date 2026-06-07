
function selectAndDisplay(key) {
    document.getElementById('locationSelect').value = key;
    displayDestination(key);
}

function displayDestination(destinationKey) {
    document.getElementById('content').classList.add('hidden');
    const destination = destinationsData[destinationKey];
    if (!destination) return;

    currentDestination = destinationKey;
    currentGalleryIndex = 0;
    lightboxImages = destination.images;

    // Basic info
    document.getElementById('title').textContent = destination.title;
    document.getElementById('country').textContent = destination.country;
    document.getElementById('rating').textContent = destination.rating;
    document.getElementById('description').textContent = destination.description;
    document.getElementById('bestTime').textContent = destination.bestTime;
    document.getElementById('budget').textContent = destination.budget;
    document.getElementById('budgetLevel').textContent = getBudgetCategory(destination);
    document.getElementById('languages').textContent = '🗣️ ' + destination.languages;
    document.getElementById('currency').textContent = '💱 ' + destination.currency;
    document.getElementById('timezone').textContent = '⏰ ' + destination.timezone;
    document.getElementById('transport').textContent = '✈️ ' + destination.transport;
    document.getElementById('visa').textContent = '🛂 ' + destination.visa;
    document.getElementById('tripDuration').textContent = '📅 ' + destination.tripDuration;
    document.getElementById('safety').textContent = '🛡️ ' + destination.safetyRating;

    // Favorite button state
    const favBtn = document.getElementById('addFavBtn');
    if (favorites.includes(destinationKey)) {
        favBtn.classList.add('is-favorite');
        favBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        favBtn.classList.remove('is-favorite');
        favBtn.innerHTML = '<i class="far fa-heart"></i>';
    }

    // Activities
    const activitiesDiv = document.getElementById('activities');
    activitiesDiv.innerHTML = '';
    destination.activities.forEach(activity => {
        const tag = document.createElement('span');
        tag.className = 'activity-tag';
        tag.textContent = activity;
        activitiesDiv.appendChild(tag);
    });

    // Travel Tips
    const tipsDiv = document.getElementById('travelTips');
    tipsDiv.innerHTML = '';
    destination.tips.forEach(tip => {
        const item = document.createElement('div');
        item.className = 'tip-item';
        item.textContent = tip;
        tipsDiv.appendChild(item);
    });

    // Accommodations
    const accomDiv = document.getElementById('accommodations');
    accomDiv.innerHTML = '';
    destination.accommodations.forEach(accom => {
        const item = document.createElement('div');
        item.className = 'accom-item';
        item.textContent = accom;
        accomDiv.appendChild(item);
    });

    // Highlights
    const highlightsList = document.getElementById('highlights');
    highlightsList.innerHTML = '';
    destination.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });

    // Gallery
    document.getElementById('mainImage').src = destination.images[0];
    document.getElementById('imageCounter').textContent = `1/${destination.images.length}`;
    const thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = '';
    destination.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumb.onclick = () => selectImage(index);
        thumbnails.appendChild(thumb);
    });

    // Supporting sections
    populateRelatedDestinations(destinationKey);
    showFact();
    updateBookingLinks(destination);
    renderAirlineSuggestions(destination);
    updateSelectedCountryInfo(destination);
    focusGlobeOnDestination(destination.coordinates);
    switchTab('overview');

    // Show content
    document.getElementById('content').classList.remove('hidden');
    const relatedSection = document.querySelector('.related-destinations');
    if (relatedSection) relatedSection.style.display = 'block';
    const relatedGrid = document.getElementById('relatedDests');
    if (relatedGrid) relatedGrid.style.display = 'block';

    setTimeout(() => {
        document.getElementById('content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function randomDestination() {
    const keys = Object.keys(destinationsData);
    let randomKey;
    do {
        randomKey = keys[Math.floor(Math.random() * keys.length)];
    } while (randomKey === currentDestination);
    selectAndDisplay(randomKey);
}

function populateRelatedDestinations(current) {
    const region = destinationsData[current].region;
    const related = Object.keys(destinationsData)
        .filter(key => key !== current && destinationsData[key].region === region)
        .slice(0, 3);

    const container = document.getElementById('relatedDests');
    container.innerHTML = '';

    related.forEach(key => {
        const dest = destinationsData[key];
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
            <div class="related-card-inner">
                <img src="${dest.images[0]}" alt="${dest.title}">
                <div class="card-content">
                    <h4>${dest.title}</h4>
                    <button onclick="selectAndDisplay('${key}')">Explore</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function nextImage() {
    if (!currentDestination) return;
    const images = destinationsData[currentDestination].images;
    currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
    updateGalleryImage();
}

function prevImage() {
    if (!currentDestination) return;
    const images = destinationsData[currentDestination].images;
    currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
    updateGalleryImage();
}

function selectImage(index) {
    currentGalleryIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const destination = destinationsData[currentDestination];
    document.getElementById('mainImage').src = destination.images[currentGalleryIndex];
    document.getElementById('imageCounter').textContent = `${currentGalleryIndex + 1}/${destination.images.length}`;
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentGalleryIndex);
    });
}

function openLightbox() {
    document.getElementById('imageLightbox').classList.add('active');
    document.getElementById('lightboxImg').src = lightboxImages[currentGalleryIndex];
}

function closeLightbox() {
    document.getElementById('imageLightbox').classList.remove('active');
}

function nextImageLightbox() {
    currentGalleryIndex = (currentGalleryIndex + 1) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[currentGalleryIndex];
}

function prevImageLightbox() {
    currentGalleryIndex = (currentGalleryIndex - 1 + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[currentGalleryIndex];
}

function showFact() {
    if (!currentDestination) return;
    const destination = destinationsData[currentDestination];
    const randomFact = destination.facts[Math.floor(Math.random() * destination.facts.length)];
    document.getElementById('fact').textContent = randomFact;
}

function getBudgetCategory(destination) {
    const budgetText = destination.budget.toLowerCase();
    if (budgetText.includes('luxury') || budgetText.includes('300+')) return 'Luxury Traveler';
    if (budgetText.includes('<$50') || budgetText.includes('$20') || budgetText.includes('$30')) return 'Budget Friendly';
    return 'Best for Standard Travel';
}

function getDefaultAirlines(region) {
    const airlineMap = {
        Europe: ['Lufthansa', 'British Airways', 'Air France'],
        Asia: ['Singapore Airlines', 'Emirates', 'Qatar Airways'],
        Americas: ['Delta', 'American Airlines', 'Air Canada'],
        Africa: ['Ethiopian Airlines', 'EgyptAir', 'South African Airways'],
        Oceania: ['Qantas', 'Air New Zealand', 'Singapore Airlines']
    };
    return airlineMap[region] || ['Turkish Airlines', 'KLM', 'Virgin Atlantic'];
}

function updateBookingLinks(destination) {
    const query = encodeURIComponent(destination.title);
    document.getElementById('bookingIntro').textContent = `Search hotels, Airbnb stays, and flight deals for ${destination.title}.`;
    document.getElementById('hotelBookingLink').href = `https://www.booking.com/searchresults.html?ss=${query}`;
    document.getElementById('airbnbBookingLink').href = `https://www.airbnb.com/s/${query}/homes`;
    document.getElementById('flightBookingLink').href = `https://www.google.com/search?q=flights+to+${query}`;
}

function renderAirlineSuggestions(destination) {
    const airlines = destination.airlines || getDefaultAirlines(destination.region);
    const suggestions = document.getElementById('airlineSuggestions');
    suggestions.innerHTML = '';
    airlines.forEach(company => {
        const item = document.createElement('div');
        item.className = 'airline-item';
        item.innerHTML = `<i class="fas fa-plane-departure"></i> ${company}`;
        suggestions.appendChild(item);
    });
}

function updateSelectedCountryInfo(destination) {
    const container = document.getElementById('selectedCountry');
    if (container) {
        container.innerHTML = `
            <strong>${destination.title}</strong>
            <p>${destination.country}</p>
            <p>${destination.coordinates.lat.toFixed(2)}°, ${destination.coordinates.lng.toFixed(2)}°</p>
        `;
    }
}

function toggleFavorite() {
    if (!currentDestination) return;
    if (favorites.includes(currentDestination)) {
        favorites = favorites.filter(fav => fav !== currentDestination);
    } else {
        favorites.push(currentDestination);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    displayDestination(currentDestination);
}

function updateFavCount() {
    const totalCount = favorites.length + planToVisit.length;
    const badge = document.getElementById('favCount');
    badge.textContent = totalCount;
    badge.style.display = totalCount === 0 ? 'none' : 'flex';
}

function openFavoritesModal() {
    document.getElementById('favoritesModal').style.display = 'block';
    const list = document.getElementById('favoritesList');
    list.innerHTML = '';

    if (favorites.length === 0) {
        list.innerHTML += '<h3>❤️ Favorites</h3><p style="text-align: center;">No favorites yet!</p>';
    } else {
        list.innerHTML += `<h3>❤️ Favorites (${favorites.length})</h3>`;
        favorites.forEach(fav => {
            const dest = destinationsData[fav];
            const item = document.createElement('div');
            item.className = 'favorite-item';
            item.innerHTML = `
                <img src="${dest.images[0]}" alt="${dest.title}">
                <div class="fav-info">
                    <h4>${dest.title}</h4>
                    <p>${dest.country}</p>
                </div>
                <button class="btn btn-small" onclick="selectAndDisplay('${fav}'); closeFavoritesModal();">View</button>
                <button class="btn btn-small" onclick="removeFavorite('${fav}');" style="background: #ef4444;">Remove</button>
            `;
            list.appendChild(item);
        });
    }

    if (planToVisit.length > 0) {
        list.innerHTML += `<h3 style="margin-top: 25px;">📅 Plan to Visit (${planToVisit.length})</h3>`;
        let totalMinCost = 0;
        let totalMaxCost = 0;

        planToVisit.forEach(dest => {
            const destination = destinationsData[dest];
            const item = document.createElement('div');
            item.className = 'favorite-item';
            item.innerHTML = `
                <img src="${destination.images[0]}" alt="${destination.title}">
                <div class="fav-info">
                    <h4>📅 ${destination.title}</h4>
                    <p>${destination.country}</p>
                    <p class="budget-info">${destination.budget}</p>
                </div>
                <button class="btn btn-small" onclick="selectAndDisplay('${dest}'); closeFavoritesModal();">View</button>
            `;
            list.appendChild(item);

            const budgetMatch = destination.budget.match(/\$(\d+)-(\d+)\/day/);
            if (budgetMatch) {
                totalMinCost += parseInt(budgetMatch[1]);
                totalMaxCost += parseInt(budgetMatch[2]);
            }
        });

        const totalDays = 7;
        list.innerHTML += `
            <div class="total-cost">
                <h4>💰 Estimated Total Trip Cost (7 days)</h4>
                <p>Budget Range: $${(totalMinCost * totalDays).toLocaleString()} - $${(totalMaxCost * totalDays).toLocaleString()}</p>
                <p class="cost-note">* Based on daily averages for ${planToVisit.length} destinations</p>
            </div>
        `;
    }
}

function closeFavoritesModal() {
    document.getElementById('favoritesModal').style.display = 'none';
}

function removeFavorite(key) {
    favorites = favorites.filter(fav => fav !== key);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
    openFavoritesModal();
}

function togglePlanToVisit(key) {
    if (!key) return;
    if (planToVisit.includes(key)) {
        planToVisit = planToVisit.filter(dest => dest !== key);
    } else {
        planToVisit.push(key);
    }
    localStorage.setItem('planToVisit', JSON.stringify(planToVisit));
    updateFavCount();
}

function toggleFavoriteUI(btn) {
    const icon = btn.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    btn.style.color = icon.classList.contains('fas') ? '#ff4757' : 'white';
}
