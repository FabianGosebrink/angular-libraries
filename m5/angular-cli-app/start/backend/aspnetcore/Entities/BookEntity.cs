using System;

namespace Backend.Entities
{
    public class Book
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