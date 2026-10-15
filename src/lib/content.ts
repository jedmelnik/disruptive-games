export const studio = {
  name: "Disruptive Games",
  email: "contact@disruptivegames.com",
  pressEmail: "pr@disruptivegames.com",
  place: "Oakland, California",
  steam: "https://store.steampowered.com/app/1473960/Wreck_Runners/",
  description:
    "Disruptive Games is an independent game development studio founded by industry veterans who have worked on some of the most recognizable and renowned games in the world.",
}

export type SubjectBox = { l: number; t: number; r: number; b: number }

export type Plate = {
  src: string
  width: number
  height: number
  alt: string
  /** Landmark in the source file, not a screen target. */
  focalX: number
  focalY: number
  fillFrame?: boolean
  bleed?: boolean
  subject?: SubjectBox
  /** Left type keeps the landmark in the right half. Right type mirrors it. */
  align?: "left" | "right"
}

export type ScopeItem = { title: string; detail: string }

export type Game = {
  slug: string
  title: string
  client: string
  clientKind: "Client" | "Partner" | "Studio"
  summary: string
  lede: string
  platforms?: string
  hero: Plate
  still: { src: string; width: number; height: number; alt: string }
  gallery: { src: string; width: number; height: number; alt: string }[]
  scope: ScopeItem[]
  steam?: string
  featured?: boolean
}

