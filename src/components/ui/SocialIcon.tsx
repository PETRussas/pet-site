import type { SocialId } from "../../data/contact";

interface SocialIconProps {
  id: SocialId;
  className?: string;
}

export default function SocialIcon({ id, className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {id === "instagram" && (
        <>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </>
      )}

      {id === "youtube" && (
        <>
          <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" />
          <path d="M10 9l5 3-5 3z" fill="currentColor" />
        </>
      )}

      {id === "linkedin" && (
        <>
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
          <circle cx="8" cy="8" r="0.7" fill="currentColor" />
          <path d="M8 11.2v5.3" />
          <path d="M12 16.5v-5.3" />
          <path d="M12 13.8a2.6 2.6 0 0 1 5.2 0v2.7" />
        </>
      )}

      {id === "spotify" && (
        <>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M6.8 9.6c3.6-1 7.6-.7 10.6 1.1" />
          <path d="M7.4 12.8c3-.8 6-.5 8.6 1" />
          <path d="M8 15.8c2.4-.6 4.5-.3 6.4.8" />
        </>
      )}
    </svg>
  );
}
