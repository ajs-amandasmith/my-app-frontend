import React, { useState } from 'react'

function Review({ book, updateBooks, setUpdateReview, setAddReview }) {
  const [review, setReview] = useState(book.review);

  function submitForm(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: review
      })
    })
      .then(r => r.json())
      .then(book => {
        updateBooks(book)
        setUpdateReview(false)
        setAddReview(false)
      })

  }

  // function addReview() {
  //   fetch(`http://localhost:9292/books/${book.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       review: "review"
  //   })
  //   })
  //   updateBooks(book)
  // }


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