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

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const checkPair = (img1, img2, idx1, idx2) => {
    if (img1 === img2 && idx1 !== idx2) {
      console.log('Pair found:', img1);
      return true;
    }if (idx1 === idx2) {
      console.log('Same index clicked:', idx1);
      return false;
    }
    else {
      console.log('No match:', img1, img2);
      return false;
    }
  };

  const startGame = () => {
    const shuffled = shuffleArray(images);
    setShuffledImages(shuffled);
    setSelectedCards([]);
    console.log('Images mélangées :', shuffled);
    console.log('Jeu lancé !');
  };

  useEffect(() => {
    startGame();
  }, []);

  const deleteCard = (path, index1, index2) => {
    console.log('Deleting cards:', path, index1, index2);
    const newImages = [...shuffledImages];
    newImages[index1] = null;
    newImages[index2] = null;
    setShuffledImages(newImages);
  }

  

  const handleCardClick = (path, index) => {
    console.log('Card clicked:', path);
    if (selectedCards.length === 2) return;

    const newSelection = [...selectedCards, { path, index }];
    console.log('New selection:', newSelection);
    setSelectedCards(newSelection);

    if (newSelection.length === 2) {
      const [card1, card2] = newSelection;

      if (checkPair(card1.path, card2.path, card1.index, card2.index)) {
        console.log('Correct pair!');
        setTimeout(() => {
          deleteCard(card1.path, card1.index, card2.index);
          setSelectedCards([]);
        }, 500);
      } else {
        console.log('Try again!');
        setTimeout(() => {
          setSelectedCards([]);
        }, 100);
      }
    }
  };

  return (
    <div className="App">
      <h1>Jeu Memory</h1>
      <Button label="Restart" onClick={startGame} />
      <div className="card-flex">
        {shuffledImages.map((img, index) =>
          img ? (
            <Card
              key={index}
              image={img}
              onClick={() => handleCardClick(img, index)}
            />
          ) : (
            <div key={index} className="card-placeholder" />
          )
        )}
      </div>
    </div>
  );
}

export default App;
