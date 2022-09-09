import React, { useState } from 'react';
import Review from './Review';

function AddReview({ book }) {
  const [addReview, setAddReview] = useState(false);

  function handleClick() {
    setAddReview(!addReview);
  }

  return (
    <div>
      { addReview ?
        <Review book={book} /> : 
        <button onClick={handleClick}>Add Review</button>
      }
    </div>
  )
}

export default AddReview;