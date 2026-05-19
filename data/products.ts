export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  ingredients: string[];
  sensorialNote: string;
  imagePlaceholder: string;
  image?: string; // caminho da foto real em /public
  // price?: number;
  // slug?: string;
}

export const featuredProducts: Product[] = [
  {
    id: "banho-floresta",
    name: "Banho da Floresta",
    category: "Banhos Botânicos",
    shortDescription:
      "Uma imersão profunda em ervas da mata, preparada para momentos de silêncio e reconexão interior.",
    ingredients: ["Alecrim", "Eucalipto", "Capim-limão", "Sal Rosa", "Folha de Bananeira"],
    sensorialNote: "Para momentos de pausa e reconexão com a natureza.",
    imagePlaceholder: "#2D4A3E",
    image: "/images/products/banho-da-floresta.png",
  },
  {
    id: "banho-flores",
    name: "Banho das Flores",
    category: "Banhos Botânicos",
    shortDescription:
      "Pétalas e ervas floridas para um ritual de leveza, cuidado e abertura do coração.",
    ingredients: ["Rosa", "Lavanda", "Camomila", "Pétalas de Calêndula", "Sal de Himalaia"],
    sensorialNote: "Para um ritual de cuidado gentil e leveza.",
    imagePlaceholder: "#C9B8D4",
    image: "/images/products/banho-das-flores.png",
  },
  {
    id: "spray-presenca",
    name: "Spray Presença",
    category: "Sprays Botânicos",
    shortDescription:
      "Névoa aromática para trazer calma e foco ao ambiente. Ideal para o início ou encerramento do dia.",
    ingredients: ["Lavanda", "Cedro", "Patchouli", "Água Floral de Rosa"],
    sensorialNote: "Para criar atmosfera de calma e intencionalidade.",
    imagePlaceholder: "#7A9E8E",
    image: "/images/products/spray-presenca.png",
  },
  {
    id: "kit-ritual-inicial",
    name: "Kit Primeiro Ritual",
    category: "Kits de Autocuidado",
    shortDescription:
      "Uma introdução completa ao universo da Botica Raizeira. Perfeito para quem está começando sua jornada de autocuidado.",
    ingredients: ["Banho Botânico", "Spray Aromático", "Sachê de Ervas", "Guia de Uso"],
    sensorialNote: "Para quem quer começar seu ritual com intenção e cuidado.",
    imagePlaceholder: "#C9A96E",
    image: "/images/products/kit-primeiro-ritual.png",
  },
];
