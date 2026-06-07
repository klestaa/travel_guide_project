namespace TravelGuide.Services;

public interface IFlightService
{
    TripCostEstimate EstimateTrip(string fromCity, string toCity, int travelers, DateTime start, DateTime end);
}

public record TripCostEstimate(
    decimal FlightTotal,
    decimal HotelTotal,
    decimal ExpensesTotal,
    decimal GrandTotal,
    int     Days,
    string  FlightSearchUrl,
    string  HotelSearchUrl,
    string  AirbnbSearchUrl
);

public class FlightService : IFlightService
{
    // In a real app, connect to Amadeus / Skyscanner API here
    private static readonly Dictionary<string, decimal> RegionFlightBase = new()
    {
        ["Europe"]   = 250,
        ["Asia"]     = 600,
        ["Americas"] = 400,
        ["Africa"]   = 700,
        ["Oceania"]  = 900,
    };

    private static readonly Dictionary<string, decimal> CityDailyBudget = new()
    {
        ["paris"]     = 150,
        ["tokyo"]     = 130,
        ["bali"]      = 60,
        ["dubai"]     = 200,
        ["newyork"]   = 180,
        ["bangkok"]   = 50,
        ["london"]    = 160,
        ["sydney"]    = 140,
    };

    public TripCostEstimate EstimateTrip(string fromCity, string toCity, int travelers, DateTime start, DateTime end)
    {
        int days = Math.Max(1, (end - start).Days);

        // Flight cost
        decimal flightPerPerson = RegionFlightBase.GetValueOrDefault("Europe", 300);
        decimal flightTotal     = flightPerPerson * travelers;

        // Hotel cost
        decimal dailyRate = CityDailyBudget.GetValueOrDefault(toCity.ToLower(), 120);
        decimal hotelTotal = dailyRate * days;

        // Expenses
        decimal expensesTotal = 50m * travelers * days;

        decimal grandTotal = flightTotal + hotelTotal + expensesTotal;

        string startStr = start.ToString("yyyy-MM-dd");
        string endStr   = end.ToString("yyyy-MM-dd");
        string toEnc    = Uri.EscapeDataString(toCity);
        string fromEnc  = Uri.EscapeDataString(fromCity);

        return new TripCostEstimate(
            FlightTotal:    flightTotal,
            HotelTotal:     hotelTotal,
            ExpensesTotal:  expensesTotal,
            GrandTotal:     grandTotal,
            Days:           days,
            FlightSearchUrl: $"https://www.google.com/travel/flights?q=Flights+from+{fromEnc}+to+{toEnc}+on+{startStr}",
            HotelSearchUrl:  $"https://www.booking.com/searchresults.html?ss={toEnc}&checkin={startStr}&checkout={endStr}",
            AirbnbSearchUrl: $"https://www.airbnb.com/s/{toEnc}/homes?checkin={startStr}&checkout={endStr}"
        );
    }
}
