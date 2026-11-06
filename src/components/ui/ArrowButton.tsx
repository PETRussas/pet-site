import type { ReactNode } from "react";

interface ArrowButtonProps {
  href: string;
  children: ReactNode;
  direction?: "right" | "up-right";
  onClick?: () => void;
}

const arrowPaths = {
  right: "M5 12h14M13 6l6 6-6 6",
  "up-right": "M7 17L17 7M8 7h9v9",
};

export default function ArrowButton({
  href,
  children,
  direction = "right",
  onClick,
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-xs font-bold uppercase tracking-wide text-[#5a0f8a] shadow-md transition hover:bg-purple-100"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-[#4a0e78] text-white transition group-hover:translate-x-0.5">
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
          <path d={arrowPaths[direction]} />
        </svg>
      </span>
    </a>
  );
}
