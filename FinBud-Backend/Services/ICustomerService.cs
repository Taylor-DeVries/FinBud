// using Customers.Api.Domain;

using FinBud_Backend.Models;

namespace FinBud_Backend.Services;

public interface ICustomerService
{
    Task<bool> CreateAsync(Client client);

    // Task<Customer?> GetAsync(Guid id);

    // Task<bool> UpdateAsync(Customer customer);

    // Task<bool> DeleteAsync(Guid id);
}
