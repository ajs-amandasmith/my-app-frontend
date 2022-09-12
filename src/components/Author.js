import React from 'react';
import "../App.css"

function Author({ authorData }) {

  return (
    <div>
      {authorData.map(author => (
        <div className="Author">
          <h1 className="Author-name">{author.name}</h1>
          <h2 className="Author-books"># of Books: {author.books.length}</h2>
        </div>
      ))}
    </div>
  )
}

export default Author;