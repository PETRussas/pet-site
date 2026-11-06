import ArrowButton from "../../components/ui/ArrowButton";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-20 bg-linear-to-r from-[#5a0f8a] to-[#a100d6] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center uppercase leading-none">
          <span className="block text-4xl font-semibold text-transparent [-webkit-text-stroke:1.5px_white] md:text-6xl">
            Principais
          </span>
          <span className="block text-6xl font-extrabold tracking-tight text-gray-200 text-shadow-lg md:text-8xl">
            Projetos
          </span>
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ArrowButton href="/projetos" direction="up-right">
            Veja tudo aqui
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
