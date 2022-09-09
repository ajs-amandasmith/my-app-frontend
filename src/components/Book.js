import "../App.css";
import React from 'react';
import UpdateReview from './UpdateReview';

function Book({ book }) {

  return (
    <div className="Book">
      <h1 className="Book-title">Title: {book.title}</h1>
      <h2 className="Book-author">Author: {book.author.name}</h2>
      <h3 className="Book-publisher">Publisher: {book.publisher}</h3>
      <h4 className="Book-genre">Genre: {book.genre}</h4>
      <p className="Book-review">Review: {book.review}</p>
      {book.review ? 
        <UpdateReview />: 
        <button></button>
      }
    </div>
  )
}

export default Book;