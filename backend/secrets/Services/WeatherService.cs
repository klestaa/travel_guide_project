using System.Text.Json;

namespace TravelGuide.Services;

public interface IWeatherService
{
    Task<WeatherResult?> GetWeatherAsync(string city);
}

public record WeatherResult(string City, double TempC, string Condition, string Icon);

public class WeatherService : IWeatherService
{
    private readonly HttpClient _http;
    private readonly string     _apiKey;

    public WeatherService(HttpClient http, IConfiguration config)
    {
        _http   = http;
        _apiKey = config["OpenWeather:ApiKey"] ?? throw new InvalidOperationException("OpenWeather:ApiKey not set");
    }

    public async Task<WeatherResult?> GetWeatherAsync(string city)
    {
        var url = $"https://api.openweathermap.org/data/2.5/weather?q={Uri.EscapeDataString(city)}&units=metric&appid={_apiKey}";

        var response = await _http.GetAsync(url);
        if (!response.IsSuccessStatusCode) return null;

        using var doc = JsonDocument.Parse(await response.Content.ReadAsStringAsync());
        var root = doc.RootElement;

        return new WeatherResult(
            City:      root.GetProperty("name").GetString() ?? city,
            TempC:     root.GetProperty("main").GetProperty("temp").GetDouble(),
            Condition: root.GetProperty("weather")[0].GetProperty("main").GetString() ?? "",
            Icon:      root.GetProperty("weather")[0].GetProperty("icon").GetString() ?? ""
        );
    }
}
