import "../../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "APCRDA Urban Planning System",
    duration: "Apr 2025 - Present",
    role: "Senior Software Developer",
    points: [
      "Designed module workflows and database structures",
      "Optimized SQL queries and reduced downtime by 15%",
      "Handled client discussions and technical solution planning",
      "Worked on ASP.NET Framework and .NET Core modules"
    ]
  },
  {
    title: "Navy Mail Management System",
    duration: "Aug 2024 - Apr 2025",
    role: "Senior Software Developer",
    points: [
      "Built SignalR-based real-time notification system",
      "Implemented live mail and toaster alerts",
      "Led technical solution discussions",
      "Managed MMS and NOC Passport modules"
    ]
  }
];

export default function Projects() {
  return (
<motion.section
  id="projects"
  className="projects-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>      <h2>Featured Enterprise Projects</h2>

      {projects.map((project, index) => (
        <motion.div 
        className="project-card" 
  whileHover={{
    y: -10,
    scale: 1.02,
    boxShadow: "0 16px 32px rgba(0,0,0,0.3)"
  }}
  transition={{ duration: 0.25 }}>
          <h3>{project.title}</h3>
          <p><strong>{project.duration}</strong></p>
          <p>{project.role}</p>

          <ul>
            {project.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
  </motion.section>
  );
}