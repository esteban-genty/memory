import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const images = [
  'src/assets/emoji_1.png',
  'src/assets/emoji_2.png',
  'src/assets/emoji_3.png',
  'src/assets/emoji_4.png',
  'src/assets/emoji_1.png',
  'src/assets/emoji_2.png',
  'src/assets/emoji_3.png',
  'src/assets/emoji_4.png'
];

// Shuffle function
function shuffleArray(array) {
  const shuffled = array;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(images);
    setShuffledImages(shuffled);
    console.log('Images mélangées :', shuffled);
    console.log('Jeu lancé !');
  }, []);

  const handleCardClick = (path) => {
    console.log(`Card ${path} clicked`);
  };

  return (
    <div className="App">
      <h1>Jeu Memory</h1>
      <Button label="Restart" />
      <div className="card-flex">
        {shuffledImages.map((img, index) => (
          <Card key={index} image={img} onClick={() => handleCardClick(img)} />
        ))}
      </div>
    </div>
  );
}

export default App;
