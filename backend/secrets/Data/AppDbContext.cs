using Microsoft.EntityFrameworkCore;
using TravelGuide.Models;

namespace TravelGuide.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Destination> Destinations => Set<Destination>();
    public DbSet<User>        Users        => Set<User>();
    public DbSet<Favorite>    Favorites    => Set<Favorite>();
    public DbSet<Review>      Reviews      => Set<Review>();
    public DbSet<TripPlan>    TripPlans    => Set<TripPlan>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Unique email per user
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        // One user can favorite many destinations
        modelBuilder.Entity<Favorite>()
            .HasOne(f => f.User)
            .WithMany(u => u.Favorites)
            .HasForeignKey(f => f.UserId);

        // One destination can have many reviews
        modelBuilder.Entity<Review>()
            .HasOne(r => r.Destination)
            .WithMany(d => d.Reviews)
            .HasForeignKey(r => r.DestinationId);

        // One user can have many trip plans
        modelBuilder.Entity<TripPlan>()
            .HasOne(t => t.User)
            .WithMany(u => u.TripPlans)
            .HasForeignKey(t => t.UserId);
    }
}
