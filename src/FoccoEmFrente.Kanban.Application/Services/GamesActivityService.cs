using FoccoEmFrente.Kanban.Application.Entities;
using FoccoEmFrente.Kanban.Application.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Application.Services
{
    public class GamesActivityService : IGamesActivityService
    {
        private readonly IGamesActivityRepository _gamesActivityRepository;

        public GamesActivityService(IGamesActivityRepository gamesActivityRepository)
        {
            _gamesActivityRepository = gamesActivityRepository;
        }


        public async Task<IEnumerable<GamesActivity>> GetAllAsync(Guid userId)
        {
            return await _gamesActivityRepository.GetAllAsync(userId);
        }

        public async Task<GamesActivity> GetByIdAsync(Guid id, Guid userId)
        {
            return await _gamesActivityRepository.GetByIdAsync(id, userId);
        }

        public async Task<bool> ExistAsync(Guid id, Guid userId)
        {
            return await _gamesActivityRepository.ExistAsync(id, userId);
        }

        public async Task<GamesActivity> AddAsync(GamesActivity gamesActivity)
        {
            var newGames = _gamesActivityRepository.Add(gamesActivity);
            await _gamesActivityRepository.unitOfWork.CommitAsync();
            return newGames;
        }

         public async Task<GamesActivity> UpdateAsync(GamesActivity gamesActivity)
        {
            var gamesExists = await ExistAsync(gamesActivity.Id, gamesActivity.UserId);
            if (!gamesExists)
                throw new Exception("Atividade não foi encontrada.");

            var newGame = _gamesActivityRepository.Update(gamesActivity);
            await _gamesActivityRepository.unitOfWork.CommitAsync();
            return newGame;
        }

        public async Task<GamesActivity> RemoveAsync(GamesActivity gamesActivity)
        {
            var gamesExists = await ExistAsync(gamesActivity.Id, gamesActivity.UserId);
            if (!gamesExists)
                throw new Exception("Atividade não foi encontrada.");

            var newGame = _gamesActivityRepository.Remove(gamesActivity);
            await _gamesActivityRepository.unitOfWork.CommitAsync();
            return newGame;
        }

        public async Task<GamesActivity> RemoveAsync(Guid id, Guid userId)
        {
            var gameToBeRemoved = await GetByIdAsync(id, userId);
            if (gameToBeRemoved == null)
                throw new Exception("Atividade não foi encontrada.");

            var newGame = _gamesActivityRepository.Remove(gameToBeRemoved);
            await _gamesActivityRepository.unitOfWork.CommitAsync();
            return newGame;
        }


        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
