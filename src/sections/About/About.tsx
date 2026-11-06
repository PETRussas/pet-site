import heroTime from "../../assets/images/hero-time.png";
import { pillars } from "../../data/about";
import PillarCard from "./PillarCard";

const linkStyle = "font-bold text-pet-accent underline underline-offset-2";

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <img
            src={heroTime}
            alt="Equipe do PET UFC Russas reunida para uma foto em grupo"
            className="w-full rounded-lg object-cover shadow-md"
          />

          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Nossa <span className="text-pet-accent">História</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-900">
              O PET (Programa de Educação Tutorial) é um programa consolidado
              nas universidades e instituições de ensino superior do Brasil,
              existente há 40 anos desde sua criação em 1979 pela CAPES. Com os
              pilares de{" "}
              <strong className={linkStyle}>pesquisa, ensino e extensão</strong>,
              o PET promove aprofundamento do conhecimento e{" "}
              <strong className={linkStyle}>
                integração entre graduação, pesquisa e extensão
              </strong>
              . No Campus Russas, o PET foi implantado em maio de 2020,
              proporcionando oportunidades de desenvolvimento acadêmico e
              integração entre os estudantes.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-y divide-dotted divide-gray-400 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}