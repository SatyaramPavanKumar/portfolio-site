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
  },
{
  title: "Quality Control (QC)",
  duration: "Apr 2024 - Apr 2024",
  role: "Software Developer",
  points: [
    "Developed a dynamic QC workflow system.",
    "Implemented hierarchical data flow using parent-child relationships.",
    "Enabled inspectors to redirect queries to relevant departments and officers.",
    "Built role-based status tracking and workflow history modules.",
    "Reduced manual ticket handling through automated workflow management."
  ]
},  {
    title: "ESIC Recovery Modules",
    duration: "Jun 2022 - Apr 2023",
    role: "Senior Software Developer",
    points: [
      "Developed and maintained recovery modules using ASP.NET 3.5, C#, and Visual Studio 2008.",
      "Supported high-availability ESIC applications with reliable system performance.",
      "Enhanced application features, performance, and system stability through regular updates.",
      "Performed debugging, issue fixing, and application maintenance."
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
>      <h2 style={{ color:"#FFFFFF", textDecoration:"underline" }}>Featured Enterprise Projects</h2>

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