import React, { useState, useEffect } from 'react';

function AddBook() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [authorOptions, setAuthorOptions] = useState([]);

  const options = authorOptions.map(author => (
    <option>{author.name}</option>
  ))

  useEffect(() => {
    fetch('http://localhost:9292/authors')
      .then(r => r.json())
      .then(authors => {
        setAuthorOptions(authors);
      })
  }, [options])

  function handleAdd() {
    setShowAddForm(true)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e)
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
            name="authors"
            onChange={e => setAuthor(e.target.value)}>
              {options}
              <option>New Author</option>
          </select>
          <input type="submit"></input>
        </form>
      ) : <button onClick={handleAdd}>Add a Book</button>}
    </div>
  )
}

export default AddBook;