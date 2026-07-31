"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tarun Saxena
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "flex items-center gap-1.5 text-foreground font-semibold relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400"
                    : "flex items-center gap-1.5 text-body hover:text-foreground transition"
                }
              >
                {Icon && <Icon size={16} />}
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
