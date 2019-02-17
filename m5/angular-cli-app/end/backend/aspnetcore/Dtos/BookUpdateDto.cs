using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class BookUpdateDto
    {
        public bool Read { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public int Rating { get; set; }
    }
}