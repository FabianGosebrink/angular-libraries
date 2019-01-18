using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Backend.Dtos;
using Backend.Entities;
using Backend.Repositories;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;

        public BooksController(IBookRepository repository)
        {
            _bookRepository = repository;
        }

        [HttpGet(Name = nameof(GetAll))]
        public IActionResult GetAll(bool? read = null)
        {
            List<Book> items = _bookRepository.GetAll(read).ToList();

            IEnumerable<BookDto> toReturn = items.Select(x => Mapper.Map<BookDto>(x));

            return Ok(toReturn);
        }

        [HttpGet]
        [Route("{id:int}", Name = nameof(GetSingle))]
        public IActionResult GetSingle(int id)
        {
            Book item = _bookRepository.GetSingle(id);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<BookDto>(item));
        }

        [HttpPost(Name = nameof(Add))]
        public ActionResult<BookDto> Add([FromBody] BookCreateDto bookCreateDto)
        {
            if (bookCreateDto == null)
            {
                return BadRequest();
            }

            Book toAdd = Mapper.Map<Book>(bookCreateDto);

            _bookRepository.Add(toAdd);

            if (!_bookRepository.Save())
            {
                throw new Exception("Creating an item failed on save.");
            }

            Book newItem = _bookRepository.GetSingle(toAdd.Id);

            return CreatedAtRoute(nameof(GetSingle), new { id = newItem.Id },
                Mapper.Map<BookDto>(newItem));
        }

        [HttpPatch("{id:int}", Name = nameof(PartiallyUpdate))]
        public ActionResult<BookDto> PartiallyUpdate(int id, [FromBody] JsonPatchDocument<BookUpdateDto> patchDoc)
        {
            if (patchDoc == null)
            {
                return BadRequest();
            }

            Book existingEntity = _bookRepository.GetSingle(id);

            if (existingEntity == null)
            {
                return NotFound();
            }

            BookUpdateDto bookUpdateDto = Mapper.Map<BookUpdateDto>(existingEntity);
            patchDoc.ApplyTo(bookUpdateDto, ModelState);

            TryValidateModel(bookUpdateDto);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Mapper.Map(bookUpdateDto, existingEntity);
            Book updated = _bookRepository.Update(id, existingEntity);

            if (!_bookRepository.Save())
            {
                throw new Exception("Updating an item failed on save.");
            }

            return Ok(Mapper.Map<BookDto>(updated));
        }

        [HttpDelete]
        [Route("{id:int}", Name = nameof(Remove))]
        public IActionResult Remove(int id)
        {
            Book item = _bookRepository.GetSingle(id);

            if (item == null)
            {
                return NotFound();
            }

            _bookRepository.Delete(id);

            if (!_bookRepository.Save())
            {
                throw new Exception("Deleting an item failed on save.");
            }

            return NoContent();
        }

        [HttpPut]
        [Route("{id:int}", Name = nameof(Update))]
        public ActionResult<BookDto> Update(int id, [FromBody] BookUpdateDto updateDto)
        {
            if (updateDto == null)
            {
                return BadRequest();
            }

            var item = _bookRepository.GetSingle(id);

            if (item == null)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Mapper.Map(updateDto, item);

            _bookRepository.Update(id, item);

            if (!_bookRepository.Save())
            {
                throw new Exception("Updating an item failed on save.");
            }

            return Ok(Mapper.Map<BookDto>(item));
        }
    }
}