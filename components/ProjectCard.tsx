type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-background border border-border text-body">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium mt-2 hover:underline">
          View Project →
        </a>
      )}
    </div>
  );
}
