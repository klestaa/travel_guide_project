// Comprehensive Global Destinations Database
console.log("JS LOADED");

const destinationsData = {
    paris: {
        title: "Paris, France 🇫🇷",
        country: "France",
        region: "Europe",
        rating: "⭐⭐⭐⭐⭐ 4.9/5",
        images: ["https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1666283181610-b95ee7e55465?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=800"],
        description: "Paris, the City of Light, captivates visitors with its iconic Eiffel Tower, world-class museums, charming cafés, and romantic ambiance.",
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe", "Versailles Palace"],
        facts: ["The Eiffel Tower can expand 15 cm on hot days!", "Paris has over 1,800 bakeries serving fresh croissants daily.", "The Louvre museum attracts 9 million visitors annually.", "There are more than 300 parks in Paris.", "The Paris catacombs hold the remains of 6 million people."],
        bestTime: "April-June and September-October",
        budget: "Budget: $50-80/day for backpackers, $100-200/day for comfort",
        languages: "French",
        currency: "Euro (EUR)",
        visa: "Schengen Visa for non-EU citizens",
        timezone: "CET (UTC+1)",
        transport: "Charles de Gaulle Airport - 24km from city center",
        activities: ["Museum Visits", "Fine Dining", "Seine Cruises", "Shopping"],
        accommodations: ["Ritz Paris - Luxury", "Le Meurice - Historic", "Paris Perfect - Apartments"],
        tips: ["Learn basic French", "Buy Museum Pass", "Use the Metro", "Visit museums on first Sunday"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    london: {
        title: "London, United Kingdom 🇬🇧",
        country: "United Kingdom",
        region: "Europe",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1561234311-a9e16fa60b25?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1529180184525-78f99adb8e98?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1483972117325-ce4920ff780b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "London blends history and modernity with iconic Big Ben, royal palaces, world-renowned museums.",
        highlights: ["Big Ben", "Tower of London", "Buckingham Palace", "British Museum", "Tower Bridge"],
        facts: ["London is one of the oldest cities, founded by Romans in 43 AD.", "Piccadilly Circus gets 300,000+ visitors daily.", "London Underground is the oldest metro system.", "Over 170 museums, many free to enter.", "The Thames called 'The Silent Highway'."],
        bestTime: "May-September",
        budget: "Budget: $60-90/day, $120-250/day comfort",
        languages: "English",
        currency: "British Pound (GBP)",
        visa: "Visa not required for most",
        timezone: "GMT (UTC+0)",
        transport: "Heathrow, Gatwick, Stansted airports",
        activities: ["Theater Shows", "Museums", "Shopping", "Pub Culture"],
        accommodations: ["The Savoy - Luxury", "Premier Inn - Affordable", "Travelodge - Budget"],
        tips: ["Get Travelcard", "Book theater tickets", "Visit free museums", "Experience pubs"],
        climate: "temperate",
        tripDuration: "4-6 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    tokyo: {
        title: "Tokyo, Japan 🇯🇵",
        country: "Japan",
        region: "Asia",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"],
        description: "Tokyo seamlessly blends cutting-edge technology with ancient traditions.",
        highlights: ["Senso-ji Temple", "Shibuya Crossing", "Meiji Shrine", "Tokyo Tower", "Akihabara"],
        facts: ["Tokyo is the most populous city (37+ million).", "Shibuya Crossing has 2,500-3,000 crossings per cycle.", "Tokyo has more Michelin stars than Paris.", "99% literacy rate - highest globally.", "Metro is one of the most efficient."],
        bestTime: "March-April (Cherry blossoms), October-November",
        budget: "Budget: $50-70/day, $100-200/day mid-range",
        languages: "Japanese",
        currency: "Japanese Yen (JPY)",
        visa: "Visa-free 90 days for many",
        timezone: "JST (UTC+9)",
        transport: "Narita and Haneda airports",
        activities: ["Temple Visits", "Shopping", "Anime & Gaming", "Food Tours"],
        accommodations: ["Park Hyatt Tokyo - Luxury", "Hotel RoyalClassic - 4-star", "Sakura Hotel - Budget"],
        tips: ["Get Suica card", "Learn basic Japanese", "Try conveyor sushi", "Visit temples early"],
        climate: "temperate",
        tripDuration: "4-7 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    sydney: {
        title: "Sydney, Australia 🇦🇺",
        country: "Australia",
        region: "Oceania",
        rating: "⭐⭐⭐⭐⭐ 4.9/5",
        images: ["https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Sydney sparkles with iconic Opera House, stunning harbor, beautiful beaches.",
        highlights: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Blue Mountains", "Taronga Zoo"],
        facts: ["Sydney Opera House is one of the most recognizable structures.", "Bondi Beach is one of Australia's most famous beaches.", "Harbor regularly hosts international sailing events.", "Known for outdoor lifestyle.", "Over 5 million residents."],
        bestTime: "September-November, March-May",
        budget: "Budget: $60-90/day, $120-250/day",
        languages: "English",
        currency: "Australian Dollar (AUD)",
        visa: "Visa required for most",
        timezone: "AEST (UTC+10)",
        transport: "Sydney Airport adjacent to city",
        activities: ["Beach Culture", "Harbor Activities", "Hiking", "Opera & Arts"],
        accommodations: ["Park Hyatt - Luxury", "Hotel Cranbrook - Boutique", "Sydney Beachpackers - Budget"],
        tips: ["Do Bondi to Coogee walk", "Avoid stinger season", "Use Opal card", "Try meat pies"],
        climate: "temperate",
        tripDuration: "4-6 days",
        safetyRating: "Very Safe",
        coordinates: { lat: -33.8688, lng: 151.2093 }
    },
    newyork: {
        title: "New York, USA",
        country: "United States",
        region: "Americas",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", "https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "The City That Never Sleeps dazzles with iconic landmarks, Broadway shows.",
        highlights: ["Statue of Liberty", "Central Park", "Times Square", "Empire State Building", "Brooklyn Bridge"],
        facts: ["NYC has 8.8+ million residents.", "Times Square receives 50+ million annually.", "Central Park is larger than Monaco.", "NYC has 800+ languages spoken.", "Statue of Liberty was a gift from France in 1886."],
        bestTime: "May-September, December",
        budget: "Budget: $70-100/day, $150-350/day",
        languages: "English",
        currency: "US Dollar (USD)",
        visa: "Visa required for many",
        timezone: "EST (UTC-5)",
        transport: "JFK, LaGuardia, Newark airports",
        activities: ["Broadway Shows", "Museums", "Shopping", "Street Food"],
        accommodations: ["Plaza Hotel - Iconic", "Pod Hotel - Affordable", "AirBnB - Apartments"],
        tips: ["Get MetroCard", "Visit museums", "Try street food", "Enjoy free activities"],
        climate: "temperate",
        tripDuration: "4-7 days",
        safetyRating: "Safe",
        coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    bali: {
        title: "Bali, Indonesia",
        country: "Indonesia",
        region: "Asia",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Bali captivates with spiritual essence, stunning beaches, lush rice terraces.",
        highlights: ["Ubud", "Tegallalang Rice Terraces", "Mount Batur", "Tanah Lot Temple", "Beach Clubs"],
        facts: ["Bali has over 1 million Hindu temples.", "Ubud is the spiritual center.", "Rice terraces are UNESCO World Heritage sites.", "Bali welcomes 4+ million tourists annually.", "Unique blend of Hinduism and Buddhism."],
        bestTime: "April-October (dry season)",
        budget: "Budget: $20-40/day, $60-120/comfort",
        languages: "Indonesian",
        currency: "Indonesian Rupiah (IDR)",
        visa: "Visa on arrival for most",
        timezone: "WITA (UTC+8)",
        transport: "Ngurah Rai Airport",
        activities: ["Yoga & Wellness", "Beach Clubs", "Temples", "Water Sports"],
        accommodations: ["Bulgari Resort - Ultra-luxury", "Ubud Village - Mid-range", "Backpacker hostels"],
        tips: ["Respect dress codes", "Learn Hindu traditions", "Mount Batur sunrise", "Street food is cheap"],
        climate: "tropical",
        tripDuration: "4-7 days",
        safetyRating: "Safe",
        coordinates: { lat: -8.6705, lng: 115.2126 }
    },
    rio: {
        title: "Rio de Janeiro, Brazil",
        country: "Brazil",
        region: "Americas",
        rating: "⭐⭐⭐⭐ 4.7/5",
        images: ["https://images.unsplash.com/photo-1581827089368-369c62de2cf6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1626568941852-70bc179e493e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Rio captivates with stunning beaches, Christ the Redeemer, vibrant culture.",
        highlights: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Carnival", "Ipanema"],
        facts: ["Rio hosted 2016 Olympics.", "Cristo Redentor welcomed 2M+ pilgrims annually.", "Copacabana is 4.5 km of sand.", "Carnival attracts 2+ million visitors.", "Surrounded by rainforest."],
        bestTime: "December-March (summer)",
        budget: "Budget: $30-50/day, $70-150/day",
        languages: "Portuguese",
        currency: "Brazilian Real (BRL)",
        visa: "Visa required for most",
        timezone: "BRT (UTC-3)",
        transport: "Galeão International Airport",
        activities: ["Beach Culture", "Carnival", "Hiking", "Nightlife"],
        accommodations: ["Copacabana Palace - Luxury", "Marina Palace - Mid-range", "Selina - Hostels"],
        tips: ["Protect valuables", "Carnival far ahead", "Beautiful beaches", "Try Cachaça"],
        climate: "tropical",
        tripDuration: "4-6 days",
        safetyRating: "Moderate",
        coordinates: { lat: -22.9068, lng: -43.1729 }
    },
    dubai: {
        title: "Dubai, UAE",
        country: "United Arab Emirates",
        region: "Asia",
        rating: "⭐⭐⭐⭐ 4.5/5",
        images: ["https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?q=80&w=637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661916762370-4768aa1fc4c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Dubai showcases ultra-modern architecture, luxury shopping, desert adventures.",
        highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari", "Gold Souk"],
        facts: ["Burj Khalifa is 828 meters tall.", "Built on oil wealth from 1966.", "Palm Jumeirah visible from space.", "14+ million tourists annually.", "No natural rivers or lakes."],
        bestTime: "October-April",
        budget: "Budget: $60-90/day, $150-300/day",
        languages: "Arabic, English",
        currency: "UAE Dirham (AED)",
        visa: "Visa-free 30 days",
        timezone: "GST (UTC+4)",
        transport: "Dubai International Airport",
        activities: ["Shopping", "Desert Safari", "Beach", "Architecture"],
        accommodations: ["Burj Al Arab - Luxury", "Atlantis The Palm", "Rove Hotels - Budget"],
        tips: ["Dress modestly", "Rent a car", "Avoid Ramadan eating", "Book safari ahead"],
        climate: "desert",
        tripDuration: "2-4 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 25.2048, lng: 55.2708 }
    },
    barcelona: {
        title: "Barcelona, Spain",
        country: "Spain",
        region: "Europe",
        rating: "⭐⭐⭐⭐⭐ 4.7/5",
        images: ["https://media.istockphoto.com/id/2155616655/photo/blooming-spring-park-in-barcelona-city-centre-spain.jpg?s=612x612&w=0&k=20&c=AgXd7x2E7lvP7v6ST4aN09Uaeevt2alkeQD5Qv6NtBE=", "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Barcelona enchants with unique architecture, vibrant culture, coastal beauty.",
        highlights: ["Sagrada Familia", "Park Güell", "Gothic Quarter", "Las Ramblas", "Montjuïc"],
        facts: ["Sagrada Familia under construction 140+ years.", "Hosted Olympics 1992.", "32+ million tourists annually.", "FC Barcelona very successful.", "Catalan is co-official language."],
        bestTime: "April-May, September-October",
        budget: "Budget: $40-70/day, $100-180/day",
        languages: "Catalan, Spanish",
        currency: "Euro (EUR)",
        visa: "Schengen Visa required",
        timezone: "CET (UTC+1)",
        transport: "Barcelona-El Prat Airport",
        activities: ["Architecture Tours", "Beaches", "Museums", "Food"],
        accommodations: ["Mandarin Oriental - Luxury", "Mercer Hotel - Boutique", "Kabul Hostel - Budget"],
        tips: ["Book Gaudí sites ahead", "Use metro", "Try tapas", "Avoid pickpockets"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Safe",
        coordinates: { lat: 41.3874, lng: 2.1686 }
    },
    rome: {
        title: "Rome, Italy",
        country: "Italy",
        region: "Europe",
        rating: "⭐⭐⭐⭐⭐ 4.9/5",
        images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "The Eternal City showcases 3,000 years of history with ancient ruins.",
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Pantheon"],
        facts: ["Founded 753 BC.", "Trevi Fountain receives 1M+ coins yearly.", "Vatican City smallest state.", "280 churches, 150 fountains.", "Colosseum held 50-80K spectators."],
        bestTime: "April-May, September-October",
        budget: "Budget: $50-80/day, $100-200/day",
        languages: "Italian",
        currency: "Euro (EUR)",
        visa: "Schengen Visa required",
        timezone: "CET (UTC+1)",
        transport: "Fiumicino and Ciampino",
        activities: ["Sightseeing", "Museums", "Food Tours", "Vatican"],
        accommodations: ["Hotel de Russie - Luxury", "Hotel Artemide - 4-star", "Arco Della Pace - Budget"],
        tips: ["Book Vatican ahead", "Walk at night", "Try gelato", "Free first Sunday"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Safe",
        coordinates: { lat: 41.9028, lng: 12.4964 }
    },
    amsterdam: {
        title: "Amsterdam, Netherlands",
        country: "Netherlands",
        region: "Europe",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661964194420-d1237f0b7bd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Amsterdam charms with picturesque canals, historic architecture.",
        highlights: ["Canal Ring", "Anne Frank House", "Van Gogh Museum", "Rijksmuseum", "Dam Square"],
        facts: ["There are 1,281 bridges, Around 90 islands.", "900k+ bicycles are used.", "Built on 11M wooden piles.", "2M+ tourists.", "UNESCO World Heritage."],
        bestTime: "April-May, September-October",
        budget: "Budget: $50-75/day, $110-200/day",
        languages: "Dutch, English",
        currency: "Euro (EUR)",
        visa: "Schengen Visa",
        timezone: "CET (UTC+1)",
        transport: "Amsterdam Airport Schiphol",
        activities: ["Canal Tours", "Museums", "Cycling"],
        accommodations: ["Pulitzer - Luxury", "Moxy Amsterdam", "ClinkNOORD - Budget"],
        tips: ["Rent bicycle", "Tulip season April", "Anne Frank early arrival"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 52.3676, lng: 4.9041 }
    },
    bangkok: {
        title: "Bangkok, Thailand",
        country: "Thailand",
        region: "Asia",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1693149386423-2e4e264712e5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661963188068-1bac46e28727?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Bangkok throbs with energy, temples, markets, street food.",
        highlights: ["Grand Palace", "Wat Arun", "Floating Markets", "Lumphini Park", "Chatuchak Market"],
        facts: ["Has 400+ temples.", "Sinks 2-3cm annually.", "Street food famous.", "Grand Palace since 1782.", "Most visited in Asia."],
        bestTime: "November-February",
        budget: "Budget: $20-35/day, $60-120/day",
        languages: "Thai",
        currency: "Thai Baht (THB)",
        visa: "Visa on arrival",
        timezone: "ICT (UTC+7)",
        transport: "Suvarnabhumi Airport",
        activities: ["Temples", "Markets", "Food"],
        accommodations: ["Mandarin Oriental", "NapPark Boutique", "NapPark Hostel"],
        tips: ["Respect Royal Family", "Learn Sawasdee", "Street food safe"],
        climate: "tropical",
        tripDuration: "3-5 days",
        safetyRating: "Safe",
        coordinates: { lat: 13.7563, lng: 100.5018 }
    },
    singapore: {
        title: "Singapore",
        country: "Singapore",
        region: "Asia",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1697729420937-0ecb0ddb6e85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Singapore combines culture, architecture, infrastructure.",
        highlights: ["Marina Bay Sands", "Gardens", "Sentosa Island", "Chinatown", "Orchard Road"],
        facts: ["Busiest port.", "Multicultural blend.", "Most expensive cities.", "Supertrees 25-16m.", "Cleanest countries."],
        bestTime: "February, December-January",
        budget: "Budget: $50-80/day, $120-250/day",
        languages: "English, Mandarin, Malay, Tamil",
        currency: "Singapore Dollar (SGD)",
        visa: "Visa-free 30-90 days",
        timezone: "SGT (UTC+8)",
        transport: "Changi Airport",
        activities: ["Shopping", "Museums", "Food", "Gardens"],
        accommodations: ["Marina Bay Sands", "Pan Pacific", "HiJack Hostel"],
        tips: ["MRT efficient", "No gum illegal", "Food courts cheap"],
        climate: "tropical",
        tripDuration: "2-3 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    seoul: {
        title: "Seoul, South Korea",
        country: "South Korea",
        region: "Asia",
        rating: "⭐⭐⭐⭐ 4.7/5",
        images: ["https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1597552661064-af143a5f3bee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661885493074-e18964497278?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Seoul pulses with K-pop, palaces, technology, cuisine.",
        highlights: ["Gyeongbokgung Palace", "Myeongdong", "Han River Parks", "Insadong", "Gangnam"],
        facts: ["5G widespread.", "Fastest internet.", "K-pop global.", "Busiest subway.", "Modern & traditional."],
        bestTime: "March-May, September-November",
        budget: "Budget: $40-70/day, $100-180/day",
        languages: "Korean",
        currency: "South Korean Won (KRW)",
        visa: "Visa-free 90 days",
        timezone: "KST (UTC+9)",
        transport: "Incheon International",
        activities: ["K-pop", "Palaces", "Tech", "Food"],
        accommodations: ["Shilla Seoul", "Hotel Lotte", "Korea House"],
        tips: ["Metro best", "Try BBQ", "Karaoke popular"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 37.5665, lng: 126.9780 }
    },
    lasvegas: {
        title: "Las Vegas, USA",
        country: "United States",
        region: "Americas",
        rating: "⭐⭐⭐⭐ 4.5/5",
        images: ["https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1694475248378-71aa70d723eb?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Las Vegas glitters with casino, shows, desert.",
        highlights: ["The Strip", "Bellagio Fountains", "Fremont Street", "Red Rock Canyon"],
        facts: ["Strip 4.2 miles.", "40M+ visitors.", "24/7 city.", "Never sleeps."],
        bestTime: "October-April",
        budget: "Budget: $50-80/day, $100-300+/day",
        languages: "English",
        currency: "US Dollar (USD)",
        visa: "ESTA for many",
        timezone: "PST (UTC-7)",
        transport: "Harry Reid International",
        activities: ["Casinos", "Shows", "Desert"],
        accommodations: ["Bellagio", "Cosmopolitan", "Downtown Grand"],
        tips: ["Free shows", "Set budget", "Red Rock trip"],
        climate: "desert",
        tripDuration: "2-4 days",
        safetyRating: "Safe",
        coordinates: { lat: 36.1699, lng: -115.1398 }
    },
    toronto: {
        title: "Toronto, Canada",
        country: "Canada",
        region: "Americas",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1542704792-e30dac463c90?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1546614409-810f10108b74?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Toronto offers diversity, CN Tower, cuisine.",
        highlights: ["CN Tower", "Niagara Falls", "Market", "Islands"],
        facts: ["Most multicultural.", "CN Tower 32 years.", "Theater district.", "Niagara 30km away."],
        bestTime: "May-September",
        budget: "Budget: $60-90/day, $120-250/day",
        languages: "English, French",
        currency: "Canadian Dollar (CAD)",
        visa: "eTA required",
        timezone: "EST (UTC-5)",
        transport: "Pearson International",
        activities: ["Tower", "Niagara", "Markets"],
        accommodations: ["St. Regis", "Fairmont", "HI Hostel"],
        tips: ["Tower sunset", "Niagara day trip", "Food diverse"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 43.6532, lng: -79.3832 }
    },
    mexico: {
        title: "Mexico City, Mexico",
        country: "Mexico",
        region: "Americas",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://images.unsplash.com/photo-1601585144584-2a53183be14c?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1521216774850-01bc1c5fe0da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1570663899874-a049e53007d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Mexico City enchants with ruins, museums, murals.",
        highlights: ["Templo Mayor", "Palacio Nacional", "Frida Kahlo", "Xochimilco"],
        facts: ["Tenochtitlan site.", "Oldest capital.", "Most UNESCO sites.", "2,250m altitude."],
        bestTime: "October-April",
        budget: "Budget: $25-40/day, $60-120/day",
        languages: "Spanish",
        currency: "Mexican Peso (MXN)",
        visa: "Visa-free 180 days",
        timezone: "CST (UTC-6)",
        transport: "Mexico City International",
        activities: ["Archaeological", "Museums", "Food"],
        accommodations: ["Gran Hotel", "Condesa df", "Monkey Hostel"],
        tips: ["Street food safe", "Free Sundays", "Altitude easy"],
        climate: "temperate",
        tripDuration: "4-6 days",
        safetyRating: "Moderate",
        coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    machu: {
        title: "Machu Picchu, Peru",
        country: "Peru",
        region: "Americas",
        rating: "⭐⭐⭐⭐⭐ 5.0/5",
        images: ["https://plus.unsplash.com/premium_photo-1694475501155-2f344cea9eb3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1543385426-191664295b58?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://media.istockphoto.com/id/2208276723/photo/traveler-admiring-machu-picchu-ruins-on-a-sunny-day.jpg?s=612x612&w=is&k=20&c=xj1IMh-1d51th9oLYByO-wiwi34GU6Mm_gNefrhnkpM="],
        description: "Machu Picchu is iconic ancient Incan citadel.",
        highlights: ["Citadel", "Sacred Valley", "Inca Trail", "Cusco"],
        facts: ["2,430m elevation.", "Built 1450.", "New Seven Wonders.", "1M+ visitors.", "No mortar/nails."],
        bestTime: "April-May, September-October",
        budget: "Budget: $30-50/day, $70-150/day",
        languages: "Spanish, Quechua",
        currency: "Peruvian Nuevo Sol (PEN)",
        visa: "Visa-free for many",
        timezone: "PET (UTC-5)",
        transport: "Cusco International",
        activities: ["Trekking", "Archaeological"],
        accommodations: ["Sacred Valley lodges", "Cusco hotels"],
        tips: ["Acclimatize Cusco", "Book Inca Trail ahead", "Train scenic"],
        climate: "alpine",
        tripDuration: "4-7 days",
        safetyRating: "Safe",
        coordinates: { lat: -13.1631, lng: -72.5454 }
    },
    cairo: {
        title: "Cairo, Egypt",
        country: "Egypt",
        region: "Africa",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fpcm8lMjBlZ3lwdHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1710211288826-b7df3ab71588?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Cairo offers pyramids, museums, bazaars.",
        highlights: ["Great Pyramids", "Egyptian Museum", "Khan Bazaar", "Sphinx"],
        facts: ["Founded 969 AD.", "Pyramids 4,500+ years.", "120K+ artifacts.", "20M+ residents."],
        bestTime: "October-April",
        budget: "Budget: $20-35/day, $60-120/day",
        languages: "Arabic",
        currency: "Egyptian Pound (EGP)",
        visa: "Visa on arrival",
        timezone: "EET (UTC+2)",
        transport: "Cairo International",
        activities: ["Pyramids", "Museums", "Bazaars"],
        accommodations: ["Sofitel Cairo", "Hilton", "Backpackers"],
        tips: ["Early pyramids", "Bazaar bargain", "Nile cruise"],
        climate: "desert",
        tripDuration: "3-5 days",
        safetyRating: "Moderate",
        coordinates: { lat: 30.0444, lng: 31.2357 }
    },
    albania: {
        title: "Tirana, Albania",
        country: "Albania",
        region: "Europe",
        rating: "⭐⭐⭐⭐ 4.5/5",
        images: ["https://images.unsplash.com/photo-1699455309844-788aec77fe8a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1632353913765-9b56b7b4bd55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1700828831523-8010342abec7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGlyYW5hfGVufDB8fDB8fHww"],
        description: "Tirana is the capital and largest city of Albania.",
        highlights: ["National History Museum", "Et'hem Bey Mosque", "Skanderbeg Square", "Zallkod Park"],
        facts: ["Founded 1614.", "Population 300,000+.", "Albanian language.", "Balkan country."],
        bestTime: "April-May, September-November",
        budget: "Budget: $25-40/day, $70-140/day",
        languages: "Albanian",
        currency: "Albanian Lek (ALL)",
        visa: "E-visa required",
       timezone: "CET (UTC+1) / CEST (UTC+2)",
        transport: "Tirana International Airport Nënë Tereza",
        activities: ["Bunk'Art", "Skanderbeg Square", "Dajti Mountain Cable Car"],
        accommodations: ["The Plaza Tirana", "Rogner Hotel", "Lot Boutique Hotel"],
        tips: ["Cash is king (Lek)", "Try Byrek and Raki", "Xhiro (evening walk)"],
        climate: "mediterranean",
        tripDuration: "7-10 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 41.3275, lng: 19.8187 }
    },
    cape: {
        title: "Cape Town, South Africa",
        country: "South Africa",
        region: "Africa",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1581596326248-f55ac7852760?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1697730039730-102912a08e70?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1606799955515-85468ee78c26?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Cape Town has Table Mountain, beaches, wine.",
        highlights: ["Table Mountain", "Cape Point", "Robben Island", "Winelands"],
        facts: ["Beautiful city.", "New Seven Wonders.", "Mandela 18 years.", "Two oceans."],
        bestTime: "December-February",
        budget: "Budget: $30-50/day, $80-160/day",
        languages: "English, Afrikaans",
        currency: "South African Rand (ZAR)",
        visa: "Visa-free 90 days",
        timezone: "SAST (UTC+2)",
        transport: "Cape Town International",
        activities: ["Hiking", "Beaches", "Wine Tours"],
        accommodations: ["Twelve Apostles", "Belmond", "The Backpack"],
        tips: ["Table Mountain early", "Winelands", "Penguin beach"],
        climate: "temperate",
        tripDuration: "4-6 days",
        safetyRating: "Safe",
        coordinates: { lat: -33.9249, lng: 18.4241 }
    },
    nairobi: {
        title: "Nairobi, Kenya",
        country: "Kenya",
        region: "Africa",
        rating: "⭐⭐⭐⭐ 4.5/5",
        images: ["https://plus.unsplash.com/premium_photo-1697729856847-ae499843242f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1596005554384-d293674c91d7?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Nairobi is safari gateway with wildlife.",
        highlights: ["National Park", "Giraffe Centre", "Museum", "Mount Kenya"],
        facts: ["Founded 1899.", "Safari gateway.", "Wildlife city.", "Tech hub."],
        bestTime: "January-February, July-August",
        budget: "Budget: $20-35/day, $60-120/day",
        languages: "English, Swahili",
        currency: "Kenyan Shilling (KES)",
        visa: "E-visa or arrival",
        timezone: "EAT (UTC+3)",
        transport: "Jomo Kenyatta International",
        activities: ["Safari", "Wildlife"],
        accommodations: ["Safari Park", "Serena", "Ibis Styles"],
        tips: ["Big Five", "Dry seasons", "Learn Swahili"],
        climate: "subtropical",
        tripDuration: "5-10 days",
        safetyRating: "Moderate",
        coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    marrakech: {
        title: "Marrakech, Morocco",
        country: "Morocco",
        region: "Africa",
        rating: "⭐⭐⭐⭐ 4.7/5",
        images: ["https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Marrakech has medinas, palaces, desert.",
        highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Agafay Desert"],
        facts: ["Red City.", "Founded 1062.", "UNESCO heritage."],
        bestTime: "October-April",
        budget: "Budget: $20-35/day, $60-120/day",
        languages: "Arabic, French",
        currency: "Moroccan Dirham (MAD)",
        visa: "Visa-free 90 days",
        timezone: "WET (UTC+0)",
        transport: "Menara Airport",
        activities: ["Markets", "Desert", "Palaces"],
        accommodations: ["La Mamounia", "Riad Dar", "Equity Point"],
        tips: ["Riads stay", "Haggle medina", "Desert sunset"],
        climate: "desert",
        tripDuration: "3-5 days",
        safetyRating: "Safe",
        coordinates: { lat: 31.6295, lng: -8.0088 }
    },
    newzealand: {
        title: "Auckland, New Zealand",
        country: "New Zealand",
        region: "Oceania",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1508971607899-a238a095d417?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Auckland combines urban with nature.",
        highlights: ["Sky Tower", "Harbour", "Rangitoto Island"],
        facts: ["50 volcanoes.", "Water surrounded.", "Sailing.", "Best ranked."],
        bestTime: "December-February",
        budget: "Budget: $50-80/day, $120-220/day",
        languages: "English, Māori",
        currency: "New Zealand Dollar (NZD)",
        visa: "Visa-free or eTA",
        timezone: "NZDT (UTC+13)",
        transport: "Auckland Airport",
        activities: ["Hiking", "Water", "Museums"],
        accommodations: ["Hilton", "Crowne Plaza", "Base"], 
        tips: ["Sky Tower", "Island hiking", "Sailing"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: -37.0082, lng: 174.7850 }
    },
    fiji: {
        title: "Fiji",
        country: "Fiji",
        region: "Oceania",
        rating: "⭐⭐⭐⭐⭐ 4.8/5",
        images: ["https://images.unsplash.com/photo-1655719647300-5142977bfa79?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1575000898743-9128b75a89b7?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1717361054046-eda52d552736?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Fiji is tropical paradise with beaches.",
        highlights: ["Islands", "Reefs", "Beaches"],
        facts: ["330+ islands.", "Diving destination.", "Endemic species."],
        bestTime: "May-October",
        budget: "Budget: $40-70/day, $100-250/day",
        languages: "English, Fijian",
        currency: "Fijian Dollar (FJD)",
        visa: "Visa-free 4 months",
        timezone: "FJT (UTC+12)",
        transport: "Nadi International",
        activities: ["Diving", "Snorkeling", "Islands"],
        accommodations: ["Likuliku", "Malolo Island", "Aqua Viti"],
        tips: ["Respect customs", "Kava ceremony", "Island hopping"],
        climate: "tropical",
        tripDuration: "4-7 days",
        safetyRating: "Safe",
        coordinates: { lat: -17.7134, lng: 178.0650 }
    },
    geneva: {
        title: "Geneva, Switzerland",
        country: "Switzerland",
        region: "Europe",
        rating: "⭐⭐⭐⭐ 4.5/5",
        images: ["https://images.unsplash.com/photo-1726334570141-e121f65d5140?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1571296224867-b67f50725c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1719463864766-3a9ce7a24db9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Geneva offers lakes, mountains, diplomacy.",
        highlights: ["Jet d'Eau", "Lake", "Old Town"],
        facts: ["200+ organizations.", "140m fountain.", "Neutral.", "Museums."],
        bestTime: "June-September, December",
        budget: "Budget: $80-120/day, $200-400/day",
        languages: "French, German",
        currency: "Swiss Franc (CHF)",
        visa: "Schengen",
        timezone: "CET (UTC+1)",
        transport: "Geneva Airport",
        activities: ["Museums", "Hiking", "Walks"],
        accommodations: ["Mandarin Oriental", "Starling", "St Giles"],
        tips: ["Lake walks", "Christmas markets", "Mont Blanc"],
        climate: "alpine",
        tripDuration: "2-3 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 46.2044, lng: 6.1432 }
    },
    prague: {
        title: "Prague, Czech Republic",
        country: "Czech Republic",
        region: "Europe",
        rating: "⭐⭐⭐⭐⭐ 4.7/5",
        images: ["https://images.unsplash.com/photo-1458150945447-7fb764c11a92?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1619558846792-1fc47446bbd7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1689248943653-37ab70151a9f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Prague charms with cobbled streets, gothic architecture, and castle views.",
        highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock", "Vltava River"],
        facts: ["Prague is known as the City of a Hundred Spires.", "The astronomic clock is over 600 years old.", "The city was once part of the Austro-Hungarian Empire.", "Czech beer is famous worldwide.", "The Prague metro is one of the safest in Europe."],
        bestTime: "April-May, September-October",
        budget: "Budget: $40-70/day, $90-160/day",
        languages: "Czech",
        currency: "Czech Koruna (CZK)",
        visa: "Schengen",
        timezone: "CET (UTC+1)",
        transport: "Václav Havel Airport",
        activities: ["Castle tours", "River cruises", "Nightlife", "Architecture"],
        accommodations: ["Four Seasons", "Grandior Hotel", "Mosaic House"],
        tips: ["Walk the Old Town", "Try local beer", "Visit early mornings"],
        climate: "temperate",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 50.0755, lng: 14.4378 }
    },
    lisbon: {
        title: "Lisbon, Portugal",
        country: "Portugal",
        region: "Europe",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://images.unsplash.com/photo-1558102400-72da9fdbecae?q=80&w=796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1578859651203-c7126a106b59?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Lisbon dazzles with pastel buildings, historic trams, and Atlantic views.",
        highlights: ["Belém Tower", "Alfama", "Tram 28", "Jerónimos Monastery", "Time Out Market"],
        facts: ["Lisbon is older than Rome by 500 years.", "It is built on seven hills.", "The city has one of Europe's oldest bookstores.", "Fado music is a UNESCO heritage.", "Lisbon is known for its custard tarts."],
        bestTime: "March-May, September-October",
        budget: "Budget: $35-60/day, $80-140/day",
        languages: "Portuguese",
        currency: "Euro (EUR)",
        visa: "Schengen",
        timezone: "WET (UTC+0)",
        transport: "Humberto Delgado Airport",
        activities: ["Food tours", "Historic neighborhoods", "Lisbon nightlife"],
        accommodations: ["Bairro Alto Hotel", "LX Boutique", "Goodmorning Solo"],
        tips: ["Ride Tram 28", "Try pastéis de nata", "Wear comfortable shoes"],
        climate: "Mediterranean",
        tripDuration: "3-5 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 38.7223, lng: -9.1393 }
    },
    reykjavik: {
        title: "Reykjavik, Iceland",
        country: "Iceland",
        region: "Europe",
        rating: "⭐⭐⭐⭐ 4.7/5",
        images: ["https://images.unsplash.com/photo-1606130503037-6a8ef67c9d2d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1518156959312-07a5380c1261?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1462993340984-49bd9e0f32dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Reykjavik is a gateway to glaciers, northern lights, and volcanic landscapes.",
        highlights: ["Blue Lagoon", "Golden Circle", "Hallgrímskirkja", "Aurora watching", "Geothermal pools"],
        facts: ["Iceland is one of the cleanest countries.", "Reykjavik has more hot springs than taxis.", "Nordic languages influence place names.", "Midnight sun appears in summer."],
        bestTime: "June-August, November-March",
        budget: "Budget: $80-120/day, $180-300/day",
        languages: "Icelandic",
        currency: "Icelandic Króna (ISK)",
        visa: "Schengen",
        timezone: "GMT (UTC+0)",
        transport: "Keflavík International Airport",
        activities: ["Northern Lights", "Hiking", "Glacier tours", "Hot springs"],
        accommodations: ["Hotel Borg", "CenterHotel", "Reykjavik Downtown Hostel"],
        tips: ["Book tours in advance", "Dress warmly", "Rent a car"],
        climate: "subarctic",
        tripDuration: "3-6 days",
        safetyRating: "Very Safe",
        coordinates: { lat: 64.1466, lng: -21.9426 }
    },
    buenosaires: {
        title: "Buenos Aires, Argentina",
        country: "Argentina",
        region: "Americas",
        rating: "⭐⭐⭐⭐ 4.6/5",
        images: ["https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1593014109521-48ea09f22592?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1694475023535-c423350c1d69?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        description: "Buenos Aires offers tango rhythms, vibrant neighborhoods, and world-class steak.",
        highlights: ["La Boca", "Recoleta", "Plaza de Mayo", "Teatro Colón", "Palermo"],
        facts: ["Buenos Aires is called the Paris of South America.", "The city has 300+ parks.", "Tango originated here.", "It has one of the largest bookstores in the world."],
        bestTime: "September-November, March-May",
        budget: "Budget: $30-55/day, $80-150/day",
        languages: "Spanish",
        currency: "Argentine Peso (ARS)",
        visa: "Visa-free for many",
        timezone: "ART (UTC-3)",
        transport: "Ministro Pistarini International",
        activities: ["Tango shows", "Food tours", "Cultural museums"],
        accommodations: ["Alvear Palace", "Hotel Madero", "Milhouse"],
        tips: ["Try empanadas", "Take tango lessons", "Use local transport"],
        climate: "temperate",
        tripDuration: "4-6 days",
        safetyRating: "Moderate",
        coordinates: { lat: -34.6037, lng: -58.3816 }
    }
};

// Global variables
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
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
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("relatedDests");

  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  if (nextBtn && prevBtn && container) {
    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: 320, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -320, behavior: "smooth" });
    });
  }
});

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

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

function initializeSelect() {
    const select = document.getElementById('locationSelect');
    select.addEventListener('change', function() {
        if (this.value) {
            selectAndDisplay(this.value);
        }
    });

    // allow re-selecting same option
    select.addEventListener('click', function() {
        this.selectedIndex = -1;
    });
}

function displayDestination(destinationKey) {
    document.getElementById('content').classList.add('hidden');
    const destination = destinationsData[destinationKey];
    if (!destination) return;

    currentDestination = destinationKey;
    currentGalleryIndex = 0;
    lightboxImages = destination.images;

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

    // Update favorite button
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

    // Related destinations
    populateRelatedDestinations(destinationKey);
    showFact();
    updateBookingLinks(destination);
    renderAirlineSuggestions(destination);
    updateSelectedCountryInfo(destination);
    focusGlobeOnDestination(destination.coordinates);
    switchTab('overview');
    document.getElementById('content').classList.remove('hidden');
  const relatedSection = document.querySelector('.related-destinations');
if (relatedSection) relatedSection.style.display = 'block';

const relatedGrid = document.getElementById('relatedDests');
if (relatedGrid) relatedGrid.style.display = 'block';
    setTimeout(() => {
        document.getElementById('content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function populateRelatedDestinations(current) {
    const currentDest = destinationsData[current];
    const region = currentDest.region;

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

function updateBookingLinks(destination) {
    const query = encodeURIComponent(destination.title);
    const hotelLink = `https://www.booking.com/searchresults.html?ss=${query}`;
    const airbnbLink = `https://www.airbnb.com/s/${query}/homes`;
    const flightLink = `https://www.google.com/search?q=flights+to+${query}`;

    document.getElementById('bookingIntro').textContent = `Search hotels, Airbnb stays, and flight deals for ${destination.title}.`;
    document.getElementById('hotelBookingLink').href = hotelLink;
    document.getElementById('airbnbBookingLink').href = airbnbLink;
    document.getElementById('flightBookingLink').href = flightLink;
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

function getBudgetCategory(destination) {
    const budgetText = destination.budget.toLowerCase();
    if (budgetText.includes('luxury') || budgetText.includes('300+')) {
        return 'Luxury Traveler';
    }
    if (budgetText.includes('<$50') || budgetText.includes('$20') || budgetText.includes('$30')) {
        return 'Budget Friendly';
    }
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

function updateSelectedCountryInfo(destination) {
    const container = document.getElementById('selectedCountry');
    if (container) {
        container.innerHTML = `<strong>${destination.title}</strong><p>${destination.country}</p><p>${destination.coordinates.lat.toFixed(2)}°, ${destination.coordinates.lng.toFixed(2)}°</p>`;
    }
}

function focusGlobeOnDestination(coords) {
    if (!globeMarkers) return;
    if (!globeEarth) return;
    globeEarth.rotation.y = -coords.lng * Math.PI / 180;
    globeEarth.rotation.x = coords.lat * Math.PI / 180 * 0.5;
    globeMarkers.children.forEach(marker => {
        marker.material.color.set(marker.userData.key === currentDestination ? 0xffd6ff : 0xff9afb);
    });
}

function positionFromLatLng(lat, lng, radius = 1.02) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function addGlobeMarkers() {
    if (!globeMarkers) return;
    globeMarkers.clear();
    Object.entries(destinationsData).forEach(([key, destination]) => {
        const markerGeo = new THREE.SphereGeometry(0.02, 10, 10);
const markerMat = new THREE.MeshBasicMaterial({ color: 0xff9afb });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        const position = positionFromLatLng(destination.coordinates.lat, destination.coordinates.lng, 1.02);
        marker.position.copy(position);
        const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.font = "50px Arial";
ctx.fillText(destination.country, 10, 30);

const texture = new THREE.CanvasTexture(canvas);
const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
const sprite = new THREE.Sprite(spriteMaterial);

sprite.position.copy(position);
sprite.scale.set(0.3, 0.15, 1);

globeMarkers.add(sprite);
        marker.userData.key = key;
        globeMarkers.add(marker);
    });
}

function randomDestination() {
    const keys = Object.keys(destinationsData);
    let randomKey;

    do {
        randomKey = keys[Math.floor(Math.random() * keys.length)];
    } while (randomKey === currentDestination);

    selectAndDisplay(randomKey);
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
        list.innerHTML += '<h3>❤️ Favorites (' + favorites.length + ')</h3>';
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
        list.innerHTML += '<h3 style="margin-top: 25px;">📅 Plan to Visit (' + planToVisit.length + ')</h3>';
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
            
            // Calculate total cost
            const budgetMatch = destination.budget.match(/\$(\d+)-(\d+)\/day/);
            if (budgetMatch) {
                totalMinCost += parseInt(budgetMatch[1]);
                totalMaxCost += parseInt(budgetMatch[2]);
            }
        });
        
        // Add total cost display
        const totalDays = 7; // Assume 7-day trip for calculation
        const totalMinTrip = totalMinCost * totalDays;
        const totalMaxTrip = totalMaxCost * totalDays;
        list.innerHTML += `
            <div class="total-cost">
                <h4>💰 Estimated Total Trip Cost (7 days)</h4>
                <p>Budget Range: $${totalMinTrip.toLocaleString()} - $${totalMaxTrip.toLocaleString()}</p>
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

function selectAndDisplay(key) {
    document.getElementById('locationSelect').value = key;
    displayDestination(key);
}

document.getElementById('favoritesBtn').addEventListener('click', openFavoritesModal);
window.addEventListener('click', (e) => {
    const modal = document.getElementById('favoritesModal');
    if (e.target === modal) closeFavoritesModal();
});

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
    Object.values(destinationsData).forEach(dest => {
        allFacts.push(...dest.facts);
    });

    function showRandomFact() {
        const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
        const tickerFact = document.getElementById('tickerFact');
        if (tickerFact) tickerFact.textContent = randomFact;
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

function initializeGlobe() {
    const container = document.getElementById('globeContainer');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000010, 0.9);
    container.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    const geometry = new THREE.SphereGeometry(1, 64, 64);

const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load(
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
);

const material = new THREE.MeshStandardMaterial({
    map: earthTexture
});

globeEarth = new THREE.Mesh(geometry, material);
scene.add(globeEarth);
    



const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.05, 64, 64),
    new THREE.MeshBasicMaterial({
        color: 0x4fa3ff,
        transparent: true,
        opacity: 0.01
    })
);

scene.add(atmosphere);

    globeMarkers = new THREE.Group();
    scene.add(globeMarkers);
    addGlobeMarkers();
    

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    renderer.domElement.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    renderer.domElement.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            const deltaX = e.clientX - mouseX;
            const deltaY = e.clientY - mouseY;
            targetRotationY += deltaX * 0.01;
            targetRotationX += deltaY * 0.01;
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    });

    renderer.domElement.addEventListener('click', (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(globeMarkers.children);
        if (intersects.length) {
            const key = intersects[0].object.userData.key;
            if (key) selectAndDisplay(key);
        }
    });

   window.addEventListener('mousemove', (e) => {
    if (mouseDown) {
        const deltaX = e.clientX - mouseX;
        const deltaY = e.clientY - mouseY;

        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;

        mouseX = e.clientX;
        mouseY = e.clientY;
        console.log("dragging");
    }
});

window.addEventListener('mouseup', () => {
    mouseDown = false;
});



    function animate() {
        animationId = requestAnimationFrame(animate);
        globeEarth.rotation.x += (targetRotationX - globeEarth.rotation.x) * 0.1;
globeEarth.rotation.y += (targetRotationY - globeEarth.rotation.y) * 0.1;
        globeEarth.rotation.y += 0.0015;
        if (!mouseDown) targetRotationY += 0.0001;
        renderer.render(scene, camera);
    }
let targetZoom = camera.position.z;

window.addEventListener('wheel', (e) => {
    targetZoom += e.deltaY * 0.005;

    targetZoom = Math.max(2, Math.min(10, targetZoom));
});



    animate();

    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

function createEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#15234b');
    gradient.addColorStop(0.5, '#1f386b');
    gradient.addColorStop(1, '#120f32');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2e4d1b';
    const landShapes = [
        { x: 0.1, y: 0.25, w: 0.18, h: 0.22 },
        { x: 0.28, y: 0.4, w: 0.14, h: 0.16 },
        { x: 0.48, y: 0.2, w: 0.16, h: 0.22 },
        { x: 0.64, y: 0.32, w: 0.1, h: 0.1 },
        { x: 0.72, y: 0.18, w: 0.14, h: 0.18 },
        { x: 0.84, y: 0.34, w: 0.1, h: 0.12 }
    ];

    landShapes.forEach(shape => {
        ctx.beginPath();
        ctx.ellipse(shape.x * canvas.width, shape.y * canvas.height, shape.w * canvas.width, shape.h * canvas.height, 0, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.fillStyle = '#3a5c2b';
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 20 + Math.random() * 50;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 250; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillRect(x, y, Math.random() * 4, Math.random() * 4);
    }

    return canvas;
}

// ============ TRAVEL QUIZ FEATURE ============

// Quiz Questions and Scoring System
const quizQuestions = [
    {
        question: "What type of vacation appeals to you most?",
        options: [
            { text: "Historic architecture & culture", scores: { paris: 3, london: 2, rome: 3 } },
            { text: "Modern cities & nightlife", scores: { tokyo: 3, dubai: 3, newyork: 2 } },
            { text: "Nature & adventure", scores: { newzealand: 3, iceland: 3, peru: 2 } },
            { text: "Beaches & relaxation", scores: { bali: 3, fiji: 3, thailand: 2 } }
        ]
    },
    {
        question: "What's your ideal climate?",
        options: [
            { text: "Tropical & warm", scores: { bali: 2, dubai: 2, thailand: 2, rio: 2 } },
            { text: "Temperate & mild", scores: { paris: 2, london: 2, tokyo: 2 } },
            { text: "Cold & snowy", scores: { iceland: 2, newzealand: 2 } },
            { text: "Any - I adapt easily", scores: { sydney: 1, bangkok: 1, singapore: 1 } }
        ]
    },
    {
        question: "How long can you travel?",
        options: [
            { text: "Few days (3-5)", scores: { paris: 2, london: 2, dubai: 2 } },
            { text: "A week (5-7)", scores: { tokyo: 2, barcelona: 2, rome: 2 } },
            { text: "Two weeks+", scores: { newzealand: 3, peru: 3, thailand: 3 } },
            { text: "A month or more", scores: { bali: 2, argentina: 2, south_africa: 2 } }
        ]
    },
    {
        question: "What's your budget?",
        options: [
            { text: "Budget (<$50/day)", scores: { bangkok: 3, marrakech: 3, lisbon: 2 } },
            { text: "Standard ($50-150/day)", scores: { prague: 3, barcelona: 3, turkey: 2 } },
            { text: "Comfortable ($150+/day)", scores: { paris: 2, london: 2, dubai: 2 } },
            { text: "Luxury (no limits)", scores: { dubai: 3, paris: 2, singapore: 2 } }
        ]
    },
    {
        question: "What activities excite you?",
        options: [
            { text: "Museums & art", scores: { paris: 3, london: 2, rome: 3, florence: 2 } },
            { text: "Outdoor adventures", scores: { newzealand: 3, iceland: 3, peru: 2 } },
            { text: "Food & wine", scores: { paris: 2, italy: 2, thailand: 2, spain: 2 } },
            { text: "Shopping & entertainment", scores: { dubai: 3, tokyo: 2, newyork: 2 } }
        ]
    }
];



function startQuiz() {
    const quizQuestionsContainer = document.getElementById('quizQuestions');
    quizQuestionsContainer.innerHTML = '';
    
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        let optionsHTML = '<div class="quiz-options">';
        q.options.forEach((option, optIndex) => {
            optionsHTML += `
                <label class="quiz-option">
                    <input type="radio" name="question${index}" value="${optIndex}">
                    <span>${option.text}</span>
                </label>
            `;
        });
        optionsHTML += '</div>';
        
        questionDiv.innerHTML = `<h4>${q.question}</h4>${optionsHTML}`;
        quizQuestionsContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    // Collect answers
    const scores = {};
    const allDestinations = Object.keys(destinationsData);
    allDestinations.forEach(dest => { scores[dest] = 0; });
    
    // Calculate scores
    quizQuestions.forEach((q, index) => {
        const selectedRadio = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedRadio) {
            const selectedIndex = parseInt(selectedRadio.value);
            const selectedOption = q.options[selectedIndex];
            
            Object.keys(selectedOption.scores).forEach(dest => {
                if (scores.hasOwnProperty(dest)) {
                    scores[dest] += selectedOption.scores[dest];
                }
            });
        }
    });
    
    // Find top destination
    let topDest = null;
    let maxScore = 0;
    Object.keys(scores).forEach(dest => {
        if (scores[dest] > maxScore) {
            maxScore = scores[dest];
            topDest = dest;
        }
    });
    
    // Display result
    if (topDest) {
        displayQuizResult(topDest);
    }
}

function displayQuizResult(destinationKey) {
    const dest = destinationsData[destinationKey];
    
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    document.getElementById('resultImage').src = dest.images[0];
    document.getElementById('resultTitle').textContent = dest.title;
    document.getElementById('resultDescription').textContent = dest.description;
    
    // Store selected destination for explore action
    window.quizSelectedDestination = destinationKey;
}

function viewQuizResult() {
    if (window.quizSelectedDestination) {
        closeQuizModal();
        selectAndDisplay(window.quizSelectedDestination);
    }
}

function startQuizAgain() {
    startQuiz();
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
}

function setupQuizButton() {
    const quizBtn = document.getElementById('quizBtn');
    if (quizBtn) {
        quizBtn.addEventListener('click', openQuizModal);
    }
}
function closeQuizPopup() {
    document.getElementById("quizPopup").style.display = "none";
}
function openQuizModal() {
    document.getElementById('quizModal').classList.add('active');
    startQuiz();
}
function closeQuizModal() {
    document.getElementById('quizModal').classList.remove('active');
}
function switchTab(tabId) {
    // hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    // remove active from buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // show selected tab
    const activeTab = document.getElementById(tabId + '-tab');
    if (activeTab) {
        activeTab.style.display = 'block';
        activeTab.classList.add('active');
    }

    // activate correct button
    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}
const apiKey = '9518812adb4b16a1dcae480a48642706';

async function updateWeather() {
    const badges = document.querySelectorAll('.weather-badge');
    
    badges.forEach(async (badge) => {
        const city = badge.getAttribute('data-city');
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();
            
            const temp = Math.round(data.main.temp);
            const desc = data.weather[0].main;
            
            badge.querySelector('.temp').innerText = `${temp}°C`;
            badge.querySelector('.condition').innerText = desc;
        } catch (error) {
            badge.style.display = 'none'; 
        }
    });
}
document.addEventListener('DOMContentLoaded', updateWeather);
function toggleFavoriteUI(btn) {
    const icon = btn.querySelector('i');
    icon.classList.toggle('fas'); 
    icon.classList.toggle('far'); 
   btn.style.color = icon.classList.contains('fas') ? '#ff4757' : 'white';
   setupAutocomplete("tripFrom", "fromSuggestions");
setupAutocomplete("tripCity", "toSuggestions");
}
async function updateWeather() {
    const apiKey = '9518812adb4b16a1dcae480a48642706';
    const badges = document.querySelectorAll('.weather-badge');

    badges.forEach(async (badge) => {
        const city = badge.getAttribute('data-city');

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );

            const data = await res.json();

            if (!data.main) {
                console.log('Invalid city:', city);
                return;
            }

            badge.querySelector('.temp').textContent =
                Math.round(data.main.temp) + '°C';

            badge.querySelector('.condition').textContent =
                data.weather[0].main;

        } catch (err) {
            console.log('Weather error:', err);
        }
    });
}

function calculateTrip() {
    const from = document.getElementById('tripFrom').value;
    const city = document.getElementById('tripCity').value;
    const people = parseInt(document.getElementById('tripPeople').value);
    const start = new Date(document.getElementById('tripStart').value);
    const end = new Date(document.getElementById('tripEnd').value);

    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (!from || !city || !people || days <= 0) {
        alert('Fill all fields correctly');
        return;
    }

    const flightPerPerson = 200;
    const hotelPerNight = 120;
    const dailyCost = 50;

    const totalFlights = flightPerPerson * people;
    const totalHotel = hotelPerNight * days;
    const totalFood = dailyCost * people * days;

    const total = totalFlights + totalHotel + totalFood;

    const startStr = document.getElementById('tripStart').value;
    const endStr = document.getElementById('tripEnd').value;

    const flightLink = `https://www.google.com/travel/flights?q=Flights%20from%20${from}%20to%20${city}%20on%20${startStr}`;
    const hotelLink = `https://www.booking.com/searchresults.html?ss=${city}&checkin=${startStr}&checkout=${endStr}`;
    const airbnbLink = `https://www.airbnb.com/s/${city}/homes?checkin=${startStr}&checkout=${endStr}`;

    document.getElementById('tripResult').innerHTML = `
<div class="trip-summary">

    <div class="trip-header">
        <h3>${from} → ${city}</h3>
        <span>${days} days • ${people} travelers</span>
    </div>

    <div class="trip-costs">
        <div class="cost">
            <span>✈️ Flights</span>
            <strong>$${totalFlights}</strong>
        </div>

        <div class="cost">
            <span>🏨 Hotel</span>
            <strong>$${totalHotel}</strong>
        </div>

        <div class="cost">
            <span>🍽️ Expenses</span>
            <strong>$${totalFood}</strong>
        </div>
    </div>

    <div class="trip-total">
        Total: $${total}
    </div>

    <div class="trip-actions">
        <a href="${flightLink}" target="_blank" class="trip-btn-action">✈️ Flights</a>
        <a href="${hotelLink}" target="_blank" class="trip-btn-action">🏨 Hotel</a>
        <a href="${airbnbLink}" target="_blank" class="trip-btn-action">🏡 Airbnb</a>
    </div>

</div>
`;

document.getElementById('tripResult').innerHTML = `
<div class="trip-summary">

    <div class="trip-header">
        <h3>${from} → ${city}</h3>
        <span>${days} days • ${people} travelers</span>
    </div>

    <div class="trip-costs">
        <div class="cost">
            <span>✈️ Flights</span>
            <strong>$${totalFlights}</strong>
        </div>

        <div class="cost">
            <span>🏨 Hotel</span>
            <strong>$${totalHotel}</strong>
        </div>

        <div class="cost">
            <span>🍽️ Expenses</span>
            <strong>$${totalFood}</strong>
        </div>
    </div>

    <div class="trip-total">
        Total: $${total}
    </div>

    <div class="trip-actions">
        <a href="${flightLink}" target="_blank" class="trip-btn-action">✈️ Flights</a>
        <a href="${hotelLink}" target="_blank" class="trip-btn-action">🏨 Hotel</a>
        <a href="${airbnbLink}" target="_blank" class="trip-btn-action">🏡 Airbnb</a>
    </div>

</div>
`;
} 

function openTripCalculator() {
    document.getElementById('tripModal').classList.add('active');
}

function closeTripCalculator() {
    document.getElementById('tripModal').classList.remove('active');
}

function setupAutocomplete(inputId, suggestionId) {
  const input = document.getElementById(inputId);
  const box = document.getElementById(suggestionId);

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    box.innerHTML = "";

    if (!value) return;

    Object.values(destinationsData).forEach(dest => {
      if (
        dest.title.toLowerCase().includes(value) ||
        dest.country.toLowerCase().includes(value)
      ) {
        const item = document.createElement("div");
        item.textContent = dest.title;
        item.onclick = () => {
          input.value = dest.title;
          box.innerHTML = "";
        };
        box.appendChild(item);
      }
    });
  });
}