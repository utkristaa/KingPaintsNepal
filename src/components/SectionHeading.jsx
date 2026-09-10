import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "left" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="v-section-head"
      style={align === "center" ? { margin: "0 auto 48px", textAlign: "center" } : undefined}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {label && (
        <motion.div variants={itemVariants} className="v-section-label">
          {label}
        </motion.div>
      )}
      <motion.h2 variants={itemVariants}>{title}</motion.h2>
      {description && (
        <motion.p variants={itemVariants}>{description}</motion.p>
      )}
    </motion.div>
  );
}
