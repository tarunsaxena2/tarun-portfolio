import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground">
          Tarun Saxena
        </Link>
        <div className="hidden sm:flex gap-6 text-sm font-medium text-body">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
