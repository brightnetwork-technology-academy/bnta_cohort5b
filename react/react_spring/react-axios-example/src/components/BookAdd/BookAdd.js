import { useState } from 'react';
import axios from 'axios';

const BookAdd = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  const handleTitleChange = event => setTitle(event.target.value);
  const handleAuthorChange = event => setAuthor(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    const book = {
      "title": title,
      "author": author
    }

    axios.post('http://127.0.0.1:8080/books', {book})
      .then(res => {
        console.log(res);
      }).catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={handleAuthorChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );

}

export default BookAdd;
