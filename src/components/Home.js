import React from "react";
import Book from "./Book";
import AddBook from "./AddBook";

function Home({ bookData, updateBooks, authorOptions, addAuthor }) {
  const displayBooks = bookData.map(book => (
    <Book key={book.id} book={book} />
  ))
  
  return (
    <div>
      <AddBook updateBooks={updateBooks} authorOptions={authorOptions} addAuthor={addAuthor} />
      {displayBooks}
    </div>
  )
}

export default Home;