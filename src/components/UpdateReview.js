import React, { useState } from 'react';
import Review from './Review';

function UpdateReview({ book }) {
  const [updateReview, setUpdateReview] = useState(false);

  function handleClick() {
    setUpdateReview(!updateReview);
  }

  return (
    <div>
      {updateReview ? 
        <Review /> :
        <button onClick={handleClick}>Edit Review</button>
      }
      <button>Delete Review</button>
    </div>
)}

export default UpdateReview;