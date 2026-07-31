"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" onClick={() => setOpen(false)}>
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
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-body hover:text-foreground transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
