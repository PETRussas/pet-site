import missaoIcon from "../assets/icons/missao.svg";
import visaoIcon from "../assets/icons/visao.svg";
import valoresIcon from "../assets/icons/valores.svg";

export interface Pillar {
  id: string;
  icon: string;
  prefix: string;
  highlight: string;
  text?: string;
  items?: string[];
}

export const pillars: Pillar[] = [
  {
    id: "mission",
    icon: missaoIcon,
    prefix: "Nossa",
    highlight: "Missão",
    text: "“Promover o desenvolvimento acadêmico, pessoal e profissional da sua equipe multidisciplinar por meio da integração entre ensino, pesquisa e extensão, desenvolvendo projetos inovadores e organizados que gerem impacto positivo na comunidade universitária e na sociedade.”",
  },
  {
    id: "vision",
    icon: visaoIcon,
    prefix: "Nossa",
    highlight: "Visão",
    text: "Ser reconhecido pela excelência na formação dos seus membros, no impacto social da tríade acadêmica e na eficiência da sua gestão interna, se tornando referência de organização e transformação dentro e fora da universidade.",
  },
  {
    id: "values",
    icon: valoresIcon,
    prefix: "Nossos",
    highlight: "Valores",
    items: ["Liderança", "Proatividade", "Comunicação", "Trabalho em equipe"],
  },
];
