// using Customers.Api.Domain;
using System.ComponentModel.DataAnnotations;
using backend.Mapping;
using backend.Models;
using backend.Repositories;
using Microsoft.IdentityModel.Tokens;
// using FluentValidation;
// using FluentValidation.Results;

namespace backend.Services;

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

    public async Task<bool> UpdateProfileImageAsync(string id, string imageData)
    {
        var existing = await _clientRepository.GetAsync(id);
        if (existing is null)
        {
            var newClient = new Client { Id = id, History = string.Empty, ProfileImage = imageData };
            return await _clientRepository.CreateAsync(newClient.ToClientDto());
        }

        var client = existing.ToClientFromClientDTO();
        client.ProfileImage = imageData;
        return await _clientRepository.UpdateAsync(client.ToClientDto());
    }

    // public async Task<bool> DeleteAsync(Guid id)
    // {
    //     return await _customerRepository.DeleteAsync(id);
    // }
}
