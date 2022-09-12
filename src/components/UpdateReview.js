import React, { useState } from 'react';
import Review from './Review';

function UpdateReview({ book, updateBooks }) {
  const [updateReview, setUpdateReview] = useState(false);

  function handleClick() {
    setUpdateReview(!updateReview);
  }

  function deleteReview() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: ""
      })
    })
      .then(r => r.json())
      .then(book => {
        updateBooks(book)
      })
  }

  return (
    <div>
      {updateReview ? 
        <Review book={book} updateBooks={updateBooks} setUpdateReview={setUpdateReview} /> :
        <button onClick={handleClick}>Edit Review</button>
      }
      <button onClick={deleteReview}>Delete Review</button>
    </div>
)}

export default UpdateReview;