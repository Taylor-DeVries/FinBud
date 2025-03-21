// using Customers.Api.Domain;
using System.ComponentModel.DataAnnotations;
using FinBud_Backend.Mapping;
using FinBud_Backend.Models;
using FinBud_Backend.Repositories;
using Microsoft.IdentityModel.Tokens;
// using FluentValidation;
// using FluentValidation.Results;

namespace FinBud_Backend.Services;

public class ClientService : IClientService
{
    private readonly IClientRepository _clientRepository;

    public ClientService(IClientRepository clientRepository)
    {
        _clientRepository = clientRepository;
    }

    public async Task<bool> CreateAsync(Client client)
    {
        var existingUser = await _clientRepository.GetAsync(client.Id);
        if (existingUser is not null)
        {
            var message = $"A user with id {client.Id} already exists";
            return false;
            // throw new ValidationException(message);
        }

        var clientDto = client.ToClientDto();
        return await _clientRepository.CreateAsync(clientDto);
    }

    public async Task<Client?> GetAsync(string id)
    {
        var clientDto = await _clientRepository.GetAsync(id);
        return clientDto?.ToClientFromClientDTO();
    }

    public async Task<bool> UpdateAsync(Client client)
    {
        var clientDto = client.ToClientDto();
        return await _clientRepository.UpdateAsync(clientDto);
    }

    // public async Task<bool> DeleteAsync(Guid id)
    // {
    //     return await _customerRepository.DeleteAsync(id);
    // }
}
