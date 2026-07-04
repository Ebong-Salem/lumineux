import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

export type Project = {
  slug: string;
  name: string;
  city: string;
  type: string;
  surface: string;
  year: string;
  cover: string;
  gallery: string[];
  description: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "villa-horizon",
    name: "Villa Horizon",
    city: "Saint-Tropez",
    type: "Architecture résidentielle",
    surface: "480 m²",
    year: "2024",
    cover: p1,
    gallery: [p1, interior1, interior2],
    description:
      "Une résidence contemporaine posée en surplomb de la Méditerranée, pensée comme un dialogue entre l'intérieur et le paysage. Les volumes bas et les grandes baies vitrées effacent la frontière entre l'habitation et son environnement.",
    objectives: [
      "Créer un lieu de vie confidentiel ouvert sur la mer",
      "Maximiser la lumière naturelle et les vues panoramiques",
      "Intégrer une démarche bioclimatique discrète",
    ],
    challenges: [
      "Contraintes topographiques et sismiques du terrain en pente",
      "Préservation des essences végétales existantes",
      "Confidentialité malgré les grandes ouvertures",
    ],
    solutions: [
      "Structure en béton banché habillée de pierre locale",
      "Casquettes filantes protégeant du soleil d'été",
      "Piscine à débordement alignée sur la ligne d'horizon",
    ],
    result:
      "Une villa devenue référence dans la région, saluée par la presse spécialisée pour son intégration paysagère et la qualité de ses matériaux.",
  },
  {
    slug: "maison-elegance",
    name: "Maison Élégance",
    city: "Bordeaux",
    type: "Architecture résidentielle",
    surface: "260 m²",
    year: "2023",
    cover: p2,
    gallery: [p2, interior1, interior2],
    description:
      "Une maison familiale contemporaine mêlant bois, pierre et enduit clair. Les volumes s'articulent autour d'un patio central lumineux.",
    objectives: [
      "Concevoir un habitat familial chaleureux",
      "Optimiser les apports lumineux tout au long de l'année",
      "Utiliser des matériaux nobles et durables",
    ],
    challenges: [
      "Terrain étroit en zone pavillonnaire",
      "Cahier des charges esthétique très exigeant",
      "Budget maîtrisé",
    ],
    solutions: [
      "Composition en trois volumes décalés",
      "Bardage bois vertical en douglas",
      "Patio central végétalisé traversant",
    ],
    result:
      "Une réalisation qui a redéfini les standards du pavillon contemporain dans le quartier.",
  },
  {
    slug: "residence-atlas",
    name: "Résidence Atlas",
    city: "Marseille",
    type: "Logement collectif",
    surface: "3 200 m²",
    year: "2023",
    cover: p3,
    gallery: [p3, p1, interior1],
    description:
      "Un ensemble de 24 logements haut de gamme habillé de pierre calcaire, offrant à chaque appartement une double orientation et une loggia généreuse.",
    objectives: [
      "Redéfinir le standard du logement méditerranéen",
      "Proposer des espaces extérieurs privatifs",
      "Créer une identité forte à l'échelle du quartier",
    ],
    challenges: [
      "Insertion dans un tissu urbain hétérogène",
      "Contraintes thermiques d'été",
      "Diversité typologique attendue",
    ],
    solutions: [
      "Façade en pierre massive à joints creux",
      "Loggias filantes formant brise-soleil",
      "Distribution en cœur d'îlot végétalisé",
    ],
    result:
      "Un projet commercialisé en moins de six mois, plébiscité pour son écriture architecturale sobre et intemporelle.",
  },
  {
    slug: "tour-nova",
    name: "Tour Nova",
    city: "Paris — La Défense",
    type: "Architecture tertiaire",
    surface: "18 000 m²",
    year: "2022",
    cover: p4,
    gallery: [p4, p3, p1],
    description:
      "Une tour de bureaux de 24 étages, à l'écriture verticale affirmée. Les plateaux libres et les terrasses en cascade offrent des espaces de travail baignés de lumière.",
    objectives: [
      "Créer une signature urbaine forte",
      "Proposer des plateaux flexibles et modulables",
      "Atteindre la certification HQE Exceptionnel",
    ],
    challenges: [
      "Complexité structurelle et acoustique",
      "Optimisation énergétique",
      "Coordination des lots techniques",
    ],
    solutions: [
      "Ossature mixte acier-béton",
      "Double peau ventilée",
      "Noyaux centralisés libérant les plateaux",
    ],
    result:
      "Tour livrée dans les délais, plébiscitée par ses utilisateurs pour son confort et sa lumière naturelle.",
  },
  {
    slug: "espace-horizon",
    name: "Espace Horizon",
    city: "Lyon",
    type: "Design d'intérieur",
    surface: "540 m²",
    year: "2024",
    cover: p5,
    gallery: [p5, interior1, interior2],
    description:
      "Aménagement intérieur d'un flagship dédié à la maroquinerie de luxe. Un écrin sobre en bois, laiton brossé et pierre calcaire.",
    objectives: [
      "Traduire l'ADN de la marque dans l'espace",
      "Créer un parcours client immersif",
      "Mettre en scène les produits par la lumière",
    ],
    challenges: [
      "Rénovation d'un bâtiment haussmannien classé",
      "Contraintes acoustiques",
      "Éclairage muséal exigeant",
    ],
    solutions: [
      "Menuiseries sur-mesure en chêne massif",
      "Éclairage indirect et projecteurs directionnels",
      "Mobilier dessiné spécifiquement pour le lieu",
    ],
    result:
      "Une boutique devenue destination, référencée par plusieurs magazines de design international.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
