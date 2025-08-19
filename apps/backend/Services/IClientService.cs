// using Customers.Api.Domain;

using backend.Models;

namespace backend.Services;

public interface IClientService
{
    Task<bool> CreateAsync(Client client);

    Task<Client?> GetAsync(string id);

    Task<bool> UpdateAsync(Client client);

    Task<bool> UpdateProfileImageAsync(string id, string imageData);

    // Task<bool> DeleteAsync(Guid id);
}
