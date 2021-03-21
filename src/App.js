import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("none")
  useEffect(() => {

    fetch("api/getTest")
      .then(res => res.json())
      .then(data => setMsg(data.msg))
  })
  return (
    <div className="App">
      <header className="App-header">
        {msg}
      </header>
    </div>
  );
}

export default App;
