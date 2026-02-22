"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type CardColor = "blue" | "orange" | "dark" | "teal";

interface FloatingCardProps {
  color: CardColor;
  rotation: number;
  icon: LucideIcon;
  label: string;
  delay?: number;
  className?: string;
}

const colorMap: Record<CardColor, { bg: string; text: string; iconBg: string }> = {
  blue: {
    bg: "bg-card-blue",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  orange: {
    bg: "bg-card-orange",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  dark: {
    bg: "bg-card-dark",
    text: "text-white",
    iconBg: "bg-white/15",
  },
  teal: {
    bg: "bg-card-teal",
    text: "text-white",
    iconBg: "bg-white/20",
  },
};

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  delay = 0,
  className = "",
}: FloatingCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 shadow-lg cursor-default select-none ${colors.bg} ${colors.text} ${className}`}
      style={{ rotate: `${rotation}deg` }}
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.25 },
      }}
    >
      <span
        className={`flex items-center justify-center w-9 h-9 rounded-full ${colors.iconBg}`}
      >
        <Icon size={20} strokeWidth={2.2} />
      </span>
      <span className="font-bold text-lg tracking-wide">{label}</span>
    </motion.div>
  );
}
