import React, { useState } from 'react'

function Review() {
  const [review, setReview] = useState('');

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
      <form>
        <input type="text"></input>
        <submit></submit>
      </form>
    </div>
  )
}

export default Review