import type { Project } from "../../data/projects";

export default function ProjectCard({ name, logo, description }: Project) {
  return (
    <article className="flex w-full max-w-xs flex-col items-center rounded-md bg-[#fbf7fc] px-5 py-6 text-center shadow-lg sm:w-64">
      <img src={logo} alt={name} className="h-14 w-full object-contain" />

      <hr className="my-4 w-3/4 border-t border-gray-700" />

      <p className="text-xs font-semibold leading-relaxed text-gray-900">
        {description}
      </p>
    </article>
  );
}
