import React, { useState, useEffect } from 'react';

function AddBook({ updateBooks}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [author, setAuthor] = useState('');
  const [authorOptions, setAuthorOptions] = useState([]);
  const [isNewAuthor, setIsNewAuthor] = useState(false);

  const options = authorOptions.map(author => (
    <option id={author.id}>{author.name}</option>
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

  function addBook(author) {

  }

  function selectAuthor(e) {
    console.log(e.target.value)
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

    if (selectedAuthor === "New Author") {
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
        })
    }
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
              {options}
              <option>New Author</option>
          </select>
          {isNewAuthor ? 
            <input
              type="text"
              name="new-author"
              defaultValue=''
              onChange={e => selectAuthor(e.target.value)}
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

