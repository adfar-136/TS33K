import React, { useState, useEffect } from 'react';
import './App.css';

function Jokegenerator() {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = await response.json();
      setSetup(data.setup);
      setPunchline(data.punchline);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="joke-box">
        <h2 className="setup">{setup}</h2>
        <p className="punchline">{punchline}</p>
        <button className="generate-btn" onClick={fetchJoke}>
          Generate Joke
        </button>
      </div>
    </div>
  );
}

export default Jokegenerator;
