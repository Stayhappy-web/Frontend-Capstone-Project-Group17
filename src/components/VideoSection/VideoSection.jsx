import "./videoSection.css";
function VideoSection() {
  return (
    <section className="videoSection">
        <div className="video-box">
            <video controls>
                <source src="https://www.youtube.com/embed/1Yj8nqQWz9o" type="video/mp4" />
            </video>
        </div>
        <div className="video-text">
            <h2>How Planetary Data Helps Us Understand Our Space</h2>
            <p> Planetart science goes beyomg images. Comparing mass, diameter,
                gravity and density gives insight into into how planets
                form and behave.
            </p>
        </div>
    </section>
  );
}

export default VideoSection;