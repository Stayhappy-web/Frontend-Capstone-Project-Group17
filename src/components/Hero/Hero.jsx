import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
        <div className="hero-text">
      <h1>Explore Our Solar System Through Data</h1>
      <p>Understand the planets not just by name, but by measurable facts.
        From size and mass to gravity and density,this page
        breaks down the solar system in a clear,data-driven way.
      </p>
      <div className="hero-buttons">
      <button className="btn-primary">Explore the Data</button>
      <button className="btn-secondary">Contact Us</button>
      </div>
      </div>
      <div className="hero-image">
        <img src="https://cdn.pixabay.com/photo/2013/07/12/18/20/solar-system-154837_1280.png" alt="Solar System" />
      </div>
    
    </section>
  );
}

export default Hero;