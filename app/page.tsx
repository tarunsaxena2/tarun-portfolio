import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background text-foreground px-6 py-36">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-2xl text-center flex flex-col items-center gap-6">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300">Available for opportunities</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tarun Saxena
          </h1>
          <p className="text-lg sm:text-xl text-body max-w-xl">
            Web Developer crafting real-world systems powered by AI &amp; Data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition">Contact Me</a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card hover:border-blue-500/50 transition">Download Resume</a>
            <a href="https://github.com/tarunsaxena2" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-card hover:border-blue-500/50 transition">View GitHub</a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
