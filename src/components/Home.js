import React from "react";
import Book from "./Book";
import AddBook from "./AddBook";

function Home({ bookData, updateBooks}) {
  const displayBooks = bookData.map(book => (
    <Book key={book.id} book={book} />
  ))
  return (
    <div>
      <AddBook updateBooks={updateBooks} />
      {displayBooks}
    </div>
  )
}

export default Home;