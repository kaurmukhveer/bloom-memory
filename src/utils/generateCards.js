import { cardData, levelConfig } from "./cardData";

export default function generateCards(level, category) {

  const pairCount = levelConfig[level];

  const values = cardData[category].slice(0, pairCount);

  const cards = [...values, ...values].map((value, index) => ({
    id: index,
    value,
    flipped: false,
    matched: false
  }));

  return cards.sort(() => Math.random() - 0.5);
}