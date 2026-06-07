using Microsoft.EntityFrameworkCore;
using TravelGuide.Data;
using TravelGuide.Models;

namespace TravelGuide.Services;

// Destinations
public interface IDestinationService
{
    Task<List<Destination>> GetAllAsync();
    Task<Destination?>      GetByKeyAsync(string key);
    Task<List<Destination>> SearchAsync(string query);
    Task<List<Destination>> GetByRegionAsync(string region);
}

public class DestinationService : IDestinationService
{
    private readonly AppDbContext _db;
    public DestinationService(AppDbContext db) => _db = db;

    public Task<List<Destination>> GetAllAsync() =>
        _db.Destinations.ToListAsync();

    public Task<Destination?> GetByKeyAsync(string key) =>
        _db.Destinations.FirstOrDefaultAsync(d => d.Key == key);

    public Task<List<Destination>> SearchAsync(string query) =>
        _db.Destinations
           .Where(d => d.Title.Contains(query) || d.Country.Contains(query))
           .ToListAsync();

    public Task<List<Destination>> GetByRegionAsync(string region) =>
        _db.Destinations
           .Where(d => d.Region == region)
           .ToListAsync();
}

// Users
public interface IUserService
{
    Task<User?> GetByIdAsync(int id);
    Task<User?> GetByEmailAsync(string email);
    Task<User>  CreateAsync(string username, string email, string passwordHash);
    Task        AddFavoriteAsync(int userId, string destinationKey);
    Task        RemoveFavoriteAsync(int userId, string destinationKey);
    Task<List<Favorite>> GetFavoritesAsync(int userId);
}

public class UserService : IUserService
{
    private readonly AppDbContext _db;
    public UserService(AppDbContext db) => _db = db;

    public Task<User?> GetByIdAsync(int id) =>
        _db.Users.Include(u => u.Favorites).FirstOrDefaultAsync(u => u.Id == id);

    public Task<User?> GetByEmailAsync(string email) =>
        _db.Users.FirstOrDefaultAsync(u => u.Email == email);

    public async Task<User> CreateAsync(string username, string email, string passwordHash)
    {
        var user = new User { Username = username, Email = email, PasswordHash = passwordHash };
        _db.Users.Add(user);
        await _db.SaveChangesAsync();
        return user;
    }

    public async Task AddFavoriteAsync(int userId, string destinationKey)
    {
        var exists = await _db.Favorites.AnyAsync(f => f.UserId == userId && f.DestinationKey == destinationKey);
        if (!exists)
        {
            _db.Favorites.Add(new Favorite { UserId = userId, DestinationKey = destinationKey });
            await _db.SaveChangesAsync();
        }
    }

    public async Task RemoveFavoriteAsync(int userId, string destinationKey)
    {
        var fav = await _db.Favorites.FirstOrDefaultAsync(f => f.UserId == userId && f.DestinationKey == destinationKey);
        if (fav != null) { _db.Favorites.Remove(fav); await _db.SaveChangesAsync(); }
    }

    public Task<List<Favorite>> GetFavoritesAsync(int userId) =>
        _db.Favorites.Where(f => f.UserId == userId).ToListAsync();
}

// Reviews
public interface IReviewService
{
    Task<List<Review>> GetForDestinationAsync(int destinationId);
    Task<Review>       AddReviewAsync(int destinationId, int userId, int rating, string comment);
    Task<double>       GetAverageRatingAsync(int destinationId);
}

public class ReviewService : IReviewService
{
    private readonly AppDbContext _db;
    public ReviewService(AppDbContext db) => _db = db;

    public Task<List<Review>> GetForDestinationAsync(int destinationId) =>
        _db.Reviews
           .Include(r => r.User)
           .Where(r => r.DestinationId == destinationId)
           .OrderByDescending(r => r.CreatedAt)
           .ToListAsync();

    public async Task<Review> AddReviewAsync(int destinationId, int userId, int rating, string comment)
    {
        var review = new Review
        {
            DestinationId = destinationId,
            UserId        = userId,
            Rating        = Math.Clamp(rating, 1, 5),
            Comment       = comment
        };
        _db.Reviews.Add(review);
        await _db.SaveChangesAsync();
        return review;
    }

    public async Task<double> GetAverageRatingAsync(int destinationId)
    {
        var reviews = await _db.Reviews.Where(r => r.DestinationId == destinationId).ToListAsync();
        return reviews.Count == 0 ? 0 : reviews.Average(r => r.Rating);
    }
}
