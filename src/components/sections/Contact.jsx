import "../../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section"
    initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.6 }}
>
      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-card">
        <p><strong>Phone / WhatsApp:</strong> <a href="tel:+918686164221">+91 8686164221</a></p>

        <p><strong>Email:</strong> <a href="mailto:Satyaram.9021@gmail.com">Satyaram.9021@gmail.com</a></p>

        <p>
          <strong>Address:</strong><br />
          5-6-59/32-5 Rajeev Sharma Nagar,<br />
          Chitti Nagar, Vijayawada - 520001
        </p>

        <p>
          <strong>Naukri:</strong><br />
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noreferrer"
          >
            View Naukri Profile
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong><br />
          <a
            href="https://www.linkedin.com/in/satya-ram-5a0b7a1b8/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>
        </p>

        <p>
          <strong>GitHub:</strong><br />
          <a
            href="https://github.com/SatyaramPavanKumar"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </p>
      </div>
    </section>
  );
}