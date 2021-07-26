using System.Threading.Tasks;

namespace FoccoEmFrente.Kanban.Application.Repositories
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
    }
}
