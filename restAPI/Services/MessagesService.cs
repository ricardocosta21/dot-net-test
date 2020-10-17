using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using restAPI.Domain.Models;

using restAPI.Domain.Repositories;
using restAPI.Domain.Services;

namespace restAPI.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly IMessagesRepository _messagesRepository;
        
        private readonly IUnitOfWork _unitOfWork;

        public MessagesService(IMessagesRepository messagesRepository, IUnitOfWork unitOfWork)
        {
            _messagesRepository = messagesRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Messages>> ListAsync()
        {
            return await _messagesRepository.ListAsync();
        }

        public async Task<bool> AddAsync(Messages message)
        {
            try
            {
                await _messagesRepository.AddAsync(message);
                await _unitOfWork.CompleteAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
