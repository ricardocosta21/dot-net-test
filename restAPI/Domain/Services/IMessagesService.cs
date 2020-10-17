
using System.Threading.Tasks;
using System.Collections.Generic;
using restAPI.Domain.Models;

namespace restAPI.Domain.Services
{
    public interface IMessagesService
    {
        Task<IEnumerable<Messages>> ListAsync();
        Task<bool> AddAsync(Messages message);
    }
}
