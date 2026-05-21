import profileimage from "../../assets/7.png"
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <motion.section
      id="hero"
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
      style={{
  minHeight: "100vh",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "120px 40px 60px",
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "#60a5fa",
  gap: "40px",
      }}
    >
      <div style={{     maxWidth: "600px",    width: "100%",    flex: 1,}}>
        <h1 style={{ fontSize: "clamp(36px, 8vw, 64px)", marginBottom: "20px" ,lineHeight: "1.1", }}>
          Hi, I'm Satyaram Pavan Kumar Pothina
        </h1>

        <h2 style={{  fontSize: "clamp(20px, 5vw, 32px)",    marginBottom: "20px",    lineHeight: "1.3", }}>
          Senior .NET Full Stack Developer
        </h2>

        <p style={{ fontSize: "clamp(16px, 4vw, 20px)",    lineHeight: "1.8", }}>
          4+ years of building scalable enterprise applications,
          APIs, workflow systems and real-time business solutions.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            border: "none",
            borderRadius: "10px",
            background: "#3b82f6",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          View Experience
        </button>
      </div>

      <img
        src={profileimage}
        alt="pavan profile"
        style={{
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            width: "100%",
            maxWidth: "350px",
            height: "auto",
        }}
      />
    </motion.section>
  );
}