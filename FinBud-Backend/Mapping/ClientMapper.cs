using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinBud_Backend.Dto.Clients;
using FinBud_Backend.Models;

namespace FinBud_Backend.Mapping
{
    public static class ClientMapper
    {
        public static Client ToClientFromCreateClientDTO(this CreateClientDto clientDto)
        {
            return new Client
            {
                Id = clientDto.Id,
                Result = clientDto.Result
            };
        }
    }
}