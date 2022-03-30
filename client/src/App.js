import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/notes')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
