import React, { useState, useEffect } from 'react';

function AddBook({ updateBooks}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [authorOptions, setAuthorOptions] = useState([]);
  const [isNewAuthor, setIsNewAuthor] = useState(false);
  const [currentOption, setCurrentOption] = useState('')

  const options = authorOptions.map(author => (
    <option id={author.id} value={author.name}>{author.name}</option>
  ))

  useEffect(() => {
    fetch('http://localhost:9292/authors')
      .then(r => r.json())
      .then(authors => {
        setAuthorOptions(authors);
      })
  }, [])

  function handleAdd() {
    setShowAddForm(true)
  }

  function addBook(bookAuthor) {
    console.log('book author', bookAuthor)
    console.log(options)
    const option = options.find(option => option.props.value === bookAuthor)
    console.log('option', option.props.id)
    // post new book data
    // fetch request with POST method
    // sets title, publisher, genre and author
    // updates the book state data
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        publisher: publisher,
        genre: genre,
        author_id: option.props.id
      })
    })
      .then(r => r.json())
      .then(book => console.log(book))
  }

  function selectAuthor(e) {
    if (e.target.value === "New Author") {
      setIsNewAuthor(true)
    } else {
      setIsNewAuthor(false)
    }
    setAuthor(e.target.value)
  }

  function addAuthor(author) {
    setAuthorOptions([...authorOptions, author])
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (isNewAuthor) {
      fetch("http://localhost:9292/authors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: author
        })
      })
        .then(r => r.json())
        .then(newAuthor => {
          addAuthor(newAuthor);
          setAuthor("");
          setIsNewAuthor(false);
        })
    }
    console.log('author', author)
    addBook(author)
    updateBooks()
    setShowAddForm(false)
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

