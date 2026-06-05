import "./ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovtkqc7",
        "template_xhnorpf",
        e.target,
        "MqCzEWBQSUOC0JH73"
      )
      .then(() => {
        return emailjs.sendForm(
          "service_ovtkqc7",
          "template_thdg5mi",
          e.target,
          "MqCzEWBQSUOC0JH73"
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
      <h2>Have Questions About Planetary Science?</h2>
      
      <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
Reach out and we’ll get back to you</p>
      
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
        ></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  
  );
}

export default ContactForm;