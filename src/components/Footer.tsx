export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a href="#help" className="hover:text-slate-900">
            Help
          </a>
          <a href="#privacy" className="hover:text-slate-900">
            Privacy
          </a>
        </div>
        <p className="text-slate-500">© {new Date().getFullYear()} Aurora Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};
