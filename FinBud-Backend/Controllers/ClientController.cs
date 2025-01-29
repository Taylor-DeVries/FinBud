using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using FinBud_Backend.Dto.Clients;
using FinBud_Backend.Mapping;
using FinBud_Backend.Models;
using FinBud_Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinBud_Backend.Controllers
{
    [Route("api/client")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService; 
        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }   

        [HttpGet]
        public IActionResult suprise() {
            return Ok("I love you Vanessa <3 \n\n _,-^-;,-'''''-.\n/_  ` )  `      | \n`-., _,  ;      /\n   )_))_,-_,-/_(\n\n<3 Moodeng <3");
        }

        // [HttpGet("private")]
        // [Authorize]
        // public IActionResult privateEndpoint()
        // {
            // var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            // if (string.IsNullOrEmpty(userId))
            //     return Unauthorized("Invalid user ID.");

            // var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            // if (string.IsNullOrEmpty(userId))
            //     return Unauthorized("Invalid user ID.");
                
        //     return Ok(new
        //     {
        //         Message = "Shhhhhh"          
        //     });
        // }

        [HttpGet("search")]
        [Authorize]
        public async Task<IActionResult> getClient(string id) 
        {
            var client = await _clientService.GetAsync(id);

            if(client == null) {
                return Ok ( new
                {
                    Message = "Failed to find"
                });
            }

            return Ok( new
            {
                Message = "Info is " + client.History
            });
        }

        [HttpPost("create")]
        [Authorize]
        public async Task<IActionResult> createClient([FromBody] CreateClientRequestDto clientDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
                return NotFound(); 
            
            var client = clientDto.ToClientFromCreateDTO(userId);            

            var success = await _clientService.CreateAsync(client);

            if(success == false) {
                return StatusCode(500, "Could not create");
            }
            else {
                return Created();
            }
        }
    }
}