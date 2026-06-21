function WinScreen({
  level,
  category,
  moves,
  playAgain
}) {

  return (
    <div className="win-screen">

      <h1>🎉 Journey Complete!</h1>

      <p>Theme: {category}</p>

      <p>Difficulty: {level}</p>

      <p>Moves: {moves}</p>

      <button
        className="primary-button"
        onClick={playAgain}
      >
        Play Again
      </button>

    </div>
  );
}

export default WinScreen;