import { useState, useEffect } from "react";
import "./PlanetGrid.css";

const API_URL = "https://your-api-url-here.com/planets"; // 🔁 swap when you get it

const FALLBACK_PLANETS = [
  { planet: "Mercury", distanceFromSun: 57.9, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg" },
  { planet: "Venus", distanceFromSun: 108.2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg" },
  { planet: "Earth", distanceFromSun: 149.6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg" },
  { planet: "Mars", distanceFromSun: 227.9, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg" },
  { planet: "Jupiter", distanceFromSun: 778.5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg" },
  { planet: "Saturn", distanceFromSun: 1432, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg" },
  { planet: "Uranus", distanceFromSun: 2867, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg" },
  { planet: "Neptune", distanceFromSun: 4515, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg" },
];

function PlanetGrid() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("API failed");
        const data = await res.json();
        setPlanets(data);
      } catch (err) {
        console.warn("Using fallback data:", err.message);
        setPlanets(FALLBACK_PLANETS);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <section id="planet-grid" className="planet-grid-section">
      <div className="planet-grid-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Our planet is our home but the universe contains multitudes. This section gives you a glimpse into the different scales of our solar system.</p>
      </div>
      {loading ? (
        <p className="loading">Loading planets...</p>
      ) : (
        <div className="planet-grid">
          {planets.map((p, index) => (
            <figure className="planet-card" key={index}>
              <img src={p.image} alt={p.planet} />
              <figcaption>
                <h3>{p.planet}</h3>
                <p>{p.distanceFromSun} million km from Sun</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

export default PlanetGrid;