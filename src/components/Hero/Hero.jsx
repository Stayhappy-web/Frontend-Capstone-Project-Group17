import "./Hero.css";
import logo from "../../assets/logos/logo.png";
import heroPlanet from "../../assets/images/heroplanet.png";



function Hero() {
  return (
    <section className="hero">
      
       {/* Hero Content*/}
      <div className="container hero-content">

          {/*Left Text*/}
        <div className="hero-text">

          <h1>
            Explore Our Solar 
            <br />
            System Through Data
          </h1>

          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>

          <div className="hero-buttons">
            <a href="#facts-table" className="explore-btn">
            <button className="btn-primary">
              Explore The Data
            </button>
            </a>
            <a href="#contact" className="contact-btn">
            <button className="btn-secondary">
              Contact Us
            </button>
            </a>
          </div>
        </div>

          {/*Right Image*/}
        <div className="hero-image">
          <img src={heroPlanet} alt=" Solar planet" />
        </div>
      </div>
    </section>

  );
}

export default Hero;