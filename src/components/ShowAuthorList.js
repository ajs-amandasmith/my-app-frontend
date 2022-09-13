import React, { useState } from 'react';
import Author from "./Author";

function ShowAuthorList({ authorData }) {
  const [showAuthors, setShowAuthors] = useState(false);

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