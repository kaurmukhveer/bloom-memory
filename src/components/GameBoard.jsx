import Card from "./Card";

function GameBoard({ cards, handleFlip, moves, feedback }) {
  const matchedCards = cards.filter((card) => card.matched).length;
  const totalPairs = cards.length / 2;
  const matchedPairs = matchedCards / 2;

  return (
    <section className="game-board">
      <div className="stats-bar">
        <span>Moves: {moves}</span>
        <span>Matches: {matchedPairs} / {totalPairs}</span>
      </div>
      <p className="feedback-message">
            {feedback}
    </p>

      <div className="game-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleFlip={handleFlip} />
        ))}
      </div>
    </section>
  );
}

export default GameBoard;