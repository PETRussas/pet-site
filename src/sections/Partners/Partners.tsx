import { motion } from "framer-motion";
import { partners } from "../../data/partners";

// Repete a lista para a faixa nunca ficar com espaço vazio, mesmo com poucos parceiros.
const REPEAT = 9;
const items = Array.from({ length: REPEAT }, () => partners).flat();

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-16 pr-16"
      aria-hidden={hidden || undefined}
    >
      {items.map((partner, index) => (
        <li
          key={`${partner.id}-${index}`}
          className="flex h-28 w-48 shrink-0 items-center justify-center"
        >
          <img
            src={partner.logo}
            // só a primeira ocorrência de cada logo é lida por leitores de tela
            alt={!hidden && index < partners.length ? partner.name : ""}
            className="max-h-full max-w-full rounded-md object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Partners() {
  return (
    <section
      id="parcerias"
      className="scroll-mt-20 bg-linear-to-r from-[#5a0f8a] to-[#a100d6] py-20 text-white"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Parceiros</h2>
        <p className="mt-4 text-sm font-semibold leading-relaxed md:text-base">
          Uma rede de apoio sólida e comprometida. Conheça quem caminha lado a
          lado conosco promovendo educação, inovação e desenvolvimento.
        </p>
      </div>

      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* As duas cópias são idênticas: ao andar metade da largura, o loop recomeça sem emenda */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 70, ease: "linear", repeat: Infinity }}
        >
          <LogoGroup />
          <LogoGroup hidden />
        </motion.div>
      </div>
    </section>
  );
}