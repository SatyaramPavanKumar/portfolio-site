import "../../styles/experience.css";
import { motion } from "framer-motion";
const experiences = [
  {
    date: "Feb 2019 - Apr 2022",
    company: "Infinity Idea Technologies | Vizag",
    role: "Started as Intern → Jr Developer",
  },
  {
    date: "Jun 2022 - Jan 2023",
    company: "GVR InfoSystems | Hyderabad",
    role: "Software Engineer",
  },
  {
    date: "Apr 2023 - Apr 2024",
    company: "Siyanda Info Tech | Vizag",
    role: "Software Developer",
  },
  {
    date: "Aug 2024 - Apr 2025",
    company: "ACS Technologies Limited | Kochi",
    role: "Senior Software Developer",
  },
  {
    date: "Apr 2025 - Present",
    company: "Entro Labs IT Solutions Pvt Ltd | Vijayawada",
    role: "Sr. Software Developer",
  },
];

export default function Experience() {
  return (
<motion.section
  id="experience"
  className="timeline-section"
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
      <h2 className="timeline-title">Career Journey</h2>

      <motion.div className="timeline"
      
      whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        >
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.date}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}