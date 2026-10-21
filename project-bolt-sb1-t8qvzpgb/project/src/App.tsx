import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col relative overflow-hidden">
      {/* Corner registration marks */}
      <CornerMarks />

      {/* Navigation */}
      <nav className="relative z-10 px-6 sm:px-10 lg:px-16 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
          <span className="text-xs tracking-[0.3em] uppercase font-medium">AZ</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Index', 'Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-400 hover:text-black transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-light">{time || '--:--'}</span>
          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
        </div>
      </nav>

      {/* Divider */}
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-black/10 animate-line" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 lg:mb-14 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-black" />
          <span className="text-xs tracking-[0.3em] uppercase font-medium text-neutral-500">001 — Portfolio</span>
        </div>

        {/* Title */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-light leading-[1.05] tracking-tight text-[clamp(2.5rem,8vw,7.5rem)]">
            İnternet ve
            <br />
            <span className="font-medium">Arayüz</span> Tasarımı
          </h1>
        </div>

        {/* Abstract interface elements */}
        <div className="mt-12 lg:mt-20 grid grid-cols-12 gap-4 sm:gap-6 items-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {/* Geometric grid block */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-4">
            <div className="relative aspect-square w-full max-w-[280px]">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="100" cy="100" r="98" className="opacity-20" />
                <circle cx="100" cy="100" r="70" className="opacity-30" />
                <circle cx="100" cy="100" r="40" className="opacity-50" />
                <circle cx="100" cy="100" r="2.5" fill="currentColor" stroke="none" />
                <line x1="0" y1="100" x2="200" y2="100" className="opacity-20" />
                <line x1="100" y1="0" x2="100" y2="200" className="opacity-20" />
                <path d="M 100 30 A 70 70 0 0 1 170 100" strokeWidth="1" className="opacity-80 animate-draw" />
              </svg>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden sm:block sm:col-span-1 lg:col-span-4" />

          {/* Right info block */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-6 sm:pt-8">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">Designer</div>
              <div className="text-base font-medium">Alisher Zhalgas</div>
            </div>
            <div className="h-px w-16 bg-black/20" />
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">Discipline</div>
              <div className="text-sm font-light text-neutral-600">Interface · Web · Systems</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="relative z-10 px-6 sm:px-10 lg:px-16 py-6 border-t border-black/10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">© 2026 — Alisher Zhalgas</span>
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">N 43.25°</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">E 76.92°</span>
          </div>
        </div>
      </footer>

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}

function CornerMarks() {
  return (
    <>
      {[
        'top-3 left-3',
        'top-3 right-3',
        'bottom-3 left-3',
        'bottom-3 right-3',
      ].map((pos) => (
        <svg
          key={pos}
          className={`absolute ${pos} w-3 h-3 text-black/30 pointer-events-none z-20`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        >
          <line x1="6" y1="0" x2="6" y2="12" />
          <line x1="0" y1="6" x2="12" y2="6" />
        </svg>
      ))}
    </>
  );
}

export default App;
