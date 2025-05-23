import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './App.css';
import { useState } from 'react';

function Score() {
  const [score, setScore] = useState(0);

  return (
    <p onClick={() => setScore(score + 1)}>Score: {score}</p>
  );
}

const pictures = [
  { picture: 'src/assets/emoji_1.png' },
  { picture: 'src/assets/emoji_2.png' },
  { picture: 'src/assets/emoji_3.png' },
  { picture: 'src/assets/emoji_4.png' },
  { picture: 'src/assets/emoji_5.png' },

  { picture: 'src/assets/emoji_1.png' },
  { picture: 'src/assets/emoji_2.png' },
  { picture: 'src/assets/emoji_3.png' },
  { picture: 'src/assets/emoji_4.png' },
  { picture: 'src/assets/emoji_5.png' }
];

function App() {
  function handleClick(index) {
    console.log('Card clicked', index);
  }

  return (
    <div className="App">
      <h1>Jeu Memory</h1>
      <Score />

      {pictures.map((element, index) => (
        <Button
          key={element.picture}
          onClick={() => handleClick(index)}
          label={`Card ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default App;
