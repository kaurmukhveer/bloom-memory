<div className="game-grid">
  {cards.map((card) => (
    <Card key={card.id} card={card} />
  ))}
</div>