"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-300 pointer-events-none"></div>

      <div className="relative flex items-center justify-between">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
          <Code2 size={18} className="text-white" />
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-body hover:text-blue-400 transition">
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <h3 className="relative text-xl font-semibold text-foreground">{title}</h3>
      <p className="relative text-body text-sm leading-relaxed">{description}</p>
      <div className="relative flex flex-wrap gap-2 mt-auto pt-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
