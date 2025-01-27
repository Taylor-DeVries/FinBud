using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FinBud_Backend.Dto.Clients
{
    public class CreateClientDto
    {
        [Required]
        public string Id { get; set; } = string.Empty;
        [Required]
        public string Result { get; set; } = string.Empty;
    }
}