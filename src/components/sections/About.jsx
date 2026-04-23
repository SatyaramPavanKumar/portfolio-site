import "../../styles/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about"
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}>
      <h2 className="about-title">Professional Summary</h2>

      <div className="about-container">
        <div className="about-content">
          <p>
            Senior .NET Developer with 7 years of experience in designing,
            developing, and maintaining scalable enterprise web applications
            using C#, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework,
            and SQL Server / Oracle.
          </p>

          <p>
            Strong experience in end-to-end application delivery including
            requirement analysis, system design, API architecture,
            database schema design, performance optimization,
            and IIS deployment.
          </p>

          <p>
            Hands-on exposure to module-level architecture decisions,
            code reviews, client interactions, and technical solution
            planning for enterprise-grade government and high-security applications.
          </p>

          <p>
            Currently expanding expertise in Angular, React.js,
            Docker, Kubernetes fundamentals, and CI/CD practices
            to support cloud-ready and containerized deployments.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>7+ Years</h3>
            <p>Enterprise Experience</p>
          </div>

          <div className="highlight-card">
            <h3>.NET Expert</h3>
            <p>Backend + Full Stack</p>
          </div>

          <div className="highlight-card">
            <h3>Architecture</h3>
            <p>Scalable System Design</p>
          </div>

          <div className="highlight-card">
            <h3>Cloud Ready</h3>
            <p>CI/CD + Containers</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}