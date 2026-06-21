import Card from "./Card";

function GameBoard({ cards, handleFlip }) {
  return (
    <section className="game-board">
      <h2>Memory Board</h2>

      <div className="game-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleFlip={handleFlip}
          />
        ))}
      </div>
    </section>
  );
}

export default GameBoard;