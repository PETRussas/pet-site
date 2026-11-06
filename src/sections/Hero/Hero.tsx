import heroBg from "../../assets/images/hero-time.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 text-center text-white"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto w-fit max-w-full">
        <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
          Programa de
          <br />
          Educação Tutorial
        </h1>
        <p className="mt-4 text-base font-semibold sm:text-lg lg:whitespace-nowrap lg:text-xl">
          Integrando ensino, pesquisa e extensão para transformar a vivência acadêmica na universidade
        </p>
      </div>
    </section>
  );
}
