import { useState, useEffect } from "react";
import SetupScreen from "./components/SetupScreen";
import generateCards from "./utils/generateCards";
import GameBoard from "./components/GameBoard";
import WinScreen from "./components/WinScreen";

function App() {
  const [level, setLevel] = useState("easyCalm");
  const [category, setCategory] = useState("zenGarden");
  const [cards, setCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  function startGame() {
    const newCards = generateCards(level, category);
    setCards(newCards);
    setGameStarted(true);
  }

  function handleFlip(clickedCard) {

  if (clickedCard.flipped || clickedCard.matched) {
    return;
  }

  const updatedCards = cards.map((card) =>
    card.id === clickedCard.id
      ? { ...card, flipped: true }
      : card
  );

  setCards(updatedCards);

  setFlipped([...flipped, clickedCard]);
}


function playAgain() {
  setGameStarted(false);
  setGameWon(false);
  setCards([]);
  setFlipped([]);
  setMoves(0);
}


useEffect(() => {

  if (flipped.length !== 2) {
    return;
  }

  setMoves((m) => m + 1);

  const [first, second] = flipped;

  if (first.value === second.value) {

    const updatedCards = cards.map((card) =>
      card.value === first.value
        ? { ...card, matched: true }
        : card
    );

    setCards(updatedCards);

    setFlipped([]);

  } else {

    setTimeout(() => {

      const updatedCards = cards.map((card) =>
        card.id === first.id || card.id === second.id
          ? { ...card, flipped: false }
          : card
      );

      setCards(updatedCards);

      setFlipped([]);

    }, 1000);

  }

}, [flipped]);

useEffect(() => {

  if (cards.length === 0) return;

  const allMatched = cards.every(
    (card) => card.matched
  );

  if (allMatched) {
    setGameWon(true);
  }

}, [cards]);

 return (
  <div className={`app-container theme-${category}`}>

    {gameWon ? (

      <WinScreen
        level={level}
        category={category}
        moves={moves}
        playAgain={playAgain}
      />

    ) : gameStarted ? (

      <main className="game-container">

        <h1 className="game-title">
          🌿 Bloom Memory
        </h1>

        <GameBoard
          cards={cards}
          handleFlip={handleFlip}
          moves={moves}
        />

      </main>

    ) : (

      <SetupScreen
        level={level}
        setLevel={setLevel}
        category={category}
        setCategory={setCategory}
        startGame={startGame}
      />

    )}

  </div>
);

  
}

export default App;