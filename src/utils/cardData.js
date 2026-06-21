/**
 * @file gameConfig.js
 * @description Tailored game assets and difficulties split between two player archetypes:
 * - Zen/Calm Mode (Polite, relaxing, peaceful)
 * - Chaos/Adventure Mode (High stakes, dangerous, thrilling)
 */

export const cardData = {
  // --- CALM & POLITE THEMES ---
  zenGarden: ["🌸", "🍵", "🧘", "🪷", "🍃", "🪵", "🎋", "🦢", "⛲", "☁️"],
  gentleCreatures: ["🐑", "🐰", "🦌", "🐨", "🦥", "🐼", "🦋", "🕊️", "🐈", "🐥"],

  // --- ADVENTUROUS RISK-TAKER THEMES ---
  volcanicBlitz: ["🌋", "🌶️", "🦂", "🌵", "💥", "🔥", "🦈", "🧬", "☄️", "⚡"],
  ancientCrypts: ["🔱", "⚔️", "🏴‍☠️", "🔮", "🎭", "🐉", "👑", "🧿", "🧭", "🏹"]
};

export const levelConfig = {
  // Calm Track
  easyCalm: 3,       // Peaceful Breeze
  mediumCalm: 6,     // Inner Balance
  hardCalm: 10,      // Mindful Mastery

  // Adventurous Track
  easyRisk: 3,       // Daredevil Warmup
  mediumRisk: 6,     // Extreme Challenger
  hardRisk: 10       // Absolute Chaos
};
