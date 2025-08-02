import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/message');
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>React + Node.js Test</h1>
      <button onClick={fetchMessage}>Call API</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