export const nav = [
  { href: "/games", label: "Games" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const

export const partners = [
  { name: "Sony", src: "/partners/sony.svg" },
  { name: "Activision", src: "/partners/activision.svg" },
  { name: "Microsoft", src: "/partners/microsoft.svg" },
  { name: "Insomniac", src: "/partners/insomniac.svg" },
  { name: "Robot Entertainment", src: "/partners/robot.svg" },
  { name: "Survios", src: "/partners/survios.svg" },
  { name: "Amazon", src: "/partners/amazon.svg" },
] as const

export const games: Game[] = [
  {
    slug: "wreck-runners",
    title: "Wreck Runners",
    client: "Disruptive Games",
    clientKind: "Studio",
    summary:
      "A co-op extraction game in the Bermuda Triangle. The Trustwell Corporation would like you to retrieve what should not be there.",
    lede: "The Bermuda Triangle is full of things that shouldn't be there.",
    platforms: "PC on Steam",
    steam: studio.steam,
    featured: true,
    hero: {
      src: "/images/wreck-air.jpg",
      width: 1920,
      height: 1080,
      alt: "The ORCA craft beside a crashed airliner in an orange sky, from Wreck Runners.",
      // Landmark: the ORCA hull, right of center.
      focalX: 0.74,
      focalY: 0.58,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.18, t: 0.2, r: 0.98, b: 0.72 },
      align: "left",
    },
    still: {
      src: "/images/wreck-shore.jpg",
      width: 1920,
      height: 1080,
      alt: "The red ORCA vehicle at the waterline with a crew on the roof.",
    },
    gallery: [
      {
        src: "/images/wreck-shore.jpg",
        width: 1920,
        height: 1080,
        alt: "The ORCA at the edge of the water under a violet sky.",
      },
      {
        src: "/images/wreck-crew.jpg",
        width: 1920,
        height: 1080,
        alt: "Four runners with television helmets posed in front of the ORCA.",
      },
      {
        src: "/images/wreck-hall.jpg",
        width: 1717,
        height: 1080,
        alt: "A crew inside a flooded hall as a figure comes down the stairs.",
      },
    ],
    scope: [
      {
        title: "Co-op extraction",
        detail:
          "Up to four players online. Trustwell sends the crew in to recover salvage from a haunted, shifting Bermuda Triangle.",
      },
      {
        title: "The ORCA",
        detail:
          "One vehicle for the whole crew. Across land, sea, and air it is the ride home.",
      },
      {
        title: "Physics salvage",
        detail:
          "The Scrapjack hauls loot onto the vehicle. Every grab, throw, and scramble is physics-driven.",
      },
      {
        title: "Between runs",
        detail:
          "Cash in salvage for equipment, upgrades, and cosmetics. No two trips through the Fog start the same.",
      },
    ],
  },
  {
    slug: "diablo-ii-resurrected",
    title: "Diablo II: Resurrected",
    client: "Blizzard / Activision",
    clientKind: "Client",
    summary:
      "Online features, backend services, and console compliance for Battle.net and modern platforms.",
    lede: "Online services and backend systems for the remaster.",
    platforms: "PS5, Xbox Series X|S, PS4, Xbox One, Nintendo Switch, PC",
    featured: true,
    hero: {
      src: "/images/diablo-wide.webp",
      width: 2277,
      height: 976,
      alt: "A horned skeletal demon looms over a necromancer in a burning hall.",
      // Landmark: the demon's glowing eyes.
      focalX: 0.62,
      focalY: 0.3,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.34, t: 0.06, r: 0.96, b: 0.7 },
      align: "left",
    },
    still: {
      src: "/images/diablo.webp",
      width: 839,
      height: 943,
      alt: "Close portrait of a red horned demon from Diablo II: Resurrected.",
    },
    gallery: [
      {
        src: "/images/diablo.webp",
        width: 839,
        height: 943,
        alt: "Red horned demon portrait from Diablo II: Resurrected.",
      },
      {
        src: "/images/diablo-wide.webp",
        width: 2277,
        height: 976,
        alt: "Wide key art of the demon and necromancer.",
      },
    ],
    scope: [
      {
        title: "Slay with friends",
        detail:
          "Helped modernize online features for Battle.net and consoles.",
      },
      {
        title: "Online gameplay",
        detail:
          "Improved and tuned gameplay features for a modern session.",
      },
      {
        title: "Backend services",
        detail:
          "Implemented critical features in proprietary backend services and game servers.",
      },
      {
        title: "Compliance",
        detail:
          "Advised on and implemented practices to meet compliance for consoles and Battle.net.",
      },
    ],
  },
  {
    slug: "tony-hawks-pro-skater",
    title: "Tony Hawk's Pro Skater 1+2",
    client: "Vicarious Visions / Activision",
    clientKind: "Client",
    summary:
      "Multiplayer integration, dedicated servers, and a port of custom skate physics.",
    lede: "Multiplayer integration, online services, and dedicated servers.",
    platforms: "PS5, Xbox Series X|S, PS4, Xbox One, Nintendo Switch, PC",
    featured: true,
    hero: {
      src: "/images/tony-wide.webp",
      width: 1428,
      height: 662,
      alt: "A skater inverted in midair inside a sunlit warehouse park.",
      // Landmark: the skater's helmet.
      focalX: 0.8,
      focalY: 0.36,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.46, t: 0.02, r: 0.99, b: 0.66 },
      align: "left",
    },
    still: {
      src: "/images/tony.webp",
      width: 947,
      height: 1306,
      alt: "A skater from behind, board under one foot, in a gym.",
    },
    gallery: [
      {
        src: "/images/tony-wide.webp",
        width: 1428,
        height: 662,
        alt: "Skater mid-trick in a warehouse.",
      },
      {
        src: "/images/tony.webp",
        width: 947,
        height: 1306,
        alt: "Skater standing on a board in a gym.",
      },
      {
        src: "/images/tony-2.webp",
        width: 819,
        height: 461,
        alt: "Tony Hawk's Pro Skater gameplay still.",
      },
    ],
    scope: [
      {
        title: "Skate with friends",
        detail: "Advanced replication support for custom skate physics.",
      },
      {
        title: "Full featured online",
        detail: "Integrated a wide range of social and online services.",
      },
      {
        title: "Unreal expertise",
        detail: "Advised on best practices, implemented features, and debugged issues.",
      },
      {
        title: "Compliance",
        detail:
          "Fixed bugs, kept the title in compliance, and prepared title updates.",
      },
    ],
  },
  {
    slug: "godfall",
    title: "Godfall",
    client: "Counterplay",
    clientKind: "Client",
    summary:
      "Effects for character abilities and levels, integrated in-engine and tuned for frame rate.",
    lede: "Crafted effects for character abilities and levels.",
    platforms: "PC, PlayStation 5",
    featured: true,
    hero: {
      src: "/images/godfall-wide.webp",
      width: 1046,
      height: 486,
      alt: "An armored lion-helmed warrior in the foreground of a bright Godfall scene.",
      // Landmark: the lion helm's eyes, left of center.
      focalX: 0.24,
      focalY: 0.32,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.0, t: 0.0, r: 0.98, b: 0.56 },
      align: "right",
    },
    still: {
      src: "/images/godfall.webp",
      width: 800,
      height: 800,
      alt: "Close portrait of a silver lion helm with glowing eyes.",
    },
    gallery: [
      {
        src: "/images/godfall-wide.webp",
        width: 1046,
        height: 486,
        alt: "Godfall warriors under a bright sky.",
      },
      {
        src: "/images/godfall.webp",
        width: 800,
        height: 800,
        alt: "Godfall character portrait.",
      },
    ],
    scope: [
      {
        title: "VFX for abilities and environment",
        detail: "Crafted effects for multiple character abilities and levels.",
      },
      {
        title: "Fully integrated art",
        detail:
          "Used blueprints to integrate and debug effects directly in the project.",
      },
      {
        title: "Optimization",
        detail:
          "Optimized VFX across levels to hold high frame rates.",
      },
      {
        title: "Tech art",
        detail: "Developed new technology for VFX.",
      },
    ],
  },
  {
    slug: "megalith",
    title: "Megalith",
    client: "Sony",
    clientKind: "Partner",
    summary:
      "An internal project the studio designed and built from prototype to launch, funded by Sony.",
    lede: "Designed and built from prototype to launch.",
    platforms: "PlayStation Network",
    featured: true,
    hero: {
      src: "/images/megalith-wide.webp",
      width: 1024,
      height: 386,
      alt: "Stylized fighters clash in a bright arena, a caped figure leaping on the right.",
      // Landmark: the leaping fighter's head.
      focalX: 0.74,
      focalY: 0.32,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.3, t: 0.02, r: 0.98, b: 0.72 },
      align: "left",
    },
    still: {
      src: "/images/megalith.webp",
      width: 686,
      height: 800,
      alt: "A caped fighter mid-leap with a blade.",
    },
    gallery: [
      {
        src: "/images/megalith-wide.webp",
        width: 1024,
        height: 386,
        alt: "Wide Megalith battle illustration.",
      },
      {
        src: "/images/megalith.webp",
        width: 686,
        height: 800,
        alt: "Megalith fighter portrait.",
      },
      {
        src: "/images/megalith-2.webp",
        width: 1004,
        height: 560,
        alt: "Additional Megalith artwork.",
      },
    ],
    scope: [
      {
        title: "Internal project",
        detail: "Designed and built the entire product, from prototype to launch.",
      },
      {
        title: "Funded by Sony",
        detail: "Fully funded by Sony Entertainment.",
      },
      {
        title: "On time, on budget",
        detail: "Met milestone requirements and exceeded expectations.",
      },
      {
        title: "Solid multiplayer tech",
        detail: "Dedicated server support that scales with the ebb and flow of daily players.",
      },
      {
        title: "PSN live ops",
        detail: "Regular additional content and updates on PlayStation Network.",
      },
    ],
  },
  {
    slug: "bloodstained",
    title: "Bloodstained",
    client: "505 Games",
    clientKind: "Client",
    summary:
      "Console work for PlayStation 4 and Xbox One: platform features, builds, publishing, and UI.",
    lede: "Console platform work for PlayStation 4 and Xbox One.",
    platforms: "PlayStation 4, Xbox One",
    hero: {
      src: "/images/bloodstained.webp",
      width: 1370,
      height: 562,
      alt: "A sword-bearing heroine in front of red demons, from Bloodstained.",
      // Landmark: the heroine's eyes.
      focalX: 0.7,
      focalY: 0.36,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.46, t: 0.0, r: 0.99, b: 0.64 },
      align: "left",
    },
    still: {
      src: "/images/bloodstained.webp",
      width: 1370,
      height: 562,
      alt: "Bloodstained key art.",
    },
    gallery: [
      {
        src: "/images/bloodstained.webp",
        width: 1370,
        height: 562,
        alt: "Bloodstained key art with the heroine and demons.",
      },
    ],
    scope: [
      {
        title: "Brought to console",
        detail: "Optimized and implemented platform features for PlayStation 4 and Xbox One.",
      },
      {
        title: "Integrations and builds",
        detail:
          "Implemented integrations for both consoles and created builds through launch.",
      },
      {
        title: "Publishing support",
        detail: "Assisted 505 Games with the submission process on PlayStation 4 and Xbox One.",
      },
      {
        title: "UI support",
        detail: "Designed and implemented UI for DLC and online features.",
      },
    ],
  },
  {
    slug: "raw-data",
    title: "Raw Data",
    client: "Survios",
    clientKind: "Client",
    summary:
      "Competitive multiplayer design, network code, maps, and VR gameplay prototypes.",
    lede: "Competitive multiplayer and VR systems with Survios.",
    platforms: "VR",
    hero: {
      src: "/images/raw-data.webp",
      width: 1200,
      height: 676,
      alt: "An armored figure aims a rifle across a burning VR arena.",
      // Landmark: the shooter's eyes.
      focalX: 0.84,
      focalY: 0.34,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.34, t: 0.04, r: 0.99, b: 0.6 },
      align: "left",
    },
    still: {
      src: "/images/raw-data.webp",
      width: 1200,
      height: 676,
      alt: "Raw Data key art.",
    },
    gallery: [
      {
        src: "/images/raw-data.webp",
        width: 1200,
        height: 676,
        alt: "Raw Data shooter in a burning arena.",
      },
    ],
    scope: [
      {
        title: "Design collaboration",
        detail: "Worked with Survios on the design of Raw Data's competitive multiplayer.",
      },
      {
        title: "Real-time network code",
        detail: "Implemented network code to support competitive gameplay.",
      },
      {
        title: "Back-end code",
        detail: "Worked with the platform team to flesh out the networking back-end.",
      },
      {
        title: "Multiplayer map design",
        detail: "Designed and prototyped competitive maps.",
      },
      {
        title: "Network performance",
        detail: "Streamlined matchmaking, improved online interactions, and reduced latency.",
      },
      {
        title: "Gameplay R&D",
        detail: "Prototyped VR locomotion and other global gameplay systems.",
      },
    ],
  },
  {
    slug: "orcs-must-die-unchained",
    title: "Orcs Must Die! Unchained",
    client: "Robot Entertainment / Sony",
    clientKind: "Client",
    summary:
      "Server structure, Unity support, a PlayStation 4 port, and performance work.",
    lede: "Servers, Unity support, and a PlayStation 4 port.",
    platforms: "PlayStation 4",
    hero: {
      src: "/images/orcs.webp",
      width: 1452,
      height: 624,
      alt: "A lineup of heroes and orcs from Orcs Must Die! Unchained.",
      // Landmark: the large central orc's face.
      focalX: 0.46,
      focalY: 0.24,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.28, t: 0.0, r: 0.9, b: 0.66 },
      align: "left",
    },
    still: {
      src: "/images/orcs.webp",
      width: 1452,
      height: 624,
      alt: "Orcs Must Die! Unchained cast lineup.",
    },
    gallery: [
      {
        src: "/images/orcs.webp",
        width: 1452,
        height: 624,
        alt: "Heroes and orcs posed together.",
      },
    ],
    scope: [
      {
        title: "Server back-end",
        detail: "Developed the initial server structure for Orcs Must Die! Unchained.",
      },
      {
        title: "Unity support",
        detail: "Created support for the Unity front-end system.",
      },
      {
        title: "Cross-platform",
        detail: "Ported Unreal 3 to PlayStation 4 and developed cross-platform integration.",
      },
      {
        title: "Performance optimization",
        detail: "Performance optimization and shader debugging.",
      },
    ],
  },
  {
    slug: "ultimate-rivals-the-rink",
    title: "Ultimate Rivals: The Rink",
    client: "Bit Fry Game Studios",
    clientKind: "Client",
    summary: "iOS title with Bit Fry Game Studios.",
    lede: "An iOS title with Bit Fry Game Studios.",
    platforms: "iOS",
    hero: {
      src: "/images/rivals.webp",
      width: 1745,
      height: 864,
      alt: "Two hockey teams face off at center ice.",
      // Landmark: the face-off at center ice.
      focalX: 0.52,
      focalY: 0.46,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.2, t: 0.1, r: 0.88, b: 0.78 },
      align: "left",
    },
    still: {
      src: "/images/rivals.webp",
      width: 1745,
      height: 864,
      alt: "Ultimate Rivals: The Rink face-off.",
    },
    gallery: [
      {
        src: "/images/rivals.webp",
        width: 1745,
        height: 864,
        alt: "Players squared up at the face-off.",
      },
    ],
    scope: [
      {
        title: "iOS",
        detail:
          "Listed by the studio as an iOS title for Bit Fry Game Studios.",
      },
    ],
  },
]

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug)
}

