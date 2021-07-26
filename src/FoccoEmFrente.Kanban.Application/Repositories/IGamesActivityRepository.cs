using FoccoEmFrente.Kanban.Application.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Application.Repositories
{
    public interface IGamesActivityRepository : IRepository<GamesActivity>
    {
        Task<bool> ExistAsync(Guid id, Guid userId);
        Task<IEnumerable<GamesActivity>> GetAllAsync(Guid userId);
        Task<GamesActivity> GetByIdAsync(Guid id, Guid userId);
        GamesActivity Add(GamesActivity gamesActivity);
        GamesActivity Update(GamesActivity gamesActivity);
        GamesActivity Remove(GamesActivity gamesActivity);
        GamesActivity RemoveById(Guid id);
    }
}
