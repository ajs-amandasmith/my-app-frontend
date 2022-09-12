import React, { useState } from 'react'

function Review({ book, updateBooks }) {
  const [review, setReview] = useState(book.review);

  function submitForm(e) {
    e.preventDefault();

    console.log(review)

  }

  function addReview() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: "review"
    })
    })
    updateBooks(book)
  }


  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="textarea" value={review} onChange={e => setReview(e.target.value)}placeholder="Review goes here"></input>
        <input type="submit" value="Submit Review"></input>
      </form>
    </div>
  )
}

export default Review