using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dto.Clients;
using backend.Models;

namespace backend.Mapping
{
    public static class ClientMapper
    {
        public static Client ToClientFromCreateDTO(this CreateClientRequestDto clientDto, string id)
        {
            return new Client
            {
                Id = id,
                History = clientDto.History,
                ProfileImage = string.Empty
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
                History = clientDto.History,
                ProfileImage = clientDto.ProfileImage
            };
        }

        public static ClientDto ToClientDto(this Client client)
        {
            return new ClientDto
            {
                Id = client.Id,
                History = client.History,
                ProfileImage = client.ProfileImage
            };
        }

        public static ViewClientDto ToViewClientDto(this Client client)
        {
            return new ViewClientDto
            {
                History = client.History,
                ProfileImage = client.ProfileImage
            };
        }

        public static Client UpdateProfileImage(this Client client, string image)
        {
            client.ProfileImage = image;
            return client;
        }
    }
}