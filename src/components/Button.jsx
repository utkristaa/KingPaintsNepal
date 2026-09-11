import React from "react";
import { motion } from "framer-motion";

export default function Button({ variant = "primary", size = "md", children, icon: Icon, onClick, type = "button", as, href, target, rel, className: extraClass = "" }) {
  const className = `v-btn v-btn-${variant} ${size === "sm" ? "v-btn-sm" : ""} ${extraClass}`.trim();

  const springTransition = {
    type: "spring",
    stiffness: 420,
    damping: 24,
  };

  if (as === "a") {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={typeof children === "string" ? children : undefined}
        className={className}
        whileHover={{ scale: 1.025, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
      >
        {children}
        {Icon && <Icon size={16} strokeWidth={2.2} />}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={typeof children === "string" ? children : undefined}
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2.2} />}
    </motion.button>
  );
}
