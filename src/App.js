import React, { useState, useEffect } from 'react';
 
function App() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('Reshmika');
  const [greeting, setGreeting] = useState('');
 
  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
 
  const handleGreet = () => {
    fetch(`http://127.0.0.1:8000/api/hello?name=${name}`)
      .then((res) => res.json())
      .then((data) => setGreeting(data.greeting));
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>{message}</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleGreet}>Say Hello</button>
      <h3>{greeting}</h3>
    </div>
  );
}
 
export default App;