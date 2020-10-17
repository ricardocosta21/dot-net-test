using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using restAPI.Domain.Models;
using restAPI.Domain.Services;

namespace restAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly IMessagesService _messagesService;

        public MessagesController(IMessagesService messagesService)
        {
            _messagesService = messagesService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(bool), 201)]
        public async Task<IEnumerable<Messages>> GetAsync()
        {
            return await _messagesService.ListAsync();
        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), 201)]
        
        public async Task<bool> PostAsync([FromBody] Messages message)
        {
            return await _messagesService.AddAsync(message);
        }
    }
}
