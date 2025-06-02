import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Message from './components/Message/Message';

const images = [
  '/assets/emoji_1.png',
  '/assets/emoji_2.png',
  '/assets/emoji_3.png',
  '/assets/emoji_4.png',
  '/assets/emoji_1.png',
  '/assets/emoji_2.png',
  '/assets/emoji_3.png',
  '/assets/emoji_4.png'
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
  const [message, setMessage] = useState({ text: '', show: false });

  // Fonction pour afficher un message temporaire
  const showMessage = (text, duration = 1500) => {
    setMessage({ text, show: true });
    setTimeout(() => {
      setMessage({ text: '', show: false });
    }, duration);
  };

  const checkPair = (img1, img2, idx1, idx2) => {
    if (img1 === img2 && idx1 !== idx2) {
      return true;
    }
    return false;
  };

  const startGame = () => {
    const shuffled = shuffleArray(images);
    setShuffledImages(shuffled);
    setSelectedCards([]);
  };

  useEffect(() => {
    startGame();
  }, []);

  const deleteCard = (path, index1, index2) => {
    const newImages = [...shuffledImages];
    newImages[index1] = null;
    newImages[index2] = null;
    setShuffledImages(newImages);
  };

  const handleCardClick = (path, index) => {
    if (selectedCards.length === 2) return;

    const newSelection = [...selectedCards, { path, index }];
    setSelectedCards(newSelection);

    if (newSelection.length === 2) {
      const [card1, card2] = newSelection;

      if (checkPair(card1.path, card2.path, card1.index, card2.index)) {
        showMessage('Correct!', 1000);
        setTimeout(() => {
          deleteCard(card1.path, card1.index, card2.index);
          setSelectedCards([]);
        }, 500);
      } else {
        showMessage('Try Again', 1500);
        setTimeout(() => {
          setSelectedCards([]);
        }, 1500);
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
            flipped={selectedCards.some(card => card.index === index)}
            onClick={() => handleCardClick(img, index)}
          />
          ) : (
            <div key={index} className="card-placeholder" />
          )
        )}
      </div>
      <Message text={message.text} show={message.show} />
    </div>
  );
}

export default App;
