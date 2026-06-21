# Bloom Memory

Bloom Memory is a React-based memory matching game developed for **SEG 3125 – Analysis and Design of User Interfaces** at the **University of Ottawa**.

The game challenges players to match pairs of cards while testing memory and concentration. Players can choose between two different personas and gameplay styles:

* **Calm Path**

  * Peaceful Breeze
  * Inner Balance
  * Mindful Mastery
  * Themes: Zen Garden Oasis, Gentle Creatures Meadow

* **Adventure Path**

  * Daredevil Warmup
  * Extreme Challenger
  * Absolute Chaos
  * Themes: Volcanic Blitz, Ancient Cryptographs

---

## Features

* Multiple difficulty levels
* Multiple themes
* Randomized card generation
* Card matching mechanics
* Move counter
* Match tracking
* Feedback messages
* Win screen with statistics
* Responsive design
* Theme-based visual styling

---

## Technologies Used

* React
* Vite
* JavaScript
* CSS

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/kaurmukhveer/bloom-memory.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Design Considerations

The interface was designed to support two different user personas:

### Calm Seeker

A detail-oriented user who prefers a relaxing and peaceful experience. Soft colors, nature-inspired themes, and clean layouts were used to create a calming atmosphere.

### Adventurous Risk-Taker

A user who enjoys challenge and excitement. Darker color palettes, higher visual contrast, and adventure-themed environments were used to create a more energetic experience.

The design incorporates several UI/UX principles including:

* Visual Hierarchy
* Contrast
* Balance
* Negative Space
* Consistency
* Gestalt Principles:

  * Similarity
  * Proximity
  * Figure-Ground
  * Continuity
  * Closure

---

## Manual Test Cases

| Test Case | Steps | Expected Result | Status |
|---|---|---|---|
| Start game with Easy level | Select Peaceful Breeze and Zen Garden Oasis, click Begin Journey | Game board appears with 6 hidden cards | Pass |
| Start game with Medium level | Select Inner Balance, click Begin Journey | Game board appears with 12 hidden cards | Pass |
| Start game with Hard level | Select Mindful Mastery, click Begin Journey | Game board appears with 20 hidden cards | Pass |
| Theme selection works | Select each theme before starting the game | Background, card colors, and visual style change based on selected theme | Pass |
| Card flip works | Click one hidden card | Card reveals its emoji | Pass |
| Mismatch behavior works | Click two cards that do not match | Both cards hide again after a short delay and feedback says “Try Again” | Pass |
| Match behavior works | Click two cards with the same emoji | Cards remain visible and feedback says “Match Found” | Pass |
| Move counter works | Flip two cards | Move count increases by 1 | Pass |
| Match counter works | Match one pair | Match counter increases by 1 | Pass |
| Win screen appears | Match all pairs | Journey Complete screen appears with theme, difficulty, moves, accuracy, and Play Again button | Pass |
| Play Again works | Click Play Again on the win screen | User returns to setup screen and game state resets | Pass |
| Responsive layout works | Resize browser window | Cards and layout remain usable and readable | Pass |
| Accessibility basics | Use keyboard Tab key | Buttons and cards receive visible focus outline | Pass |

---

## AI Acknowledgement

This project was designed, implemented, and tested by the author.

Artificial Intelligence tools, including ChatGPT, were used as learning and development aids for:

* Brainstorming game concepts
* Reviewing React implementation approaches
* Understanding React Hooks (`useState`, `useEffect`)
* Receiving UI/UX design suggestions
* Reviewing CSS styling ideas
* Debugging and troubleshooting code issues

All final design decisions, implementation choices, code integration, testing, and submission preparation were completed and verified by the author.

---

## Author

**Mukhveer Kaur**
University of Ottawa
SEG 3125 – Analysis and Design of User Interfaces


