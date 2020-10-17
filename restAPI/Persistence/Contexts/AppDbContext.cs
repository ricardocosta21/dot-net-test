using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using restAPI.Domain.Models;

namespace restAPI.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<Messages> Messages { get; set; }

        public IConfiguration Configuration { get; }

        public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}