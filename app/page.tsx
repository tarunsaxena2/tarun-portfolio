"use client";
import { motion } from "framer-motion";
import { Mail, FileDown, Link as LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background text-foreground px-6 py-36 min-h-[85vh]">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl text-center flex flex-col items-center gap-6"
      >
        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for opportunities
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tarun Saxena
        </h1>
        <p className="text-lg sm:text-xl text-body max-w-xl">
          Web Developer crafting real-world systems powered by AI &amp; Data
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition">
            <Mail size={18} /> Contact Me
          </a>
          <a href="/resume.pdf" className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card hover:border-blue-500/50 transition">
            <FileDown size={18} /> Resume
          </a>
          <a href="https://github.com/tarunsaxena2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card hover:border-blue-500/50 transition">
            <LinkIcon size={18} /> GitHub
          </a>
        </div>

        <div className="flex gap-10 mt-10 pt-8 border-t border-border w-full justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">4+</p>
            <p className="text-body text-sm">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-body text-sm">Internships</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">6+</p>
            <p className="text-body text-sm">Certifications</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
