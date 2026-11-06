import type { Pillar } from "../../data/about";

function ArrowBadge() {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-b from-[#a100d6] to-[#5a0f8a] text-white shadow-sm transition group-hover:translate-x-1">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function PillarCard({
  icon,
  prefix,
  highlight,
  text,
  items,
}: Pillar) {
  return (
    <article className="flex flex-col items-center px-6 py-10 text-center md:px-10">
      <img src={icon} alt="" className="size-24 object-contain md:size-28" />

      <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wide md:text-2xl">
        {prefix} <span className="text-pet-accent">{highlight}</span>
      </h3>

      {text && (
        <p className="mt-6 text-sm leading-relaxed text-gray-900">{text}</p>
      )}

      {items && (
        <ul className="mt-8 ml-10 flex w-fit flex-col gap-4 text-left">
          {items.map((item) => (
            <li
              key={item}
              className="group flex items-center gap-3 text-lg font-semibold text-gray-900 md:text-xl"
            >
              <ArrowBadge />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
