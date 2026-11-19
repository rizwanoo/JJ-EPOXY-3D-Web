export const BRAND_INFO = {
  name: 'JJ EPOXY 3D',
  handle: '@jjepoxy3d',
  category: 'Artist',
  officialBio:
    'Custom epoxy floors, countertops & 3D design · Residential | Commercial',
  whatsappUrl: 'https://wa.link/n1r1q0',
  instagramUrl: 'https://www.instagram.com/jjepoxy3d/',
  logoUrl: '/jj-epoxy-logo.jpg',
  ogShareUrl: '/og-share-logo.jpg',
  confirmedOfferings: [
    'Custom Epoxy Floors',
    'Epoxy Countertops',
    '3D Design',
    'Residential Applications',
    'Commercial Applications',
  ] as const,
} as const;

export const SURFACE_IMAGES = {
  heroLuxuryMetallic: '/src/assets/images/hero_luxury_metallic_floor_1795086605163.jpg',
  oceanWave3d: '/src/assets/images/epoxy_3d_ocean_wave_1795086605573.jpg',
  metallicChampagneLiving: '/src/assets/images/epoxy_metallic_champagne_living_1795086604980.jpg',
  marbleCalacattaFloor: '/src/assets/images/epoxy_marble_calacatta_floor_1795086605490.jpg',
  countertopObsidianGold: '/src/assets/images/countertop_obsidian_gold_island_1795086604841.jpg',
  countertopAquaRiver: '/src/assets/images/countertop_aqua_river_stone_1795086605402.jpg',
  commercialShowroom: '/src/assets/images/commercial_showroom_resin_1795086604897.jpg',
  commercialReception: '/src/assets/images/commercial_reception_indigo_1795086605838.jpg',
  closeupMetallicSwirl: '/src/assets/images/closeup_metallic_pigment_swirl_1795086605329.jpg',
  closeup3dAquaDepth: '/src/assets/images/closeup_3d_aqua_depth_1795086605596.jpg',
  studioCraftPortrait: '/src/assets/images/jj_epoxy_studio_craft_1795087596878.jpg',
} as const;

export interface ActualProjectItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  sourceLabel: 'Actual JJ Epoxy 3D Project · @jjepoxy3d';
}

export const ACTUAL_INSTAGRAM_PROJECTS: ActualProjectItem[] = [
  {
    id: 'ig-ocean-3d-floor',
    title: '3D Ocean Effect Resin Floor',
    caption: 'Effect ocean con epoxy — custom coastal 3D resin floor crafted by @jjepoxy3d.',
    image: '/assets/images/jj-epoxy-3d/actual-projects/project-1.jpg',
    sourceLabel: 'Actual JJ Epoxy 3D Project · @jjepoxy3d',
  },
  {
    id: 'ig-custom-gold-table',
    title: 'Custom Gold & White Illuminated Epoxy Table',
    caption: 'Bespoke gold-framed illuminated epoxy table installation shared on @jjepoxy3d.',
    image: '/assets/images/jj-epoxy-3d/actual-projects/project-2.jpg',
    sourceLabel: 'Actual JJ Epoxy 3D Project · @jjepoxy3d',
  },
  {
    id: 'ig-crimson-commercial-finish',
    title: 'High-Gloss Crimson Commercial Finish',
    caption: 'Completed high-gloss crimson commercial kitchen epoxy floor from @jjepoxy3d.',
    image: '/assets/images/jj-epoxy-3d/actual-projects/project-6.jpg',
    sourceLabel: 'Actual JJ Epoxy 3D Project · @jjepoxy3d',
  },
  {
    id: 'ig-commercial-kitchen-reno',
    title: 'Commercial Kitchen Floor Renovation',
    caption: 'Proyecto de renovacion de pisos de cocina de restaurante — high-gloss crimson finish.',
    image: '/assets/images/jj-epoxy-3d/actual-projects/project-4.jpg',
    sourceLabel: 'Actual JJ Epoxy 3D Project · @jjepoxy3d',
  },
];
