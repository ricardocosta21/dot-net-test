using System.Collections.Generic;
using System.Linq;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using restAPI.Domain.Models;
using restAPI.Domain.Repositories;
using restAPI.Persistence.Contexts;

namespace restAPI.Persistence.Repositories
{
    public class MessagesRepository : BaseRepository, IMessagesRepository
    {
        public MessagesRepository(AppDbContext context) : base(context) { }

        public async Task<IEnumerable<Messages>> ListAsync()
        {
            return await _context.Messages.ToListAsync();
        }

        public async Task AddAsync(Messages message)
        {
            await _context.Messages.AddAsync(message);
        }
    }
}
