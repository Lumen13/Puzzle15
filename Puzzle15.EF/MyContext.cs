using Microsoft.EntityFrameworkCore;
using Puzzle15.Data;

namespace Puzzle15.EF
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

        public DbSet<Score> Scores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Score>(builder =>
            {
                builder.HasKey(x => x.Id);
                builder.Property(x => x.Name);
                builder.Property(x => x.NumberOfMoves);
                builder.Property(x => x.TimePassed);
            });
        }
    }
}
