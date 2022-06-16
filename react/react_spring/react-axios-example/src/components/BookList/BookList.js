import { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
          axios.get('http://127.0.0.1:8080/books')
            .then(res => {
              const books = res.data;
              setBooks(books);
            }).catch((err) => console.log(err));
    },[]
  );
  return (
      <ul>
        {
            books.map(book =>
              <li key={book.id}>{`${book.title} | ${book.author}`}</li>
            )
        }
      </ul>
  );
}

export default BookList;
