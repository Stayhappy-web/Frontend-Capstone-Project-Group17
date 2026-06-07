 import "./ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vepvtp9",
        "template_fow8q9e",
        e.target,
        "iw5dCO-oNpRML_x-a"
      )
      .then(() => {
        return emailjs.sendForm(
          "service_vepvtp9",
          "template_9ict8m2",
          e.target,
          "iw5dCO-oNpRML_x-a"
        );
      })
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Have Questions About Planetary Science?</h2>
        <p>
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we'll get back to you.
        </p>
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="name">Full Name<span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number<span className="required">*</span></label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Please enter a valid phone number."
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              maxLength={100}
              required
            ></textarea>
            <span className="char-count">100 characters</span>
          </div>

        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;