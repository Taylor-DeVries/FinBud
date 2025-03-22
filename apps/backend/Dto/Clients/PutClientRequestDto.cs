using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dto.Clients
{
    public class PutClientRequestDto
    {
        [Required]
        public string History { get; set; } = string.Empty;
    }
}