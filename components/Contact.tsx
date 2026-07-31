export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <div className="bg-card border border-border rounded-2xl p-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <h2 className="relative text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <p className="relative text-body text-lg mb-8">
          Feel free to reach out for opportunities, collaborations, or just to say hello.
        </p>
        <div className="relative flex flex-wrap justify-center gap-4">
          <a href="mailto:saxenatarun272@gmail.com" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition">Email Me</a>
          <a href="https://www.linkedin.com/in/tarun-saxena-892935274/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-background hover:border-blue-500/50 transition">LinkedIn</a>
          <a href="https://github.com/tarunsaxena2" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-background hover:border-blue-500/50 transition">GitHub</a>
          <a href="https://www.hackerrank.com/profile/saxenatarun272" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-background hover:border-blue-500/50 transition">HackerRank</a>
        </div>
      </div>
    </section>
  );
}
