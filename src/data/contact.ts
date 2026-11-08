export type SocialId = "instagram" | "youtube" | "linkedin" | "spotify";

export interface Social {
  id: SocialId;
  label: string;
  href: string;
}

export const contact = {
  email: "petrussas@ufc.br",
  address: "Universidade Federal do Ceará (UFC) Campus Russas",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Universidade+Federal+do+Cear%C3%A1+Campus+Russas",
  hours: "Segunda a Sexta | 08:00 às 18:00",
};

export const socials: Social[] = [
  { id: "instagram", label: "Instagram do PET", href: "#" },
  { id: "youtube", label: "YouTube do PET", href: "#" },
  { id: "linkedin", label: "LinkedIn do PET", href: "#" },
  { id: "spotify", label: "Spotify do PET", href: "#" },
];
