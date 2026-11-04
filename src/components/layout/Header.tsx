import { useState } from "react";
import logo from "../../assets/images/LogoPET.svg";
import { navLinks } from "../../data/navLinks";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ContactButton({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#contato"
      onClick={onClick}
      className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-xs font-bold uppercase tracking-wide text-[#5a0f8a] transition hover:bg-purple-100"
    >
      Entre em contato
      <span className="flex size-9 items-center justify-center rounded-full bg-[#4a0e78] text-white transition group-hover:translate-x-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-4 z-50 text-white">
      <div className="flex h-16 items-center justify-between rounded-xl bg-linear-to-b from-[#8e00c8] to-[#5a0f8a] px-6 shadow-lg md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
        <a href="#inicio" className="flex items-center" aria-label="PET UFC Russas">
            <img src={logo} alt="PET UFC Russas" className="h-11 w-auto" />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold uppercase tracking-wide transition hover:text-purple-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <ContactButton />
        </div>

        <button
          type="button"
          className="text-2xl md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          className="mt-2 flex flex-col gap-4 rounded-xl bg-linear-to-b from-[#8e00c8] to-[#5a0f8a] px-6 py-6 shadow-lg md:hidden"
          aria-label="Principal"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold uppercase tracking-wide"
            >
              {label}
            </a>
          ))}
          <ContactButton onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
