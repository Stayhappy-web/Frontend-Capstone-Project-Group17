import "./videoSection.css";
import planetVideo from "../../assets/videos/planetvideo.mp4";
function VideoSection() {
  return (
    
    <section className="video-section">
        <div className="video-container">
            <video 
                 src={planetVideo}
                autoplay
                loop
                muted
                playsinline
                controls
                className="planet-video"
                />
        </div>
        <div className="video-text">
            <h2>How Planetary Data Helps Us Understand Our Space</h2>
            <p> Planetart science goes beyomg images. Comparing <span>mass, diameter,
                gravity and density</span> gives insight into into how planets
                form and behave.
            </p>
        </div>
    </section>
  );
}

export default VideoSection;