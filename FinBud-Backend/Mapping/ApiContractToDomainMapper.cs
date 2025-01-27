using FinBud_Backend.Dto.Clients;
using FinBud_Backend.Models;

namespace FinBud_Backend.Mapping;

public static class ApiContractToDomainMapper
{
    public static Client ToClient(this ClientDto client)
    {
        return new Client 
        {
            Id =  "John",
            Result = "Mapple" 
        };
    }
}
