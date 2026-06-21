/**
 * @file generateCards.js
 * @description Generates, duplicates, and securely shuffles a deck of game cards 
 * based on the chosen archetype difficulty track and theme realm.
 */

import { cardData, levelConfig } from "./cardData";

export default function generateCards(level, category) {
  // 1. Get the correct number of pairs for the chosen track
  const pairCount = levelConfig[level];

  // 2. Extract the exact amount of theme emojis needed
  const values = cardData[category].slice(0, pairCount);

  // 3. Duplicate and map into game state objects
  const cards = [...values, ...values].map((value, index) => ({
    id: index,
    value,
    flipped: false,
    matched: false
  }));

  // 4. Fisher-Yates Shuffle Engine (Provides a perfectly unbiased, random distribution)
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
