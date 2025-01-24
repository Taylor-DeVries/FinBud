using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}