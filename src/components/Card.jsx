function Card({ card, handleFlip }) {
  return (
    <button
      className="memory-card"
      onClick={() => handleFlip(card)}
    >
      {card.flipped || card.matched ? card.value : "?"}
    </button>
  );
}

export default Card;