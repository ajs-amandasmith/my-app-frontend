import React from "react";
import Book from "./Book";
import AddBook from "./AddBook";
import ShowAuthorList from "./ShowAuthorList";

function Home({ 
    bookData, 
    addNewBook, 
    authorOptions, 
    addAuthor, 
    removeBook,
    updateBooks
  }) {
  

  const displayBooks = bookData.map(book => (
    <Book key={book.id} book={book} removeBook={removeBook} updateBooks={updateBooks} />
  ))

  return (
    <div>
      <AddBook addNewBook={addNewBook} authorOptions={authorOptions} addAuthor={addAuthor} />
      <ShowAuthorList />
      {displayBooks}
    </div>
  )
}

export default Home;