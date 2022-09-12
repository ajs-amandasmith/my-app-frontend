import React, { useState } from 'react';
import Review from './Review';

function AddReview({ book, updateBooks }) {
  const [addReview, setAddReview] = useState(false);

  function handleClick() {
    setAddReview(!addReview);
  }

  return (
    <div>
      { addReview ?
        <Review book={book} updateBooks={updateBooks} setAddReview={setAddReview} /> : 
        <button onClick={handleClick}>Add Review</button>
      }
      {/* { addReview ? <button onClick={setAddReview(!addReview)}>Cancel</button> : null } */}
      {addReview ? <button onClick={handleClick}>Cancel</button> : null}
    </div>
  )
}

export default AddReview;