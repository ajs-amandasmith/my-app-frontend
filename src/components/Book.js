import React from 'react';

function Book({ book }) {

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.publisher}</h3>
      <h4>{book.genre}</h4>
      <h5>{book.author.name}</h5>
      <p>{book.review}</p>
    </div>
  )
}

export default Book;