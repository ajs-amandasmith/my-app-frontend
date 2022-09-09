import React, { useState, useEffect } from 'react';

function AddBook({ addNewBook, authorOptions, addAuthor }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [isNewAuthor, setIsNewAuthor] = useState(false);

  const options = authorOptions.map(author => (
    <option id={author.id} value={author.name}>{author.name}</option>
  ))

  function handleAdd() {
    setShowAddForm(true)
  }

  function selectAuthor(e) {
    if (e.target.value === "New Author") {
      setIsNewAuthor(true)
    } else {
      setIsNewAuthor(false)
    }
    setAuthor(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        publisher: publisher,
        genre: genre,
        name: author
      })
    })
      .then(r => r.json())
      .then(book => {
        addNewBook(book);
        addAuthor(author);
        setShowAddForm(false);
        setTitle('');
        setPublisher('');
        setGenre('');
      })
  }

  return (
    <div>
      
      {showAddForm ? (
        <form onSubmit={e => handleFormSubmit(e)}>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="Book Title"
          />
          <input
            type="text"
            name="publisher"
            value={publisher}
            onChange={e => setPublisher(e.target.value)}
            placeholder="Book Publisher"
          />
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            placeholder="Book Genre"
          />
          <select 
            defaultValue=""
            onChange={e => selectAuthor(e)}>
              <option value='' disabled>Select an Author</option>
              <option>New Author</option>
              {options}
          </select>
          {isNewAuthor ? 
            <input
              type="text"
              name="new-author"
              defaultValue=''
              onChange={e => setAuthor(e.target.value)}
              placeholder="Add New Author"
            />
            : null}
          <input type="submit"></input>
        </form>
      ) : <button onClick={handleAdd}>Add a Book</button>}
    </div>
  )
}

export default AddBook;

// Notes for Blog Post below:

 // function addBook() {
  //   fetch("http://localhost:9292/books", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       publisher: publisher,
  //       genre: genre,
  //       name: author
  //     })
  //   })
  //     .then(r => r.json())
  //     .then(book => addNewBook(book))
  // }

  // This was in the submit form function before the changes happened in Sinatra

    // if (isNewAuthor) {
    //   fetch("http://localhost:9292/authors", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       name: author
    //     })
    //   })
    //     .then(r => r.json())
    //     .then(newAuthor => {
    //       addAuthor(newAuthor);
    //       setAuthor("");
    //       setIsNewAuthor(false);
    //     })
    //     .then((newAuthor) => {
    //       addBook(newAuthor)
    //       setShowAddForm(false)
    //     })
    // } else {
      // addBook()
    // }

