import React from "react";
import Book from "./Book";
import AddBook from "./AddBook";

function Home({ bookData, addNewBook, authorOptions, addAuthor, removeBook }) {
  const displayBooks = bookData.map(book => (
    <Book key={book.id} book={book} removeBook={removeBook} />
  ))

  return (
    <div>
      <AddBook addNewBook={addNewBook} authorOptions={authorOptions} addAuthor={addAuthor} />
      {displayBooks}
    </div>
  )
}

export default Home;