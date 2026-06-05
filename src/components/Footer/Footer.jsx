import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

  <div className="footer-about">
    <h2>About</h2>
    <p>
      We're a collaborative team of developers working on a Solar Sytem Explorer project 
      built through the TS Academy programme.
    </p>
    <p>
      Team members: Chiamaka, [other names here].
    </p>
  </div>

  <div className="footer-links">
    <a href="https://amakandukwu.com/">Amaka</a>
    <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma</a>
    <a href="https://tsacademyonline.com/">TSAcademy</a>
    <a href="https://github.com/Stayhappy-web/Frontend-Capstone-Project-Group17.git">Group 17 Repository</a>
  </div>

  <div className="footer-bottom">
    <p>©2026 Design by Amaka & Ifeoma A.</p>
  </div>
  <div>
    <p>
      Built by GROUP 17. All rights reserved.
    </p>
    </div>
    <div>
    <p>
        TSAcademy
    </p>
  </div>

</footer>
  );
}

export default Footer;