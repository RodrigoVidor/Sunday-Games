using FoccoEmFrente.Kanban.Application.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace FoccoEmFrente.Kanban.Application.Services
{
    public interface IGamesActivityService : IDisposable
    {
        Task<bool> ExistAsync(Guid id, Guid userId);
        Task<IEnumerable<GamesActivity>> GetAllAsync(Guid userId);
        Task<GamesActivity> GetByIdAsync(Guid id, Guid userId);
        Task<GamesActivity> AddAsync(GamesActivity gamesActivity);
        Task<GamesActivity> UpdateAsync(GamesActivity gamesActivity);
        Task<GamesActivity> RemoveAsync(GamesActivity gamesActivity);
        Task<GamesActivity> RemoveAsync(Guid id, Guid userId);
        Task<GamesActivity> UpdateToTodoAsync(Guid id, Guid userId);
        Task<GamesActivity> UpdateToDoingAsync(Guid id, Guid userId);
        Task<GamesActivity> UpdateToDoneAsync(Guid id, Guid userId);

    }
}