export const services = [
  {
    title: "Real-time multiplayer",
    lede: "High-end connected play, from offline games that need to go online to titles designed that way from the start.",
    items: [
      {
        title: "Replication",
        detail: "Make an offline game work online, or design it that way from the start.",
      },
      {
        title: "Networked gameplay",
        detail: "Parties, matchmaking, cross-platform play, and advanced social features.",
      },
      {
        title: "Games as a service",
        detail: "Run events, collect data, evolve the game, and build the player base.",
      },
    ],
  },
  {
    title: "Tech art, VFX, and UI",
    lede: "Beautiful, dynamic work that is integrated in the project, not handed over as a folder of effects.",
    items: [
      {
        title: "Visual effects",
        detail: "Realistic and stylized effects for every platform type.",
      },
      {
        title: "Integrated pipeline",
        detail: "Integrate and debug assets directly in the project.",
      },
      {
        title: "Tech art",
        detail: "Scripting, rigging, optimization, and debugging.",
      },
    ],
  },
  {
    title: "Engineering",
    lede: "Gameplay, shipping, rendering, and the unglamorous work that gets a title through compliance.",
    items: [
      {
        title: "Gameplay",
        detail: "Player, weapons and projectiles, destruction, UI, and visual scripting.",
      },
      {
        title: "Compliance and shipping",
        detail: "PlayStation, Xbox, Steam, Switch, Epic, and publishing requirements.",
      },
      {
        title: "Optimization",
        detail: "CPU, memory, physics, animation, network, and async tasks.",
      },
      {
        title: "Graphics and rendering",
        detail: "Shaders, render pipeline improvements, and particle systems.",
      },
    ],
  },
] as const

