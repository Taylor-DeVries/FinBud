// using Customers.Api.Contracts.Data;

using FinBud_Backend.Dto.Clients;

namespace FinBud_Backend.Repositories;

public interface IClientRepository
{
    Task<bool> CreateAsync(ClientDto clientDto);

    Task<ClientDto?> GetAsync(string id);

    Task<bool> UpdateAsync(ClientDto clientDto);

    // Task<bool> DeleteAsync(Guid id);
}
