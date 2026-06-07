
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
        updateThemeIcon();
    });
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.classList.toggle('fa-moon', currentTheme === 'light');
        icon.classList.toggle('fa-sun', currentTheme === 'dark');
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    const activeTab = document.getElementById(tabId + '-tab');
    if (activeTab) {
        activeTab.style.display = 'block';
        activeTab.classList.add('active');
    }

    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) return;

    for (const [key, dest] of Object.entries(destinationsData)) {
        if (dest.title.toLowerCase().includes(searchTerm) || dest.country.toLowerCase().includes(searchTerm)) {
            displayDestination(key);
            document.getElementById('locationSelect').value = key;
            return;
        }
    }
    alert('No destination found!');
}

function initializeSelect() {
    const select = document.getElementById('locationSelect');
    select.addEventListener('change', function () {
        if (this.value) selectAndDisplay(this.value);
    });
    select.addEventListener('click', function () {
        this.selectedIndex = -1;
    });
}

function populateActivityFilters() {
    const activities = ['Museums', 'Beaches', 'Hiking', 'Food', 'Culture', 'Adventure', 'Shopping'];
    const container = document.getElementById('activityFilters');
    if (!container) return;
    container.innerHTML = '';
    activities.forEach(activity => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = activity;
        btn.onclick = () => filterByActivity(activity);
        container.appendChild(btn);
    });
}

function filterByActivity(activity) {
    const matching = Object.keys(destinationsData).filter(key =>
        destinationsData[key].activities && destinationsData[key].activities.includes(activity)
    );
    if (matching.length > 0) {
        displayDestination(matching[0]);
        document.getElementById('locationSelect').value = matching[0];
    }
}

function filterByBudget(budget) {
    const matching = Object.keys(destinationsData).filter(key => {
        const category = getBudgetCategory(destinationsData[key]);
        if (budget === 'all') return true;
        if (budget === 'budget') return category === 'Budget Friendly';
        if (budget === 'standard') return category === 'Best for Standard Travel';
        if (budget === 'luxury') return category === 'Luxury Traveler';
        return false;
    });
    if (matching.length > 0) {
        displayDestination(matching[0]);
        document.getElementById('locationSelect').value = matching[0];
    }
}

function filterByClimate(climate) {
    const matching = Object.keys(destinationsData).filter(key =>
        climate === 'all' || destinationsData[key].climate === climate
    );
    if (matching.length > 0) {
        displayDestination(matching[0]);
        document.getElementById('locationSelect').value = matching[0];
    }
}

function startFactsTicker() {
    const allFacts = [];
    Object.values(destinationsData).forEach(dest => allFacts.push(...dest.facts));

    function showRandomFact() {
        const tickerFact = document.getElementById('tickerFact');
        if (tickerFact) tickerFact.textContent = allFacts[Math.floor(Math.random() * allFacts.length)];
    }

    showRandomFact();
    setInterval(showRandomFact, 8000);
}

function populateFeaturedDestinations() {
    const featured = ['paris', 'tokyo', 'sydney', 'bali', 'newyork', 'rio'];
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    grid.innerHTML = '';

    featured.forEach(key => {
        const dest = destinationsData[key];
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <img src="${dest.images[0]}" alt="${dest.title}">
            <div class="card-content">
                <h3>${dest.title}</h3>
                <p>${dest.rating}</p>
                <button class="btn btn-small" onclick="selectAndDisplay('${key}')">Explore</button>
            </div>
        `;
        grid.appendChild(card);
    });
}
