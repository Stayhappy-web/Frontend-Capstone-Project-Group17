import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Have Questions About Planetary Science?</h2>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;