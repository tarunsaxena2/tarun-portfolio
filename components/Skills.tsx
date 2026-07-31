"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Award } from "lucide-react";

const skills = [
  { icon: Code2, category: "Languages", items: ["Python", "C", "JavaScript", "HTML5", "CSS"] },
  { icon: Layers, category: "Frameworks & Libraries", items: ["Node.js", "Express.js", "Pandas", "NumPy", "Matplotlib"] },
  { icon: Wrench, category: "Tools", items: ["GitHub", "VS Code", "PostgreSQL", "SQL", "Jupyter Notebook", "Google Colab"] },
];

const certifications = [
  "Data Structure Using C — RCPL",
  "Data Structure — NIET",
  "Web Development — Coursera",
  "Software Engineer — HackerRank",
  "Learning Management System — Infotact Solutions",
  "Generative AI & AI Native Development — PickIAI",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-10"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills &amp; Certifications</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {skills.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 hover:border-blue-500/40 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-foreground font-semibold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Award size={20} className="text-white" />
            </div>
            <h3 className="text-foreground font-semibold">Certifications</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <li key={cert} className="text-body text-sm flex items-center gap-2">
                <span className="text-success">✓</span> {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
