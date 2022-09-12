import React, { useState } from 'react';
import Review from './Review';

function UpdateReview({ book, updateBooks }) {
  const [updateReview, setUpdateReview] = useState(false);

  function handleClick() {
    setUpdateReview(!updateReview);
  }

  return (
    <div>
      {updateReview ? 
        <Review book={book} updateBooks={updateBooks} setUpdateReview={setUpdateReview} /> :
        <button onClick={handleClick}>Edit Review</button>
      }
      <button>Delete Review</button>
    </div>
)}

export default UpdateReview;