export const strengths = [
  {
    title: "Real-time multiplayer",
    detail: "High-end, real-time multiplayer is the studio specialty.",
  },
  {
    title: "Mature technology",
    detail: "In-house network platform using AWS and Unreal Engine.",
  },
  {
    title: "Experienced leadership",
    detail: "Founded by ex-Insomniac management.",
  },
  {
    title: "AAA development",
    detail: "Background on Ratchet & Clank, Resistance, Call of Duty, and more.",
  },
  {
    title: "A cohesive team",
    detail: "Shipping games together as Disruptive for 10 years.",
  },
  {
    title: "Self publishing",
    detail: "Launched and marketed Megalith.",
  },
] as const

export const qualifications = [
  { title: "Senior staff", detail: "An average of 9 years in the game industry." },
  { title: "Proven ability to ship", detail: "9 games shipped as a team." },
  { title: "Unreal experience", detail: "Every employee has shipped at least one game in Unreal." },
  { title: "Live games", detail: "10 years of post-launch live ops on AAA console and mobile games." },
  {
    title: "Multi-platform",
    detail: "Xbox One, PlayStation 4, Nintendo Switch, PC, VR, and mobile.",
  },
  { title: "Repeat clients", detail: "The business depends on reputation." },
  { title: "Tools support", detail: "Tools built and supported across multiple products." },
] as const

