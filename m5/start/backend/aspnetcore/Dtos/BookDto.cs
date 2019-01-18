using System;

namespace Backend.Dtos
{
    public class BookDto
    {
        public int Id { get; set; }
        public bool Read { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public string Genre { get; set; }
        public int Rating { get; set; }
    }
}