namespace TravelGuide.Models;

// ── Destination ──────────────────────────────────────────────
public class Destination
{
    public int    Id          { get; set; }
    public string Key         { get; set; } = "";   // e.g. "paris"
    public string Title       { get; set; } = "";
    public string Country     { get; set; } = "";
    public string Region      { get; set; } = "";
    public string Description { get; set; } = "";
    public string BestTime    { get; set; } = "";
    public string Budget      { get; set; } = "";
    public string Climate     { get; set; } = "";
    public double Latitude    { get; set; }
    public double Longitude   { get; set; }
    public double Rating      { get; set; }

    // Navigation
    public ICollection<Review>  Reviews  { get; set; } = new List<Review>();
}

// ── User ─────────────────────────────────────────────────────
public class User
{
    public int    Id           { get; set; }
    public string Username     { get; set; } = "";
    public string Email        { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public DateTime CreatedAt  { get; set; } = DateTime.UtcNow;

    // Navigation
    public ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
    public ICollection<TripPlan> TripPlans { get; set; } = new List<TripPlan>();
}

// ── Favorite ─────────────────────────────────────────────────
public class Favorite
{
    public int    Id            { get; set; }
    public int    UserId        { get; set; }
    public string DestinationKey { get; set; } = "";
    public DateTime SavedAt     { get; set; } = DateTime.UtcNow;

    // Navigation
    public User User { get; set; } = null!;
}

// ── Review ────────────────────────────────────────────────────
public class Review
{
    public int     Id            { get; set; }
    public int     DestinationId { get; set; }
    public int     UserId        { get; set; }
    public int     Rating        { get; set; }   // 1–5
    public string  Comment       { get; set; } = "";
    public DateTime CreatedAt    { get; set; } = DateTime.UtcNow;

    // Navigation
    public Destination Destination { get; set; } = null!;
    public User        User        { get; set; } = null!;
}

// ── TripPlan ─────────────────────────────────────────────────
public class TripPlan
{
    public int      Id             { get; set; }
    public int      UserId         { get; set; }
    public string   FromCity       { get; set; } = "";
    public string   ToDestination  { get; set; } = "";
    public int      Travelers      { get; set; }
    public DateTime StartDate      { get; set; }
    public DateTime EndDate        { get; set; }
    public decimal  EstimatedCost  { get; set; }
    public DateTime CreatedAt      { get; set; } = DateTime.UtcNow;

    // Navigation
    public User User { get; set; } = null!;
}
