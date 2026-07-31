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
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-foreground mb-10">Skills &amp; Certifications</h2>

      <div className="mb-12 flex flex-col gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-sm px-4 py-2 rounded-full bg-card border border-border text-body">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Certifications</h3>
        <ul className="flex flex-col gap-2">
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
