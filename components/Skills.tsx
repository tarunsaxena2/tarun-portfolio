const skills = {
  Languages: ["Python", "C", "JavaScript", "HTML5", "CSS"],
  "Frameworks & Libraries": ["Node.js", "Express.js", "Pandas", "NumPy", "Matplotlib"],
  Tools: ["GitHub", "VS Code", "PostgreSQL", "SQL", "Jupyter Notebook", "Google Colab"],
};

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
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills &amp; Certifications</span>
      </h2>

      <div className="mb-12 flex flex-col gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-sm px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <li key={cert} className="text-body text-sm flex items-center gap-2">
              <span className="text-success">✓</span> {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
