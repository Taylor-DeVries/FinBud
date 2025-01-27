// using Customers.Api.Contracts.Data;
// using Customers.Api.Domain;
using FinBud_Backend.Dto.Clients;
using FinBud_Backend.Models;

namespace FinBud_Backend.Mapping;

public static class DomainToDtoMapper
{
    public static ClientDto ToCustomerDto(this Client client)
    {
        return new ClientDto
        {
            Id = client.Id.ToString(),
            Result = client.Result
        };
    }
}
