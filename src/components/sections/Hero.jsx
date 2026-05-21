import profileimage from "../../assets/7.png";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const startDate = new Date("2019-02-13T10:56:01");

  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const diff = now - startDate;

    // Target values
    const targetYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const targetMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const targetDays = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const targetHours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const targetMinutes = Math.floor(diff / (1000 * 60)) % 60;
    const targetSeconds = Math.floor(diff / 1000) % 60;

    let current = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    // Slow ramp-up animation (ease-in)
    const rampInterval = setInterval(() => {
      current.years = Math.min(current.years + 1, targetYears);
      current.months = Math.min(current.months + 1, targetMonths);
      current.days = Math.min(current.days + 1, targetDays);
      current.hours = Math.min(current.hours + 2, targetHours); // faster for hours
      current.minutes = Math.min(current.minutes + 5, targetMinutes); // faster for minutes
      current.seconds = Math.min(current.seconds + 10, targetSeconds); // fastest for seconds

      setExperience({ ...current });

      // Once ramp-up reaches target → switch to normal ticking
      if (
        current.years === targetYears &&
        current.months === targetMonths &&
        current.days === targetDays &&
        current.hours === targetHours &&
        current.minutes === targetMinutes &&
        current.seconds === targetSeconds
      ) {
        clearInterval(rampInterval);

        // Normal ticking every second
        setInterval(() => {
          const now = new Date();
          const diff = now - startDate;

          const seconds = Math.floor(diff / 1000) % 60;
          const minutes = Math.floor(diff / (1000 * 60)) % 60;
          const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
          const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
          const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
          const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

          setExperience({ years, months, days, hours, minutes, seconds });
        }, 1000);
      }
    }, 150); // slower interval for smoother ramp-up
  }, []);

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
      <div style={{ maxWidth: "600px", width: "100%", flex: 1 }}>
        <h1 style={{ fontSize: "clamp(36px, 8vw, 64px)", marginBottom: "20px", lineHeight: "1.1", color: "#FFFFFF" }}>
          Hi, I'm Satyaram Pavan Kumar Pothina
        </h1>

        <h2 style={{ fontSize: "clamp(20px, 5vw, 32px)", marginBottom: "20px", lineHeight: "1.3", color: "#FFFFFF" }}>
          Senior .NET Full Stack Developer
        </h2>

        <p style={{ fontSize: "clamp(16px, 4vw, 20px)", lineHeight: "1.8", fontFamily: "monospace", color: "#00ffcc", textDecoration:"underline" }}>
          {experience.years}y {experience.months}m {experience.days}d {experience.hours}h {experience.minutes}m{" "}
          {experience.seconds}s of building scalable enterprise applications, APIs, workflow systems and real-time
          business solutions.
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
