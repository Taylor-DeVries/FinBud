using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace FinBud_Backend.Dto.Clients
{
    public class ClientDto
    {
        [JsonPropertyName("pk")]
        public string Pk => Id;

        [JsonPropertyName("sk")]
        public string Sk => Id;

        public string Id { get; init; } = default!;

        public string History { get; init; } = default!;
    }
}