import React from "react";
import Book from "./Book";

function Home({ bookData }) {
  const displayBooks = bookData.map(book => (
    <Book book={book} />
  ))
  return (
    <div>
      {displayBooks}
    </div>
  )
}

export default Home;