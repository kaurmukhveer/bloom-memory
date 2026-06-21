function Card({ card, handleFlip }) {
  const isVisible = card.flipped || card.matched;

  return (
    <button
      className={`memory-card ${isVisible ? "visible-card" : "hidden-card"}`}
      onClick={() => handleFlip(card)}
      aria-label={isVisible ? `Card showing ${card.value}` : "Hidden memory card"}
    >
      {isVisible ? card.value : "?"}
    </button>
  );
}

export default Card;