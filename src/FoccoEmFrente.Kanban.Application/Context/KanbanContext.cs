using FoccoEmFrente.Kanban.Application.Entities;
using FoccoEmFrente.Kanban.Application.Mapping;
using FoccoEmFrente.Kanban.Application.Repositories;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Application.Context
{
    public class KanbanContext : IdentityDbContext, IUnitOfWork
    {
        public KanbanContext(DbContextOptions<KanbanContext> options) : base(options)
        {

        }

        public DbSet<GamesActivity> GamesActivities { get; set; }

        public async Task<bool> CommitAsync()
        {
            return await SaveChangesAsync() > 0;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new GamesMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
