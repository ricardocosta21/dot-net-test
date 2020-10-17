using System.Collections.Generic;
using System.Threading.Tasks;
using restAPI.Domain.Models;

namespace restAPI.Domain.Repositories
{
    public interface IMessagesRepository
    {
        Task<IEnumerable<Messages>> ListAsync();
        Task AddAsync(Messages message);
    }
}
