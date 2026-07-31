import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tarun Saxena
        </Link>
        <div className="hidden sm:flex gap-8 text-sm font-medium text-body">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
