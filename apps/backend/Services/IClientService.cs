// using Customers.Api.Domain;

using FinBud_Backend.Models;

namespace FinBud_Backend.Services;

public interface IClientService
{
    Task<bool> CreateAsync(Client client);

    Task<Client?> GetAsync(string id);

    Task<bool> UpdateAsync(Client client);

    // Task<bool> DeleteAsync(Guid id);
}
