import "./PlanetGrid.css";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

function PlanetGrid() {
  return (
    <section id="planet-grid" className="planet-grid-section">
      <h2>Visualizing the Differences Between Planets</h2>

      <div className="planet-grid">
        {planets.map((planet, index) => (
          <div className="planet-card" key={index}>
            <img src="/planet.jpg" alt="planet" />

            <h3>{planet}</h3>

            <p>Distance from Sun</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanetGrid;