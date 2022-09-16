import '../App.css';
import React, { useState, useEffect } from 'react';
import Home from "./Home";

function App() {
  const [status, setStatus] = useState('idle');
  const [bookData, setBookData] = useState([]);
  // const [authorOptions, setAuthorOptions] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    setStatus("loading");
    fetch("http://localhost:9292/books")
      .then(r => r.json())
      .then(books => {
        setBookData(books);
        setStatus('idle');
      })
  }, [])

  // useEffect(() => {
  //   fetch('http://localhost:9292/authors')
  //     .then(r => r.json())
  //     .then(authors => {
  //       setAuthorOptions(authors);
  //     })
  // }, [bookData])

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then(r => r.json())
      .then(authors => {
        setAuthorData(authors)
      })
  }, [])

  function removeBook(deletedBook) {
    const newBooks = bookData.filter(book => book.id !== deletedBook.id);
    setBookData(newBooks);
    removeAuthor(deletedBook)
  }

  function addNewBook(book) {
    const updatedBooks = [...bookData, book];
    setBookData(updatedBooks);
  }

  function removeAuthor(book) {
    const currentAuthor = authorData.find(author => author.name === book.author.name)

    const updatedBooks = currentAuthor.books.filter(oldBook => oldBook.id !== book.id)

    currentAuthor.books = updatedBooks;

    const newAuthors = authorData.filter(author => {
      if (author.name === currentAuthor.name) return currentAuthor;
      return author;
    }).filter(author => author.books.length > 0)
    setAuthorData(newAuthors)
  }
  
  function addAuthor(author, book) {
    const currentAuthor = authorData.find(oldAuthor => oldAuthor.name === author)

    if (currentAuthor !== undefined) {
      currentAuthor.books.push(book)
      const newAuthors = authorData.map(oldAuthor => {
        if (oldAuthor.name === currentAuthor.name) return currentAuthor;
        return oldAuthor;
      })
      setAuthorData(newAuthors);
    } else {
      const newAuthor = {name: author, books: [book]}
      const newAuthors = [...authorData, newAuthor];
      setAuthorData(newAuthors);
    }
  }

  function updateBooks(book) {
    const books = bookData.map(oldBook => {
      if (oldBook.id === book.id) return book;
      return oldBook;
    })
    setBookData(books);
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
            // authorOptions={authorOptions} 
            addAuthor={addAuthor}
            // setAuthorOptions={setAuthorOptions}
            removeBook={removeBook}
            updateBooks={updateBooks}
            authorData={authorData}
          />
        }
      </div>
    </div>
  )
}

export default App;
