package com.example.backendforreact.book;

import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class BookRepository {
    private Map<Long, Book> map = new HashMap();
    {
        map.put(1L, new Book(1l, "From Animals into Gods: A Brief History of Humankind", "Yuval Noah Harari"));
        map.put(2L,  new Book(2l, "The Dawn of Everything", "David Graeber & David Wengrow"));
        map.put(3L, new Book(3l, "How to Change Your Mind", "Michael Pollan"));
        map.put(4L, new Book(4l, "Intuition Pumps and Other Tools for Thinking", "Daniel C. Dennett"));
    }

    public Collection<Book> getAll() {
        return map.values();
    }

    public Book get(Long id){
        return map.get(id);
    }

    public void add(Book book){
        var nextId = Long.valueOf(map.size()+1);
        book.setId(nextId);
        map.put(nextId, book);
    }

    public void delete(Long id) {
        if(!map.containsKey(id)) {
            throw new NoSuchElementException("No element with given id: " + id);
        }
        map.remove(id);
    }

}