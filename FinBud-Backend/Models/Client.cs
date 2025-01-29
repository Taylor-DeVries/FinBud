using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace FinBud_Backend.Models
{
    public class Client
    {
        [JsonPropertyName("pk")]
        public string Pk => Id;
        [JsonPropertyName("sk")]
        public string Sk => Id;
        public string Id { get; set; } = string.Empty;
        public string History { get; set; } = string.Empty;
    }
}