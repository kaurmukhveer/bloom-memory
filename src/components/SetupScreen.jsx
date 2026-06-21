/**
 * @file SetupScreen.jsx
 * @description Dynamic setup screen catering to both Calm Seekers and Adventurous Risk-Takers.
 */

function SetupScreen({ level, setLevel, category, setCategory, startGame }) {
  return (
    <main className="setup-screen">
      <section className="setup-card">
        <p className="eyebrow">Bloom Memory: Dual Journeys</p>
        <h1>Choose Your Path</h1>
        <p className="intro">
          Looking for a peaceful mental sanctuary, or ready to risk it all in a chaotic memory blitz? Select the energy that matches your soul today.
        </p>

        {/* DUAL PATH DIFFICULTY */}
        <label>
          Select Your Stakes
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <optgroup label="✨ The Calm & Mindful Path">
              <option value="easyCalm">Peaceful Breeze — 3 Pairs</option>
              <option value="mediumCalm">Inner Balance — 6 Pairs</option>
              <option value="hardCalm">Mindful Mastery — 10 Pairs</option>
            </optgroup>
            <optgroup label="🔥 The High-Risk Adventure">
              <option value="easyRisk">Daredevil Warmup — 3 Pairs</option>
              <option value="mediumRisk">Extreme Challenger — 6 Pairs</option>
              <option value="hardRisk">Absolute Chaos — 10 Pairs</option>
            </optgroup>
          </select>
        </label>

        {/* DUAL PATH THEMES */}
        <label>
          Select Your Realm
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <optgroup label="🍃 Serene Realms (Calm)">
              <option value="zenGarden">Zen Garden Oasis</option>
              <option value="gentleCreatures">Gentle Creatures Meadow</option>
            </optgroup>
            <optgroup label="🧭 Perilous Realms (Adventurous)">
              <option value="volcanicBlitz">Volcanic Blitz</option>
              <option value="ancientCrypts">Ancient Cryptographs</option>
            </optgroup>
          </select>
        </label>

        <button className="primary-button" onClick={startGame}>
          Begin Journey
        </button>
      </section>
    </main>
  );
}

export default SetupScreen;
