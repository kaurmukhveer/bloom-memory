import { difficultyNames, categoryNames } from "../utils/displayNames";
import { levelConfig } from "../utils/cardData";

function WinScreen({ level, category, moves, playAgain }) {
  const totalPairs = levelConfig[level];
  const minimumMoves = totalPairs;
  const accuracy = Math.round((minimumMoves / moves) * 100);

  return (
    <div className="win-screen">
      <h1>🎉 Journey Complete!</h1>

      <p>Theme: {categoryNames[category]}</p>
      <p>Difficulty: {difficultyNames[level]}</p>
      <p>Moves: {moves}</p>
      <p>Accuracy: {accuracy}%</p>

      <button className="primary-button" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}

export default WinScreen;