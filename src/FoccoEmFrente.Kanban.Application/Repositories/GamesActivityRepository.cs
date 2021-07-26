using FoccoEmFrente.Kanban.Application.Context;
using FoccoEmFrente.Kanban.Application.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Application.Repositories
{
    public class GamesActivityRepository : IGamesActivityRepository
    {
        protected readonly KanbanContext DbContext;
        protected readonly DbSet<GamesActivity> DbSet;

        public IUnitOfWork unitOfWork => DbContext;

        public GamesActivityRepository(KanbanContext context)
        {
            DbContext = context;
            DbSet = DbContext.Set<GamesActivity>();
        }

        public async Task<bool> ExistAsync(Guid id, Guid userId)
        {
            return await DbSet
                .Where(games => games.Id == id && games.UserId == userId)
                .AnyAsync();
        }

        public async Task<IEnumerable<GamesActivity>> GetAllAsync(Guid userId)
        {
            return await DbSet
                .Where(games => games.UserId == userId)
                .ToListAsync();
        }
        public async Task<GamesActivity> GetByIdAsync(Guid id, Guid userId)
        {
            return await DbSet
                .Where(games => games.UserId == userId && games.Id == id)
                .FirstOrDefaultAsync();
        }

        public GamesActivity Add(GamesActivity games)
        {
            var entry = DbSet.Add(games);

            return entry.Entity;
        }

        public GamesActivity Update(GamesActivity games)
        {
            var entry = DbSet.Update(games);

            return entry.Entity;
        }

        public GamesActivity Remove(GamesActivity games)
        {
            var entry = DbSet.Remove(games);

            return entry.Entity;
        }

        public GamesActivity RemoveById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            DbContext.Dispose();
        }

        
    }
}
