"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "B.Tech CSE, Hindustan College of Science and Technology, Mathura",
  },
  {
    icon: Code,
    title: "Frontend & Backend",
    desc: "HTML, CSS, JavaScript, Node.js, Express.js — building real, working products",
  },
  {
    icon: Database,
    title: "Data & ML",
    desc: "Python, Scikit-learn, EDA — turning raw data into useful insights",
  },
  {
    icon: Briefcase,
    title: "Real-World Impact",
    desc: "Contributed to railway department systems used in production",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
        </motion.h2>
        <p className="text-body text-lg leading-relaxed mb-12 max-w-2xl">
          I&apos;m a Computer Science undergraduate who enjoys building real-world systems — from
          web apps to ML-powered tools. I care about writing clean code and solving problems that
          actually matter to people using the product.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 flex gap-4 hover:border-blue-500/40 transition"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
