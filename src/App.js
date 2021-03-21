import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("none")
  useEffect(() => {
    // comment 2

    console.log(process.env)
    fetch("api/getTest")
      .then(res => res.json())
      .then(data => setMsg(data.msg))
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>My env key {process.env.REACT_APP_MYTEST}</p>
        {msg}
      </header>
    </div>
  );
}

export default App;
