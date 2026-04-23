import "../../styles/interests.css";
import { motion } from "framer-motion";

const interests = [
  {
    title: "Cloud & Azure Solutions",
    description:
      "Strong interest in designing cloud-ready applications using Azure services, scalable deployments, and enterprise-grade infrastructure.",
  },
  {
    title: "Single Codebase Cross-Platform Development",
    description:
      "Passionate about building applications from a single codebase that seamlessly support iOS, Android, web, tablet, and desktop platforms.",
  },
  {
    title: "Security-Centric System Development",
    description:
      "Highly interested in designing secure enterprise systems, access-controlled workflows, authentication modules, and mission-critical applications.",
  },
  {
    title: "Enterprise Architecture",
    description:
      "Focused on scalable module design, maintainable code structures, API-first architecture, and future-proof system design.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="interests-section">
      <h2 className="interests-title">Technical Interests & Future Focus</h2>

      <motion.div
       className="interests-grid"
       whileHover={{ y: -8, scale: 1.02 }}
       transition={{ duration: 0.2 }}
        >
        {interests.map((item, index) => (
          <div className="interest-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}