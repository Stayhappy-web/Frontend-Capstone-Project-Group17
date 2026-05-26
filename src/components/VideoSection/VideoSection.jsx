function VideoSection() {
  return (
    <section className="videoSection">
      <h2>Watch Our Video</h2>
      <video controls>
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoSection;