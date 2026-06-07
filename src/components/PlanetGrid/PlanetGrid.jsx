import "./PlanetGrid.css";
import { useState, useEffect } from "react";

function PlanetsGrid() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load planet data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status-msg">Loading planets...</p>;
  if (error) return <p className="status-msg">{error}</p>;

  return (
    <section className="planets-section align_container">
      <div className="planets-header align_container">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="planets-grid align_container">
        {planets.map((item) => (
          <div className="planet-card" key={item.planet}>
            <figure>
              <img src={item.image} alt={item.planet} loading="lazy" />
              <figcaption>
                <strong className="planet-name">{item.planet}</strong>
                <span className="planet-distance">
                  {item.distanceFromSun} million km from Sun
                </span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanetsGrid;