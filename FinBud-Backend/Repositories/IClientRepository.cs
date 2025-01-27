// using Customers.Api.Contracts.Data;

using FinBud_Backend.Dto.Clients;

namespace FinBud_Backend.Repositories;

public interface IClientRepository
{
    Task<bool> CreateAsync(ClientDto customer);

    // Task<CustomerDto?> GetAsync(Guid id);

    // Task<bool> UpdateAsync(CustomerDto customer);

    // Task<bool> DeleteAsync(Guid id);
}
