using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinBud_Backend.Controllers
{
    [Route("api/client")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        public ClientController()
        {
            
        }   

        [HttpGet]
        public IActionResult getAll() {
            return Ok("I love you so so so much <3 \n\n _,-^-;,-'''''-.\n/_  ` )  `      | \n`-., _,  ;      /\n   )_))_,-_,-/_(\n\n<3 Moodeng <3");
        }

        [HttpGet("private")]
        [Authorize]
        public IActionResult Private()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized("Invalid user ID.");
                
            return Ok(new
            {
                Message = "Hello from a private endpoint! You need to be authenticated to see this, your userId: " + userId
            });
        }
    }
}