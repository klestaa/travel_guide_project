// ============================================================
// app.js — Global state, initialization, and app entry point
// ============================================================

// ── Global State ────────────────────────────────────────────
let currentGalleryIndex = 0;
let currentDestination = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let planToVisit = JSON.parse(localStorage.getItem('planToVisit')) || [];
let currentTheme = localStorage.getItem('theme') || 'light';
let globeInstance = null;
let globeEarth = null;
let globeMarkers = null;
let raycaster = null;
let mouse = null;
let animationId = null;
let lightboxImages = [];

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme);
    initializeSelect();
    initializeGlobe();
    startFactsTicker();
    populateFeaturedDestinations();
    populateActivityFilters();
    updateFavCount();
    setupNavigation();
    setupThemeToggle();
    setupQuizButton();
    selectAndDisplay('paris');
    updateWeather();

    // Related destinations carousel
    const container = document.getElementById('relatedDests');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    if (nextBtn && prevBtn && container) {
        nextBtn.addEventListener('click', () => container.scrollBy({ left: 320, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => container.scrollBy({ left: -320, behavior: 'smooth' }));
    }

    // Autocomplete for trip calculator
    setupAutocomplete('tripFrom', 'fromSuggestions');
    setupAutocomplete('tripCity', 'toSuggestions');

    // Favorites modal triggers
    document.getElementById('favoritesBtn').addEventListener('click', openFavoritesModal);
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('favoritesModal')) closeFavoritesModal();
    });
});
