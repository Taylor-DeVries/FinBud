// using Customers.Api.Contracts.Data;

using backend.Dto.Clients;

namespace backend.Repositories;

public interface IClientRepository
{
    Task<bool> CreateAsync(ClientDto clientDto);

    Task<ClientDto?> GetAsync(string id);

    Task<bool> UpdateAsync(ClientDto clientDto);

    // Task<bool> DeleteAsync(Guid id);
}
