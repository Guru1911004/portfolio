export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} GMT.SINGH. Built with Next.js, Tailwind CSS, & D3.js.
    </footer>
  );
}