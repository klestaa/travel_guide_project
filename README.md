# WorldExplorer — Refactored Project Structure

## 📁 Frontend File Structure

```
travel_guide/
├── index.html                  ← Updated HTML (loads modular scripts)
├── css/
│   └── style.css               ← All styles (unchanged)
└── js/
    ├── data.js                 ← All destination objects (the database)
    ├── weather.js              ← OpenWeatherMap fetch logic
    ├── globe.js                ← Three.js 3D globe + markers
    ├── ui.js                   ← Theme, nav, tabs, filters, ticker
    ├── destination.js          ← Display, gallery, lightbox, favorites
    ├── quiz.js                 ← Travel personality quiz
    ├── trip.js                 ← Trip cost calculator + autocomplete
    └── app.js                  ← Global state, DOMContentLoaded boot
```

### Load Order (important)
Scripts are loaded in dependency order at the bottom of `index.html`:
`data.js` → `weather.js` → `globe.js` → `ui.js` → `destination.js` → `quiz.js` → `trip.js` → `app.js`

---

## Backend File Structure (C# ASP.NET Core 8)

```
backend/
├── TravelGuide.csproj
├── Program.cs                          ← App entry, DI registration, middleware
├── appsettings.json                    ← API keys, connection strings
├── Data/
│   └── AppDbContext.cs                 ← EF Core DbContext + model config
├── Models/
│   └── Models.cs                       ← Destination, User, Favorite, Review, TripPlan
├── Services/
│   ├── WeatherService.cs               ← Proxies OpenWeatherMap (keeps key server-side)
│   ├── FlightService.cs                ← Trip cost estimation logic
│   └── OtherServices.cs               ← DestinationService, UserService, ReviewService
└── Controllers/
    └── Controllers.cs                  ← All API endpoints
```

---

## Backend API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/weather/{city}` | Live weather for any city |
| GET | `/api/destinations` | All destinations (supports `?search=` and `?region=`) |
| GET | `/api/destinations/{key}` | Single destination by key (e.g. `paris`) |
| POST | `/api/trip/estimate` | Calculate trip cost estimate |
| GET | `/api/users/{id}/favorites` | Get user's saved favorites |
| POST | `/api/users/{id}/favorites/{key}` | Add a favorite |
| DELETE | `/api/users/{id}/favorites/{key}` | Remove a favorite |
| GET | `/api/reviews/{destinationId}` | All reviews for a destination |
| GET | `/api/reviews/{destinationId}/rating` | Average rating |
| POST | `/api/reviews/{destinationId}` | Submit a new review |

---

## Ideas for Future C# Backend Features

### 1. 🔐 Auth & User Accounts (JWT)
Replace localStorage favorites with real user accounts. Use `BCrypt.Net` for
password hashing and `System.IdentityModel.Tokens.Jwt` for JWT tokens. Users
can log in from any device and keep their saved destinations.

### 2. Real Flight Prices (Amadeus API)
Integrate the Amadeus `Flight Offers Search` API. Your C# backend acts as a
proxy, so the Amadeus client secret never touches the browser. Return live
prices for the trip calculator instead of estimates.

### 3. Weather Caching (IMemoryCache)
The weather API is called every page load. Add `IMemoryCache` with a 30-minute
TTL per city so you stay within the free tier and responses are instant.

### 4. Trip Itinerary Emails (SendGrid / MailKit)
After a user builds a trip plan, let them click "Email my itinerary". The C#
backend renders an HTML email template with destination details, dates, and
booking links and sends it via SendGrid or SMTP.

### 5. Analytics & Popularity Tracking
Log destination view counts in a `DestinationStats` table. Expose a
`GET /api/destinations/trending` endpoint that returns the top 10 most-viewed
this week. Display a "Trending" badge in the frontend grid.

### 6. Custom Itinerary Builder
Let users create multi-day trip itineraries — pick destinations, assign days,
add notes. Store in a `Itinerary` + `ItineraryStop` table. Expose CRUD
endpoints and render the plan as a printable PDF using `QuestPDF`.

### 7. Price Drop Alerts (Background Service)
Use `IHostedService` or Hangfire to run a nightly job that checks saved
trip plans against current flight estimates. If the price drops by 20%+,
send the user an email alert.

### 8. Currency Conversion (ExchangeRate API)
Add a `GET /api/currency/{from}/{to}` endpoint that proxies a free exchange
rate API. Show budget costs converted to the user's local currency in real time.

### 9. Hotel Availability (Booking.com Affiliate API)
Rather than just linking to Booking.com, use their Affiliate API to embed
live room counts and prices directly in the destination card.

### 10. Image CDN & Optimization
Replace the current Unsplash URLs with images stored in Azure Blob Storage or
Cloudflare R2. Add a `GET /api/images/{destinationKey}` endpoint that returns
optimised WebP thumbnails, reducing page load time significantly.

---

## Running the Backend

```bash
cd backend
dotnet restore
dotnet ef database update   # creates travel.db
dotnet run                  # starts on https://localhost:7001
# Swagger UI at https://localhost:7001/swagger
```

Update `appsettings.json` with your real `OpenWeather:ApiKey` before running.
