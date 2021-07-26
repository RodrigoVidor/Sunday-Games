using Microsoft.Extensions.DependencyInjection;


namespace FoccoEmFrente.Kanban.Application.Services.Extensions
{
    public static class IServiceCollectionExtensions
    {
        public static void addApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IGamesActivityService, GamesActivityService>();
        }
    }
}
