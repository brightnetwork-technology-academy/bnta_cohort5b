package com.example.backendforreact.book;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/books")
@CrossOrigin("http://localhost:3000")
public class BookController {

    private BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    Collection<Book> getAll() {
        return bookRepository.getAll();
    }

    @GetMapping("/{id}")
    Book get(@PathVariable Long id) {
        return bookRepository.get(id);
    }

    @PostMapping
    void create(@RequestBody Book book) {
        bookRepository.add(book);
    }
    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        bookRepository.delete(id);
    }
}
