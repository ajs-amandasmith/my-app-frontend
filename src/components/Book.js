import React, { useState, useEffect } from 'react';

function Book({ book }) {
  console.log('book', book)
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    fetch(`http://localhost:9292/authors/${book.author_id}`)
      .then(r => r.json())
      .then(author => {
        setAuthorName(author.name);
      })
  }, [])

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.publisher}</h3>
      <h4>{book.genre}</h4>
      <h5>{authorName}</h5>
    </div>
  )
}

export default Book;