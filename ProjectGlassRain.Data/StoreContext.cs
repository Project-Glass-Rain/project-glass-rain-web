using Microsoft.EntityFrameworkCore;
using ProjectGlassRain.Domain.Catalog;

namespace ProjectGlassRain.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext() { }

        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            DbInitializer.Seed(modelBuilder);
        }
    }
}
