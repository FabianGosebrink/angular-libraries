using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Backend.Entities;

namespace Backend.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly BookDbContext _dbContext;

        public BookRepository(BookDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Book GetSingle(int id)
        {
            return _dbContext.Books.FirstOrDefault(x => x.Id == id);
        }

        public void Add(Book item)
        {
            _dbContext.Books.Add(item);
        }

        public void Delete(int id)
        {
            Book foodItem = GetSingle(id);
            _dbContext.Books.Remove(foodItem);
        }

        public Book Update(int id, Book item)
        {
            _dbContext.Books.Update(item);
            return item;
        }

        public IQueryable<Book> GetAll(bool? read)
        {
            IQueryable<Book> query = _dbContext.Books;

            if (read.HasValue)
            {
                query = query.Where(x => x.Read == read.Value);
            }

            return query;
        }

        public int Count(Expression<Func<Book, bool>> predicate = null)
        {
            if (predicate == null)
            {
                return _dbContext.Books.Count();
            }

            return _dbContext.Books.Count(predicate);
        }

        public bool Save()
        {
            return (_dbContext.SaveChanges() >= 0);
        }
    }
}