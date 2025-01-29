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
        public static Client ToClientFromCreateDTO(this CreateClientRequestDto clientDto, string id)
        {
            return new Client
            {
                Id = id,
                Result = clientDto.Result
            };
        }

        public static Client ToClientFromClientDTO(this ClientDto clientDto)
        {
            return new Client
            {
                Id = clientDto.Id,
                Result = clientDto.Result
            };
        }

        public static ClientDto ToClientDto(this Client client)
        {
            return new ClientDto
            {
                Id = client.Id,
                Result = client.Result
            };
        }
    }
}