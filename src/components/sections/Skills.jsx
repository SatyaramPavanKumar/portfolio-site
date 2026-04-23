import "../../styles/skills.css";
import { motion } from "framer-motion";
const skillCategories = [
  {
    title: "Programming Languages",
    skills: "C#, JavaScript, SQL (T-SQL, PL/SQL)",
  },
  {
    title: "Web Frameworks & Tech",
    skills: "ASP.NET Core, ASP.NET 4.8/3.5, SignalR, Entity Framework, LINQ",
  },
  {
    title: "Front-End Development",
    skills: "HTML5, CSS3, Bootstrap, jQuery, Ajax, Razor Pages, Angular (Learning), React.js (Learning)",
  },
  {
    title: "Databases",
    skills: "MSSQL, Oracle SQL",
  },
  {
    title: "API Development",
    skills: "RESTful APIs, WebHooks, SOAP Web Services",
  },
  {
    title: "IDE",
    skills: "Visual Studio (2008, 2015, 2022)",
  },
  {
    title: "Deployment & Hosting",
    skills: "IIS, Git, TFS, CI/CD, Docker, Kubernetes",
  },
  {
    title: "Cloud & Tools",
    skills: "Azure Fundamentals, Postman, Swagger, GitLab CI/CD",
  },
];

export default function Skills() {
  return (
    <motion.section
  id="skills"
  className="skills-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>
      <h2 className="skills-title">Technical Expertise</h2>

      <motion.div 
      className="skills-grid"
      whileHover={{
    y: -8,
    scale: 1.02
  }}
  transition={{ duration: 0.2 }}
      >
        {skillCategories.map((item, index) => (
          <div className="skill-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.skills}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}