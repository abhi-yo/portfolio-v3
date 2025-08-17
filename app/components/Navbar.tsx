"use client";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-white/15 overflow-hidden">
          <img
            src="/profile.png"
            alt="Akshat Singh"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="leading-tight">
          <p className="text-xl sm:text-2xl text-gray-100 font-[620] tracking-[-0.015em]">
            Akshat Singh
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-xs sm:text-sm text-gray-500">Engineer</p>
            <a
              href="mailto:akshatsing11@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] text-emerald-200 hover:bg-emerald-500/15 hover:border-emerald-400/35 transition-colors"
              aria-label="Open for work"
            >
              <span className="relative inline-flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 badge-dot" />
              </span>
              Open for work
            </a>
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-6 text-sm">
        <a
          href="#projects"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </a>
        <a
          href="/blog"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
