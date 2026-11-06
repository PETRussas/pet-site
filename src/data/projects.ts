import englishClub from "../assets/projects/english-club.svg";
import petOn from "../assets/projects/pet-on.svg";
import podfalar from "../assets/projects/podfalar.svg";

export interface Project {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const placeholder =
  "Descrição do projeto. Substituir pelo texto oficial quando estiver pronto.";

export const projects: Project[] = [
  { id: "english-club", name: "English Club", logo: englishClub, description: placeholder },
  { id: "pet-on", name: "PET ON", logo: petOn, description: placeholder },
  { id: "podfalar", name: "PodFalar", logo: podfalar, description: placeholder },
];
