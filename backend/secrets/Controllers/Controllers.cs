using Microsoft.AspNetCore.Mvc;
using TravelGuide.Services;

namespace TravelGuide.Controllers;

// ── GET /api/weather/{city} ───────────────────────────────────
[ApiController]
[Route("api/[controller]")]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weather;
    public WeatherController(IWeatherService weather) => _weather = weather;

    [HttpGet("{city}")]
    public async Task<IActionResult> Get(string city)
    {
        var result = await _weather.GetWeatherAsync(city);
        return result is null ? NotFound() : Ok(result);
    }
}

// ── GET /api/destinations ─────────────────────────────────────
[ApiController]
[Route("api/[controller]")]
public class DestinationsController : ControllerBase
{
    private readonly IDestinationService _destinations;
    public DestinationsController(IDestinationService destinations) => _destinations = destinations;

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? search, [FromQuery] string? region)
    {
        if (!string.IsNullOrWhiteSpace(search))
            return Ok(await _destinations.SearchAsync(search));
        if (!string.IsNullOrWhiteSpace(region))
            return Ok(await _destinations.GetByRegionAsync(region));
        return Ok(await _destinations.GetAllAsync());
    }

    [HttpGet("{key}")]
    public async Task<IActionResult> GetByKey(string key)
    {
        var dest = await _destinations.GetByKeyAsync(key);
        return dest is null ? NotFound() : Ok(dest);
    }
}

// ── POST /api/trip/estimate ───────────────────────────────────
[ApiController]
[Route("api/[controller]")]
public class TripController : ControllerBase
{
    private readonly IFlightService _flights;
    public TripController(IFlightService flights) => _flights = flights;

    public record TripRequest(string From, string To, int Travelers, DateTime Start, DateTime End);

    [HttpPost("estimate")]
    public IActionResult Estimate([FromBody] TripRequest req)
    {
        if (req.End <= req.Start) return BadRequest("End date must be after start date.");
        var estimate = _flights.EstimateTrip(req.From, req.To, req.Travelers, req.Start, req.End);
        return Ok(estimate);
    }
}

// ── GET+POST /api/users/{id}/favorites ───────────────────────
[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly IUserService _users;
    public UsersController(IUserService users) => _users = users;

    [HttpGet("{id}/favorites")]
    public async Task<IActionResult> GetFavorites(int id) =>
        Ok(await _users.GetFavoritesAsync(id));

    [HttpPost("{id}/favorites/{destinationKey}")]
    public async Task<IActionResult> AddFavorite(int id, string destinationKey)
    {
        await _users.AddFavoriteAsync(id, destinationKey);
        return Ok();
    }

    [HttpDelete("{id}/favorites/{destinationKey}")]
    public async Task<IActionResult> RemoveFavorite(int id, string destinationKey)
    {
        await _users.RemoveFavoriteAsync(id, destinationKey);
        return NoContent();
    }
}

// ── GET+POST /api/reviews/{destinationId} ────────────────────
[ApiController]
[Route("api/[controller]")]
public class ReviewsController : ControllerBase
{
    private readonly IReviewService _reviews;
    public ReviewsController(IReviewService reviews) => _reviews = reviews;

    [HttpGet("{destinationId}")]
    public async Task<IActionResult> GetReviews(int destinationId) =>
        Ok(await _reviews.GetForDestinationAsync(destinationId));

    [HttpGet("{destinationId}/rating")]
    public async Task<IActionResult> GetRating(int destinationId) =>
        Ok(new { Average = await _reviews.GetAverageRatingAsync(destinationId) });

    public record ReviewRequest(int UserId, int Rating, string Comment);

    [HttpPost("{destinationId}")]
    public async Task<IActionResult> PostReview(int destinationId, [FromBody] ReviewRequest req)
    {
        if (req.Rating is < 1 or > 5) return BadRequest("Rating must be between 1 and 5.");
        var review = await _reviews.AddReviewAsync(destinationId, req.UserId, req.Rating, req.Comment);
        return CreatedAtAction(nameof(GetReviews), new { destinationId }, review);
    }
}
