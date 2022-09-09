import '../App.css';
import React, { useState, useEffect } from 'react';
import Home from "./Home";

function App() {
  const [status, setStatus] = useState('idle');
  const [bookData, setBookData] = useState([]);
  const [authorOptions, setAuthorOptions] = useState([]);

  useEffect(() => {
    setStatus("loading");
    fetch("http://localhost:9292/books")
      .then(r => r.json())
      .then(books => {
        setBookData(books);
        setStatus('idle');
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/authors')
      .then(r => r.json())
      .then(authors => {
        setAuthorOptions(authors);
      })
  }, [bookData])

  function removeBook(deletedBook) {
    const newBooks = bookData.filter(book => book.id !== deletedBook.id);
    setBookData(newBooks);
  }

  function addNewBook(book) {
    const updatedBooks = [...bookData, book];
    setBookData(updatedBooks);
  }

  function addAuthor(author) {
    if (authorOptions.find(oldAuthor => oldAuthor.name !== author)) {
      const newAuthors = [...authorOptions, author]
      setAuthorOptions(newAuthors)
    }
    
  }

  return (
    <div>
      <header className="App-header">Book List</header>
      <div>
        {status === 'loading' ? "Loading..." : 
          <Home 
            bookData={bookData} 
            addNewBook={addNewBook} 
            status={status} 
            authorOptions={authorOptions} 
            addAuthor={addAuthor}
            setAuthorOptions={setAuthorOptions}
            removeBook={removeBook}
          />
        }
      </div>
    </div>
  )
}

export default App;
