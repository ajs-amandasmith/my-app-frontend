// import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import Home from "./Home";

function App() {
  const [status, setStatus] = useState('idle');
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    setStatus("loading");
    fetch("http://localhost:9292/books")
      .then(r => r.json())
      .then(books => {
        setBookData(books);
        setStatus('idle');
      })
  }, [])

  return (
    <div>
      <header className="App-header">Book List</header>
      <div>
        {status === 'loading' ? "Loading..." : 
          <Home bookData={bookData} />
        }
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