export const leaders = [
  { name: "Eric Ellis", role: "Leadership team" },
  { name: "Grant Rogers", role: "Leadership team" },
] as const

export const homeHero: Plate = {
  src: "/images/wreck-shore.jpg",
  width: 1920,
  height: 1080,
  alt: "The ORCA, a red hybrid craft, sits in the shallows with its crew on the roof.",
  // Landmark: center of the ORCA hull, left of center in the file.
  focalX: 0.34,
  focalY: 0.48,
  fillFrame: true,
  bleed: true,
  subject: { l: 0.0, t: 0.1, r: 0.98, b: 0.64 },
  align: "right",
}

export const pageHeroes = {
  games: {
    kicker: "Selected work",
    title: "Games",
    lede: "Original work and the online systems behind games people already know.",
    image: {
      src: "/images/wreck-crew.jpg",
      width: 1920,
      height: 1080,
      alt: "Four Wreck Runners crew members stand in front of the ORCA.",
      // Landmark: the center runner.
      focalX: 0.5,
      focalY: 0.46,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.18, t: 0.16, r: 0.86, b: 0.7 },
      align: "right" as const,
    },
  },
  services: {
    kicker: "What we do",
    title: "Services",
    lede: "Connected gameplay, tech art, and the engineering that ships it.",
    image: {
      src: "/images/raw-data.webp",
      width: 1200,
      height: 676,
      alt: "An armored figure aims across a burning arena.",
      focalX: 0.84,
      focalY: 0.34,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.34, t: 0.04, r: 0.99, b: 0.6 },
      align: "left" as const,
    },
  },
  about: {
    kicker: "The studio",
    title: "About",
    lede: "A small, fully remote studio headquartered in Oakland, California.",
    image: {
      src: "/images/studio-armor.webp",
      width: 1910,
      height: 1608,
      alt: "Armored figure with white hair and an amber visor.",
      // Landmark: the visor eyes.
      focalX: 0.74,
      focalY: 0.36,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.22, t: 0.06, r: 0.98, b: 0.38 },
      align: "left" as const,
    },
  },
  contact: {
    kicker: "Studio",
    title: "Contact",
    lede: "Questions, partnerships, and press. We read every note.",
    image: {
      src: "/images/wreck-hall.jpg",
      width: 1717,
      height: 1080,
      alt: "A crew inside a grand hall as a figure descends the stairs.",
      // Landmark: the figure on the stairs.
      focalX: 0.5,
      focalY: 0.4,
      fillFrame: true,
      bleed: true,
      subject: { l: 0.22, t: 0.08, r: 0.8, b: 0.64 },
      align: "left" as const,
    },
  },
}
