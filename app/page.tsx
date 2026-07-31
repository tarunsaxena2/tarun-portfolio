import About from "../components/About";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col items-center justify-center bg-background text-foreground px-6 py-32">
        <div className="max-w-2xl text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Tarun Saxena
          </h1>
          <p className="text-lg sm:text-xl text-body">
            Web Developer | Building Real-World Systems with AI &amp; Data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition">
              Contact Me
            </a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card transition">
              Download Resume
            </a>
            <a href="https://github.com/tarunsaxena2" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card transition">
              View GitHub
            </a>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
