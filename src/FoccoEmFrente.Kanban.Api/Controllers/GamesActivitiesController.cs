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
        public async Task<IActionResult> ExcluirById(Guid id)
        {
            var newGamesActivity = await _gamesActivityService.RemoveAsync(id, UserId);
            return Ok(newGamesActivity);
        }

        [HttpPut("{id}/todo")]
        public async Task<IActionResult> AtualizarStatusParaTodo(Guid id)
        {
            var gmesActivity = await _gamesActivityService.UpdateToTodoAsync(id, UserId);
            return Ok(gmesActivity);
        }
        [HttpPut("{id}/doing")]
        public async Task<IActionResult> AtualizarStatusParaDoing(Guid id)
        {
            var gmesActivity = await _gamesActivityService.UpdateToDoingAsync(id, UserId);
            return Ok(gmesActivity);
        }
        [HttpPut("{id}/done")]
        public async Task<IActionResult> AtualizarStatusParaDone(Guid id)
        {
            var gmesActivity = await _gamesActivityService.UpdateToDoneAsync(id, UserId);
            return Ok(gmesActivity);
        }



    }
}
