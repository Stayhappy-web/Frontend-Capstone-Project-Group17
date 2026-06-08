import "./VideoSection.css";
import planetVideo from "../../assets/videos/planetvideo.mp4";
function VideoSection() {
  return (
    
    <section className="video-section">
        <div className="container video-container">
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
            <h2>How Planetary Data Helps Us </h2>
            <h2>Understand Our Space </h2>
            <p> Planetary science goes beyond images. Comparing <span>mass</span> <span>diameter</span>, <span>gravity</span> and <span>density</span>, we gain insight into how planets form, behave, and interact within the solar system.
            </p>
        </div>
    </section>
  );
}

export default VideoSection;