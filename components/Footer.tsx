export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-body text-sm">
      Built with <span className="text-red-400">♥</span> by Tarun Saxena — © {new Date().getFullYear()}
    </footer>
  );
}
