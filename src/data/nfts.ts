import darkFlameKnight from "@/assets/characters/dark-flame-knight.jpg";
import shadowSorceress from "@/assets/characters/shadow-sorceress.jpg";
import lostRealmSpecter from "@/assets/characters/lost-realm-specter.jpg";
import boneIronBarbarian from "@/assets/characters/bone-iron-barbarian.jpg";
import moonShadowAssassin from "@/assets/characters/moon-shadow-assassin.jpg";
import fallenVoidPaladin from "@/assets/characters/fallen-void-paladin.jpg";
import lostSoulsNecromancer from "@/assets/characters/lost-souls-necromancer.jpg";
import eternalPainBerserker from "@/assets/characters/eternal-pain-berserker.jpg";
import ancestralCryptGuardian from "@/assets/characters/ancestral-crypt-guardian.jpg";
import bloodFireDemon from "@/assets/characters/blood-fire-demon.jpg";

// Nuevos personajes
import oraclePutrefaction from "@/assets/characters/oracle-putrefaction.jpg";
import heraldVoid from "@/assets/characters/herald-void.jpg";
import shadowHunter from "@/assets/characters/shadow-hunter.jpg";
import maidenWhispers from "@/assets/characters/maiden-whispers.jpg";
import gloomyHelmetBearer from "@/assets/characters/gloomy-helmet-bearer.jpg";
import carrionQueen from "@/assets/characters/carrion-queen.jpg";
import oneEyedWanderer from "@/assets/characters/one-eyed-wanderer.jpg";
import bloodSeer from "@/assets/characters/blood-seer.jpg";

// Personajes adicionales
import guardianSilence from "@/assets/characters/guardian-silence.jpg";
import humanSerpent from "@/assets/characters/human-serpent.jpg";
import boneCrownBearer from "@/assets/characters/bone-crown-bearer.jpg";
import deadFlameMartyr from "@/assets/characters/dead-flame-martyr.jpg";
import veilWalker from "@/assets/characters/veil-walker.jpg";
import sepulcherSentinel from "@/assets/characters/sepulcher-sentinel.jpg";
import afterlifeMessenger from "@/assets/characters/afterlife-messenger.jpg";

// Personajes finales
import gloomyPenitent from "@/assets/characters/gloomy-penitent.jpg";
import jawlessWanderer from "@/assets/characters/jawless-wanderer.jpg";
import crimsonShroudLady from "@/assets/characters/crimson-shroud-lady.jpg";
import fragmentedCentaur from "@/assets/characters/fragmented-centaur.jpg";
import skeletalChild from "@/assets/characters/skeletal-child.jpg";
import immortalBeheaded from "@/assets/characters/immortal-beheaded.jpg";
import fleshlessSoul from "@/assets/characters/fleshless-soul.jpg";

// Personajes restantes
import twilightHowler from "@/assets/characters/twilight-howler.jpg";
import wormQueen from "@/assets/characters/worm-queen.jpg";
import thousandFacesKnight from "@/assets/characters/thousand-faces-knight.jpg";
import plagueBearer from "@/assets/characters/plague-bearer.jpg";
import shadowForged from "@/assets/characters/shadow-forged.jpg";
import brokenCrystalMaiden from "@/assets/characters/broken-crystal-maiden.jpg";
import blindPenitent from "@/assets/characters/blind-penitent.jpg";
import crimsonBladeLady from "@/assets/characters/crimson-blade-lady.jpg";
import abyssMartyr from "@/assets/characters/abyss-martyr.jpg";
import mirrorGirl from "@/assets/characters/mirror-girl.jpg";
import thousandLocksGuardian from "@/assets/characters/thousand-locks-guardian.jpg";

import doomsdaySword from "@/assets/weapons/doomsday-sword.jpg";
import dragonBoneBow from "@/assets/weapons/dragon-bone-bow.jpg";
import eternalBetrayalSpear from "@/assets/weapons/eternal-betrayal-spear.jpg";
import shadowStormAxe from "@/assets/weapons/shadow-storm-axe.jpg";
import deadlyWhispersDagger from "@/assets/weapons/deadly-whispers-dagger.jpg";
import infiniteEchoHammer from "@/assets/weapons/infinite-echo-hammer.jpg";
import damnedSoulsStaff from "@/assets/weapons/damned-souls-staff.jpg";
import eternalMidnightScimitar from "@/assets/weapons/eternal-midnight-scimitar.jpg";
import spectralLightningCrossbow from "@/assets/weapons/spectral-lightning-crossbow.jpg";
import endTimesScythe from "@/assets/weapons/end-times-scythe.jpg";

