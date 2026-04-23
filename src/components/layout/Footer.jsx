import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Pavan</h3>
        <p>Senior .NET Full Stack Developer</p>
        <p>Building scalable enterprise solutions with passion.</p>

        <div className="footer-links">
          <a
            href="https://github.com/SatyaramPavanKumar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/satya-ram-5a0b7a1b8/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:Satyaram.9021@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Pavan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}