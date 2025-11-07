using Microsoft.EntityFrameworkCore;

namespace ProjectGlassRain.Data
{
    public static class DbInitializer
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<ProjectGlassRain.Domain.Catalog.Item>()
                .HasData(
                    new ProjectGlassRain.Domain.Catalog.Item { Id = 1, Name = "Drone A", Price = 199.99m },
                    new ProjectGlassRain.Domain.Catalog.Item { Id = 2, Name = "Drone B", Price = 299.99m }
                );
        }
    }
}
