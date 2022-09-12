import "../App.css";
import React from 'react';
import UpdateReview from './UpdateReview';
import AddReview from './AddReview';

function Book({ book, removeBook, updateBooks }) {
  
  function deleteBook() {
    fetch(`http://localhost:9292/books/${book.id}`, {
    method: "DELETE"
    })
      .then(r => r.json())
      .then(removeBook(book))
  }

  return (
    <div className="Book">
      <h1 className="Book-title">Title: {book.title}</h1>
      <h2 className="Book-author">Author: {book.author.name}</h2>
      <h3 className="Book-publisher">Publisher: {book.publisher}</h3>
      <h4 className="Book-genre">Genre: {book.genre}</h4>
      {book.review === "" ? null : <p className="Book-review">Review: {book.review}</p>}
      {book.review ? 
        <UpdateReview book={book} updateBooks={updateBooks} />: 
        <AddReview book={book} updateBooks={updateBooks} />
      }
      <button onClick={deleteBook}>Delete Book</button>
    </div>
  )
}

export default Book;