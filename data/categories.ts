export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // nome do ícone Lucide
  color: string; // classe Tailwind de cor de fundo suave
}

export const categories: Category[] = [
  {
    id: "banhos-botanicos",
    name: "Banhos Botânicos",
    description: "Mistura de ervas, flores e sais para um ritual de imersão e renovação.",
    icon: "Droplets",
    color: "bg-sage/10",
  },
  {
    id: "escalda-pes",
    name: "Escalda-pés",
    description: "Preparo aromático para aliviar, aquecer e cuidar dos pés com ervas selecionadas.",
    icon: "Flame",
    color: "bg-gold/10",
  },
  {
    id: "sprays",
    name: "Sprays Botânicos",
    description: "Névoas aromáticas para ambientes, aura e momentos de pausa consciente.",
    icon: "Wind",
    color: "bg-lilac/20",
  },
  {
    id: "tinturas-extratos",
    name: "Tinturas e Extratos",
    description: "Preparos concentrados de ervas para uso interno ou externo, com curadoria responsável.",
    icon: "FlaskConical",
    color: "bg-botanical/10",
  },
  {
    id: "kits-autocuidado",
    name: "Kits de Autocuidado",
    description: "Combinações de produtos pensados para uma experiência de ritual completa.",
    icon: "Gift",
    color: "bg-beige-dark/60",
  },
  {
    id: "outros-naturais",
    name: "Produtos Naturais",
    description: "Outros preparos fitoenergéticos, sachês aromáticos e itens para o bem-estar do dia a dia.",
    icon: "Leaf",
    color: "bg-sage-light/20",
  },
];
