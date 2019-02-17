using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions<BookDbContext> options) : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
    }
}