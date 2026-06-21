function Card({ card }) {
  return (
    <button className="memory-card">
      {card.value}
    </button>
  );
}

export default Card;