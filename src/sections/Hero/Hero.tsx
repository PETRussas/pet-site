import heroBg from "../../assets/images/hero-time.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center text-center text-white"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl font-extrabold uppercase leading-tight md:text-7xl">
          Programa de Educação Tutorial
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-semibold md:text-xl">
          Integrando ensino, pesquisa e extensão para transformar a vivência acadêmica na universidade
        </p>
      </div>
    </section>
  );
}
