type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-transparent transition overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition duration-300 pointer-events-none"></div>
      <h3 className="relative text-xl font-semibold text-foreground">{title}</h3>
      <p className="relative text-body text-sm leading-relaxed">{description}</p>
      <div className="relative flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="relative text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-sm font-semibold mt-2 hover:underline w-fit">
          View Project →
        </a>
      )}
    </div>
  );
}