export interface NFT {
  id: string;
  name: string;
  category: "character" | "weapon";
  price: number;
  image: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary" | "mythic";
  attributes: {
    strength?: number;
    magic?: number;
    curse?: number;
    souls?: number;
  };
}

export const nfts: NFT[] = [
  // Personajes Oscuros Originales (10)
  {
    id: "char-001",
    name: "Caballero de la Llama Negra",
    category: "character",
    price: 850,
    image: darkFlameKnight,
    description: "Un noble caballero cuya alma ha sido consumida por las llamas eternas del abismo. Su armadura carbonizada es testimonio de incontables batallas contra demonios.",
    rarity: "legendary",
    attributes: {
      strength: 95,
      curse: 80,
      souls: 120
    }
  },
  {
    id: "char-002", 
    name: "Hechicera de las Sombras",
    category: "character",
    price: 720,
    image: shadowSorceress,
    description: "Maestra de las artes oscuras, esta hechicera manipula las sombras para tejer hechizos de poder inimaginable. Su mirada atraviesa el velo entre mundos.",
    rarity: "rare",
    attributes: {
      magic: 98,
      curse: 75,
      souls: 90
    }
  },
  {
    id: "char-003",
    name: "Espectro del Reino Perdido",
    category: "character", 
    price: 950,
    image: lostRealmSpecter,
    description: "El alma errante de un rey caído, condenado a vagar eternamente entre los mundos. Su presencia helada congela la sangre de sus enemigos.",
    rarity: "mythic",
    attributes: {
      magic: 85,
      curse: 100,
      souls: 150
    }
  },
  {
    id: "char-004",
    name: "Bárbaro de Hueso y Hierro",
    category: "character",
    price: 680,
    image: boneIronBarbarian, 
    description: "Guerrero primitivo cuyo cuerpo ha sido forjado con huesos de dragón y hierro maldito. Su furia es tan ardiente como los hornos del inframundo.",
    rarity: "rare",
    attributes: {
      strength: 92,
      curse: 60,
      souls: 85
    }
  },
  {
    id: "char-005",
    name: "Asesino Sombra de Luna",
    category: "character",
    price: 770,
    image: moonShadowAssassin,
    description: "Emerge de las tinieblas durante las noches sin luna. Sus dagas envenenadas han segado miles de vidas en silencio absoluto.",
    rarity: "legendary",
    attributes: {
      strength: 75,
      magic: 70,
      curse: 85,
      souls: 100
    }
  },
  {
    id: "char-006",
    name: "Paladín Caído del Vacío",
    category: "character",
    price: 820,
    image: fallenVoidPaladin,
    description: "Otrora defensor de la luz, ahora sirve a las fuerzas del vacío. Su armadura sagrada se ha corrompido, irradiando una oscuridad palpable.",
    rarity: "legendary",
    attributes: {
      strength: 88,
      curse: 90,
      souls: 110
    }
  },
  {
    id: "char-007",
    name: "Nigromante de Almas Perdidas",
    category: "character",
    price: 890,
    image: lostSoulsNecromancer,
    description: "Domina el arte prohibido de controlar las almas de los muertos. Su bastón de huesos antiguos vibra con el poder de mil espíritus atormentados.",
    rarity: "mythic",
    attributes: {
      magic: 100,
      curse: 95,
      souls: 140
    }
  },
  {
    id: "char-008",
    name: "Berserker del Dolor Eterno",
    category: "character",
    price: 750,
    image: eternalPainBerserker,
    description: "Su ira se alimenta del sufrimiento infinito. Cada herida recibida aumenta su fuerza destructiva de manera exponencial.",
    rarity: "rare",
    attributes: {
      strength: 90,
      curse: 70,
      souls: 95
    }
  },
  {
    id: "char-009",
    name: "Guardián de la Cripta Ancestral",
    category: "character",
    price: 930,
    image: ancestralCryptGuardian,
    description: "Centinela eterno de los secretos más oscuros. Su cuerpo de piedra viviente protege tesoros que no deben ser perturbados jamás.",
    rarity: "mythic",
    attributes: {
      strength: 85,
      magic: 80,
      curse: 85,
      souls: 135
    }
  },
  {
    id: "char-010",
    name: "Demonio de Sangre y Fuego",
    category: "character",
    price: 1050,
    image: bloodFireDemon,
    description: "Entidad primordial nacida del caos primitivo. Su esencia ígnea consume todo a su paso, dejando únicamente cenizas y desesperación.",
    rarity: "mythic",
    attributes: {
      strength: 95,
      magic: 90,
      curse: 100,
      souls: 160
    }
  },

  // Nuevos Personajes (8)
  {
    id: "char-011",
    name: "Oráculo de la Putrefacción",
    category: "character",
    price: 29000,
    image: oraclePutrefaction,
    description: "Medio cuerpo de un profeta marchito, su piel se funde con hongos luminiscentes. Sus ojos ciegos ven más allá de la carne.",
    rarity: "legendary",
    attributes: {
      magic: 95,
      curse: 88,
      souls: 200
    }
  },
  {
    id: "char-012",
    name: "Heraldo del Vacío",
    category: "character",
    price: 19500,
    image: heraldVoid,
    description: "Medio cuerpo de un caballero sin rostro, con un casco abismal del que brota humo negro. Sus manos tiemblan invocando ecos de otros mundos.",
    rarity: "epic",
    attributes: {
      strength: 75,
      magic: 85,
      curse: 90,
      souls: 160
    }
  },
  {
    id: "char-013",
    name: "Cazador de Sombras",
    category: "character",
    price: 12800,
    image: shadowHunter,
    description: "Medio cuerpo de un asesino encapuchado, cubierto de vendas ensangrentadas. Su daga aún gotea oscuridad líquida.",
    rarity: "rare",
    attributes: {
      strength: 85,
      magic: 60,
      curse: 75,
      souls: 110
    }
  },
  {
    id: "char-014",
    name: "Doncella de los Susurros",
    category: "character",
    price: 20200,
    image: maidenWhispers,
    description: "Medio cuerpo de una mujer espectral con velo desgarrado, sus labios cerrados murmuran voces que no existen.",
    rarity: "epic",
    attributes: {
      magic: 92,
      curse: 88,
      souls: 165
    }
  },
  {
    id: "char-015",
    name: "Portador del Yelmo Lúgubre",
    category: "character",
    price: 9900,
    image: gloomyHelmetBearer,
    description: "Medio cuerpo de un guerrero con un yelmo descomunal, lleno de grietas que rezuman humo púrpura. Nadie recuerda su rostro.",
    rarity: "rare",
    attributes: {
      strength: 80,
      curse: 70,
      souls: 95
    }
  },
  {
    id: "char-016",
    name: "Reina Carroñera",
    category: "character",
    price: 31000,
    image: carrionQueen,
    description: "Medio cuerpo de una figura femenina cubierta de plumas negras y huesos de aves. Porta un cetro formado de cráneos diminutos.",
    rarity: "legendary",
    attributes: {
      magic: 98,
      curse: 95,
      souls: 210
    }
  },
  {
    id: "char-017",
    name: "Errante del Ojo Único",
    category: "character",
    price: 8600,
    image: oneEyedWanderer,
    description: "Medio cuerpo de un nómada encapuchado, cuyo único ojo central arde como un carbón. Mira a los vivos con hambre.",
    rarity: "rare",
    attributes: {
      strength: 70,
      magic: 65,
      curse: 80,
      souls: 85
    }
  },
  {
    id: "char-018",
    name: "Vidente de Sangre",
    category: "character",
    price: 24000,
    image: bloodSeer,
    description: "Medio cuerpo de un anciano encapuchado, sus manos sostienen un cáliz de sangre ardiente. Adivina el destino en cada gota.",
    rarity: "epic",
    attributes: {
      magic: 100,
      curse: 85,
      souls: 180
    }
  },

  // Personajes Adicionales (7)
  {
    id: "char-019",
    name: "Guardiana del Silencio",
    category: "character",
    price: 23400,
    image: guardianSilence,
    description: "Medio cuerpo de una doncella con máscara de hierro sellada, su voz fue arrebatada para contener secretos prohibidos.",
    rarity: "epic",
    attributes: {
      magic: 88,
      curse: 92,
      souls: 170
    }
  },
  {
    id: "char-020",
    name: "Sierpe Humana",
    category: "character",
    price: 33000,
    image: humanSerpent,
    description: "Medio cuerpo de un cuerpo deformado, brazos múltiples recubiertos de escamas, sus pupilas reptilianas brillan en la penumbra.",
    rarity: "legendary",
    attributes: {
      strength: 85,
      magic: 75,
      curse: 98,
      souls: 190
    }
  },
  {
    id: "char-021",
    name: "Portador de la Corona de Huesos",
    category: "character",
    price: 19900,
    image: boneCrownBearer,
    description: "Medio cuerpo de un rey caído, su corona hecha de fémures y vértebras palpita como si estuviera viva.",
    rarity: "epic",
    attributes: {
      strength: 78,
      magic: 82,
      curse: 90,
      souls: 155
    }
  },
  {
    id: "char-022",
    name: "Mártir de la Llama Muerta",
    category: "character",
    price: 28800,
    image: deadFlameMartyr,
    description: "Medio cuerpo de un sacerdote ardido, su cuerpo ennegrecido aún arde en llamas frías azules que nunca lo consumen.",
    rarity: "legendary",
    attributes: {
      magic: 95,
      curse: 88,
      souls: 185
    }
  },
  {
    id: "char-023",
    name: "Caminante del Velo",
    category: "character",
    price: 8900,
    image: veilWalker,
    description: "Medio cuerpo de un encapuchado envuelto en vendas traslúcidas, su rostro es un vacío absoluto.",
    rarity: "rare",
    attributes: {
      magic: 70,
      curse: 95,
      souls: 90
    }
  },
  {
    id: "char-024",
    name: "Centinela del Sepulcro",
    category: "character",
    price: 21700,
    image: sepulcherSentinel,
    description: "Medio cuerpo de un guerrero con armadura sepulcral, incrustado con piedras tumulares, carga una linterna apagada.",
    rarity: "epic",
    attributes: {
      strength: 88,
      curse: 85,
      souls: 160
    }
  },
  {
    id: "char-025",
    name: "Mensajero del Ultratumba",
    category: "character",
    price: 25200,
    image: afterlifeMessenger,
    description: "Medio cuerpo de un espectro envuelto en plumas grises, su boca cosida murmura los nombres de los muertos.",
    rarity: "epic",
    attributes: {
      magic: 92,
      curse: 88,
      souls: 175
    }
  },

  // Personajes Finales (17)
  {
    id: "char-026",
    name: "Sombrío de la Penitencia",
    category: "character",
    price: 11300,
    image: gloomyPenitent,
    description: "Medio cuerpo de un penitente encorvado, su espalda cubierta de clavos oxidados incrustados como castigo eterno.",
    rarity: "rare",
    attributes: {
      strength: 70,
      curse: 88,
      souls: 105
    }
  },
  {
    id: "char-027",
    name: "El Errabundo Sin Mandíbula",
    category: "character",
    price: 20800,
    image: jawlessWanderer,
    description: "Medio cuerpo de un no-muerto con la mandíbula arrancada, de su garganta surge un humo negro que forma gritos.",
    rarity: "epic",
    attributes: {
      strength: 75,
      curse: 95,
      souls: 165
    }
  },
  {
    id: "char-028",
    name: "Dama del Sudario Carmesí",
    category: "character",
    price: 32000,
    image: crimsonShroudLady,
    description: "Medio cuerpo de una mujer espectral cubierta con un sudario ensangrentado, sus manos brillan con fuego rojo apagado.",
    rarity: "legendary",
    attributes: {
      magic: 98,
      curse: 90,
      souls: 195
    }
  },
  {
    id: "char-029",
    name: "Centauro Fragmentado",
    category: "character",
    price: 24700,
    image: fragmentedCentaur,
    description: "Medio cuerpo de una aberración humana, torso de hombre sobre piernas incompletas, sostenido por huesos retorcidos.",
    rarity: "epic",
    attributes: {
      strength: 85,
      curse: 92,
      souls: 170
    }
  },
  {
    id: "char-030",
    name: "Niño Esquelético",
    category: "character",
    price: 9300,
    image: skeletalChild,
    description: "Medio cuerpo de un infante con piel traslúcida, cada hueso brilla con fuego fatuo.",
    rarity: "rare",
    attributes: {
      magic: 75,
      curse: 90,
      souls: 95
    }
  },
  {
    id: "char-031",
    name: "El Degollado Inmortal",
    category: "character",
    price: 30900,
    image: immortalBeheaded,
    description: "Medio cuerpo de un guerrero con la garganta cortada, aún sostiene su espada y sigue murmurando plegarias.",
    rarity: "legendary",
    attributes: {
      strength: 95,
      curse: 85,
      souls: 190
    }
  },
  {
    id: "char-032",
    name: "Alma Sin Carne",
    category: "character",
    price: 22800,
    image: fleshlessSoul,
    description: "Medio cuerpo de un espectro hueco, apenas formado por músculos y humo, con una mirada vacía y eterna.",
    rarity: "epic",
    attributes: {
      magic: 90,
      curse: 95,
      souls: 175
    }
  },
  {
    id: "char-033",
    name: "El Aullador del Ocaso",
    category: "character",
    price: 23300,
    image: twilightHowler,
    description: "Medio cuerpo de un ser con boca desgarrada hasta las orejas, su garganta emite un grito perpetuo sin voz.",
    rarity: "epic",
    attributes: {
      curse: 95,
      souls: 165
    }
  },
  {
    id: "char-034",
    name: "Reina de los Vermes",
    category: "character",
    price: 35500,
    image: wormQueen,
    description: "Medio cuerpo de una figura real, su carne es un nido de gusanos que se arrastran formando su corona.",
    rarity: "legendary",
    attributes: {
      magic: 92,
      curse: 100,
      souls: 205
    }
  },
  {
    id: "char-035",
    name: "Caballero de los Mil Rostros",
    category: "character",
    price: 26000,
    image: thousandFacesKnight,
    description: "Medio cuerpo de un guerrero con decenas de máscaras colgando, cada una susurra un lamento distinto.",
    rarity: "epic",
    attributes: {
      strength: 85,
      curse: 90,
      souls: 175
    }
  },
  {
    id: "char-036",
    name: "El Portador de la Peste",
    category: "character",
    price: 31800,
    image: plagueBearer,
    description: "Medio cuerpo de un monje con máscara de cuervo, su cuerpo rezuma una nube verde que marchita todo a su paso.",
    rarity: "legendary",
    attributes: {
      magic: 95,
      curse: 98,
      souls: 190
    }
  },
  {
    id: "char-037",
    name: "El Forjado en Sombras",
    category: "character",
    price: 24900,
    image: shadowForged,
    description: "Medio cuerpo de un guerrero encendido desde dentro, su carne arde como hierro en fragua.",
    rarity: "epic",
    attributes: {
      strength: 90,
      curse: 85,
      souls: 170
    }
  },
  {
    id: "char-038",
    name: "La Doncella del Cristal Quebrado",
    category: "character",
    price: 33700,
    image: brokenCrystalMaiden,
    description: "Medio cuerpo de una mujer hecha de vidrio roto, cada grieta refleja un rostro diferente atrapado en su interior.",
    rarity: "legendary",
    attributes: {
      magic: 98,
      curse: 90,
      souls: 200
    }
  },
  {
    id: "char-039",
    name: "El Penitente Ciego",
    category: "character",
    price: 8400,
    image: blindPenitent,
    description: "Medio cuerpo de un hombre vendado, lleva una cruz de hierro clavada en su espalda ensangrentada.",
    rarity: "rare",
    attributes: {
      curse: 90,
      souls: 85
    }
  },
  {
    id: "char-040",
    name: "Dama del Filo Carmesí",
    category: "character",
    price: 13500,
    image: crimsonBladeLady,
    description: "Medio cuerpo de una asesina envuelta en vendas, sostiene cuchillas ensangrentadas que laten como corazones.",
    rarity: "rare",
    attributes: {
      strength: 80,
      curse: 85,
      souls: 115
    }
  },
  {
    id: "char-041",
    name: "El Mártir del Abismo",
    category: "character",
    price: 36000,
    image: abyssMartyr,
    description: "Medio cuerpo de un sacerdote crucificado en sombras, de sus heridas emanan tentáculos de humo.",
    rarity: "legendary",
    attributes: {
      magic: 100,
      curse: 100,
      souls: 210
    }
  },
  {
    id: "char-042",
    name: "Niña del Espejo",
    category: "character",
    price: 9200,
    image: mirrorGirl,
    description: "Medio cuerpo de una pequeña que sostiene un espejo roto, su reflejo muestra un monstruo distinto cada vez.",
    rarity: "rare",
    attributes: {
      magic: 75,
      curse: 95,
      souls: 90
    }
  },
  {
    id: "char-043",
    name: "El Guardián de los Mil Candados",
    category: "character",
    price: 27000,
    image: thousandLocksGuardian,
    description: "Medio cuerpo de un carcelero espectral, su torso cubierto de candados oxidados que resuenan como campanas de hierro.",
    rarity: "epic",
    attributes: {
      strength: 88,
      curse: 92,
      souls: 180
    }
  },

  // Armas Malditas
  {
    id: "weapon-001",
    name: "Espada del Juicio Final",
    category: "weapon",
    price: 1200,
    image: doomsdaySword,
    description: "Una espada forjada en los fuegos del apocalipsis. Su hoja refleja las pesadillas de quienes la contemplan.",
    rarity: "mythic",
    attributes: {
      strength: 100,
      curse: 90,
      souls: 180
    }
  },
  {
    id: "weapon-002",
    name: "Arco de Hueso de Dragón",
    category: "weapon",
    price: 980,
    image: dragonBoneBow,
    description: "Tallado del espinazo de un dragón ancestral. Sus flechas nunca fallan su objetivo y atraviesan cualquier armadura.",
    rarity: "legendary",
    attributes: {
      strength: 85,
      magic: 75,
      souls: 140
    }
  },
  {
    id: "weapon-003",
    name: "Lanza de la Traición Eterna",
    category: "weapon",
    price: 890,
    image: eternalBetrayalSpear,
    description: "Empuñada por generaciones de traidores. Cada golpe aumenta su poder con la sangre de los aliados caídos.",
    rarity: "legendary",
    attributes: {
      strength: 90,
      curse: 85,
      souls: 130
    }
  },
  {
    id: "weapon-004",
    name: "Hacha de la Tormenta Sombría",
    category: "weapon",
    price: 760,
    image: shadowStormAxe,
    description: "Su filo genera relámpagos de energía oscura. El viento que la rodea susurra los nombres de sus víctimas.",
    rarity: "rare",
    attributes: {
      strength: 95,
      magic: 60,
      souls: 110
    }
  },
  {
    id: "weapon-005",
    name: "Daga de los Susurros Mortales",
    category: "weapon",
    price: 650,
    image: deadlyWhispersDagger,
    description: "Una daga que murmura secretos al oído de su portador. Sus cortes envenenan tanto el cuerpo como el alma.",
    rarity: "rare",
    attributes: {
      strength: 70,
      magic: 85,
      curse: 80,
      souls: 95
    }
  },
  {
    id: "weapon-006",
    name: "Martillo del Eco Infinito",
    category: "weapon",
    price: 820,
    image: infiniteEchoHammer,
    description: "Cada golpe resuena eternamente en las dimensiones. Su peso aumenta con cada alma que aplasta.",
    rarity: "legendary",
    attributes: {
      strength: 100,
      curse: 70,
      souls: 125
    }
  },
  {
    id: "weapon-007",
    name: "Bastón de las Almas Condenadas",
    category: "weapon",
    price: 1100,
    image: damnedSoulsStaff,
    description: "Un bastón que canaliza las lamentaciones de mil almas perdidas. Su poder crece con la desesperación circundante.",
    rarity: "mythic",
    attributes: {
      magic: 100,
      curse: 95,
      souls: 170
    }
  },
  {
    id: "weapon-008",
    name: "Cimitarra de la Medianoche Eterna",
    category: "weapon",
    price: 710,
    image: eternalMidnightScimitar,
    description: "Forjada durante un eclipse solar que duró mil años. Su hoja corta a través de la luz y la esperanza.",
    rarity: "rare",
    attributes: {
      strength: 85,
      magic: 70,
      curse: 75,
      souls: 105
    }
  },
  {
    id: "weapon-009",
    name: "Ballesta del Rayo Espectral",
    category: "weapon",
    price: 940,
    image: spectralLightningCrossbow,
    description: "Dispara rayos de energía fantasmal que persiguen a sus objetivos más allá de la muerte.",
    rarity: "legendary",
    attributes: {
      strength: 80,
      magic: 90,
      souls: 135
    }
  },
  {
    id: "weapon-010",
    name: "Guadaña del Fin de los Tiempos",
    category: "weapon",
    price: 1350,
    image: endTimesScythe,
    description: "El arma definitiva de la destrucción. Se dice que un solo golpe puede segar continentes enteros.",
    rarity: "mythic",
    attributes: {
      strength: 100,
      magic: 95,
      curse: 100,
      souls: 200
    }
  }
];

export const getFeaturedNFTs = () => {
  return nfts.slice(0, 6);
};

export const getNFTById = (id: string) => {
  return nfts.find(nft => nft.id === id);
};