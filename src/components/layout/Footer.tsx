import logo from "../../assets/images/LogoPET.svg";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#5a0f8a] to-[#a100d6] px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center text-xs sm:flex-row sm:text-sm">
        <img src={logo} alt="PET UFC Russas" className="h-9 w-auto" />
        <p>
          © {new Date().getFullYear()} Programa de Educação Tutorial (PET) - UFC
          Campus Russas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
