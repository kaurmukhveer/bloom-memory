import { useState } from "react";
import SetupScreen from "./components/SetupScreen";
import generateCards from "./utils/generateCards";

function App() {
  const [level, setLevel] = useState("easyCalm");
  const [category, setCategory] = useState("zenGarden");
  const [cards, setCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    const newCards = generateCards(level, category);
    setCards(newCards);
    setGameStarted(true);
  }

  return (
    <>
      {gameStarted ? (
        <main>
          <h1>Bloom Memory</h1>
          <p>Game started!</p>
          <p>Cards generated: {cards.length}</p>
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
    </>
  );
}

export default App;