import React from 'react';

function Book({ book }) {
  console.log('book', book)


  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.publisher}</h3>
      <h4>{book.genre}</h4>
    </div>
  )
}

export default Book;