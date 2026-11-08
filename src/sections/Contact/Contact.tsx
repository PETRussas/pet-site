import SocialIcon from "../../components/ui/SocialIcon";
import { contact, socials } from "../../data/contact";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0 transition group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 bg-white px-6 py-20 text-pet md:py-28"
    >
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-extrabold uppercase leading-none text-pet-accent md:text-7xl">
            Fale conosco
          </h2>

          <p className="mt-8 max-w-md text-base font-medium leading-relaxed">
            Sua opinião e suas ideias são muito importantes para nós. Escolha o
            melhor canal abaixo para falar com a nossa equipe ou preencha o
            formulário ao lado.
          </p>

          <div className="mt-8 space-y-2 font-medium">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:underline"
            >
              {contact.address}
              <ArrowIcon />
            </a>
            <p>{contact.hours}</p>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="group mt-8 inline-flex items-center gap-2 text-xl font-bold hover:underline"
          >
            {contact.email}
            <ArrowIcon />
          </a>

          <ul className="mt-6 flex items-center gap-5">
            {socials.map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block transition hover:scale-110"
                >
                  <SocialIcon id={id} className="size-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
