using FoccoEmFrente.Kanban.Api.Controllers.Attributes;
using FoccoEmFrente.Kanban.Application.Entities;
using FoccoEmFrente.Kanban.Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ValidateModelState]
    [Authorize]
    public class GamesActivitiesController : ControllerBase
    {

        private readonly UserManager<IdentityUser> _userManager;
        private readonly IGamesActivityService _gamesActivityService;

        public GamesActivitiesController(IGamesActivityService gameActivityService, UserManager<IdentityUser> userManager)
        {
            _gamesActivityService = gameActivityService;
            _userManager = userManager;
        }

        protected Guid UserId => Guid.Parse(_userManager.GetUserId(User));

        [HttpGet]
        public async Task<IActionResult> ListarAsync()
        {
            var gamesActivity = await _gamesActivityService.GetAllAsync(UserId);
            return Ok(gamesActivity);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> SelecionarAsync(Guid id)
        {
            var gamesActivity = await _gamesActivityService.GetByIdAsync(id, UserId);
            if (gamesActivity == null)
                return NotFound();
            return Ok(gamesActivity);
        }


        [HttpPost]
        public async Task<IActionResult> Inserir(GamesActivity gamesActivity)
        {
            gamesActivity.UserId = UserId;

            var newGamesActivity = await _gamesActivityService.AddAsync(gamesActivity);
            return Ok(newGamesActivity);
        }


        [HttpPut]
        public async Task<IActionResult> Alterar(GamesActivity gamesActivity)
        {
            gamesActivity.UserId = UserId;

            var newGamesActivity = await _gamesActivityService.UpdateAsync(gamesActivity);
            return Ok(newGamesActivity);
        }

        [HttpDelete]
        public async Task<IActionResult> Excluir(GamesActivity gamesActivity)
        {
            gamesActivity.UserId = UserId;

            var oldGamesActivity = await _gamesActivityService.RemoveAsync(gamesActivity);
            return Ok(oldGamesActivity);
        }

        [HttpDelete("{id}")]
        public IActionResult ExcluirById(Guid id)
        {
            var newGamesActivity = _gamesActivityService.RemoveAsync(id, UserId);
            return Ok(newGamesActivity);
        }

    }
}
