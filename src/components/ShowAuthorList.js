import React, { useState, useEffect } from 'react';
import Author from "./Author";

function ShowAuthorList() {
  const [showAuthors, setShowAuthors] = useState(false);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then(r => r.json())
      .then(authors => {
        setAuthorData(authors)
      })
  }, [])

  function handleClick() {
    setShowAuthors(!showAuthors);
  }

  return (
    <div>
      {showAuthors ? 
        <button onClick={handleClick}>Hide Authors?</button> : 
        <button onClick={handleClick}>Show Authors?</button> 
      }
      {showAuthors ? <Author authorData={authorData} /> : null }
    </div>
  )
}

export default ShowAuthorList;