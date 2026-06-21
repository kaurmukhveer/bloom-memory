import Card from "./Card";

function GameBoard({ cards, handleFlip, moves }) {
  return (
    <section className="game-board">
      <h2>Memory Board</h2>
      <p>Moves: {moves}</p>

      <div className="game-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleFlip={handleFlip}
            moves={moves}
          
          />
        ))}
      </div>
    </section>
  );
}

export default GameBoard;