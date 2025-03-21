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
                History = clientDto.History
            };
        }

        public static Client ToClientFromPutDTO(this PutClientRequestDto clientDto, string id)
        {
            return new Client
            {
                Id = id,
                History = clientDto.History
            };
        }

        public static Client ToClientFromClientDTO(this ClientDto clientDto)
        {
            return new Client
            {
                Id = clientDto.Id,
                History = clientDto.History
            };
        }

        public static ClientDto ToClientDto(this Client client)
        {
            return new ClientDto
            {
                Id = client.Id,
                History = client.History
            };
        }

        public static ViewClientDto ToViewClientDto(this Client client)
        {
            return new ViewClientDto
            {
                History = client.History
            };
        }
    }
}