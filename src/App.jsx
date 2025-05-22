import Button from './components/Button/Button';
import './App.css';
import { useState } from 'react';

function Score() {
  const [score, setScore] = useState(0);

  return (
    <p onClick={() => setScore(score + 1)}>Score: {score}</p>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Jeu Memory</h1>
      <Score />
      <Button label="Click Me" />
    </div>
  );
}

export default App;
