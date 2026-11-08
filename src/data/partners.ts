import tocaDoRoshan from "../assets/partners/toca-do-roshan.png";
import praxis from "../assets/partners/praxis.png";
import rabelo from "../assets/partners/rabelo.png";

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

// TODO: confirmar o nome completo de cada parceiro (usado como texto alternativo)
export const partners: Partner[] = [
  { id: "toca-do-roshan", name: "Toca do Roshan", logo: tocaDoRoshan },
  { id: "praxis", name: "Praxis", logo: praxis },
  { id: "rabelo", name: "Rabelo", logo: rabelo },
];