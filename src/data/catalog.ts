import { SURFACE_IMAGES } from './brand';

export type ConceptCategory =
  | 'all'
  | '3d-floors'
  | 'metallic-marble'
  | 'countertops'
  | 'commercial'
  | 'textures';

export interface DesignConcept {
  id: string;
  title: string;
  category: Exclude<ConceptCategory, 'all'>;
  categoryLabel: string;
  application: string;
  palette: string;
  description: string;
  image: string;
  aspect: 'wide' | 'landscape' | 'portrait';
  originLabel: 'Original Artistic Concept';
}

export const CONCEPT_FILTERS: { id: ConceptCategory; label: string }[] = [
  { id: 'all', label: 'All Concepts' },
  { id: '3d-floors', label: '3D Artistic Floors' },
  { id: 'metallic-marble', label: 'Metallic & Marble' },
  { id: 'countertops', label: 'Epoxy Countertops' },
  { id: 'commercial', label: 'Commercial Spaces' },
  { id: 'textures', label: 'Close-Up Textures' },
];

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: 'midnight-champagne-pavilion',
    title: 'Midnight & Champagne Flowing Resin',
    category: 'metallic-marble',
    categoryLabel: 'Metallic & Marble',
    application: 'Residential Living Pavilion',
    palette: 'Deep Midnight Blue · Champagne Gold · Pearl Slate',
    description:
      'Seamless mirror-gloss metallic epoxy floor engineered for open architectural residences, capturing full daylight reflections across deep midnight tones and delicate champagne veining.',
    image: SURFACE_IMAGES.heroLuxuryMetallic,
    aspect: 'wide',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'coastal-ocean-3d-floor',
    title: 'Coastal Horizon 3D Ocean Resin',
    category: '3d-floors',
    categoryLabel: '3D Artistic Floors',
    application: 'Residential Spa & Feature Suite',
    palette: 'Electric Aqua · Deep Lagoon · Warm Sand',
    description:
      'Multi-layered 3D coastal floor concept blending translucent aqua wave depth with natural shoreline mineral textures beneath a glass-clear high-gloss surface.',
    image: SURFACE_IMAGES.oceanWave3d,
    aspect: 'wide',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'obsidian-gold-waterfall-island',
    title: 'Midnight & Gold Waterfall Island',
    category: 'countertops',
    categoryLabel: 'Epoxy Countertops',
    application: 'Custom Kitchen Island',
    palette: 'Deep Midnight Blue · Metallic Champagne · Pearl White',
    description:
      'Monolithic poured epoxy countertop wrapping seamlessly down a waterfall island edge with rich sapphire, pearl, and brushed champagne metallic ribbons.',
    image: SURFACE_IMAGES.countertopObsidianGold,
    aspect: 'wide',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'pearl-champagne-metallic-living',
    title: 'Warm Pearl & Champagne Swirl',
    category: 'metallic-marble',
    categoryLabel: 'Metallic & Marble',
    application: 'Contemporary Residence',
    palette: 'Warm Pearl · Graphite · Metallic Champagne',
    description:
      'Fluid metallic pigment composition balancing muted charcoal movement with soft champagne gold highlights for luminous everyday residential living spaces.',
    image: SURFACE_IMAGES.metallicChampagneLiving,
    aspect: 'landscape',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'aqua-ivory-river-countertop',
    title: 'Electric Aqua & Ivory River Worktop',
    category: 'countertops',
    categoryLabel: 'Epoxy Countertops',
    application: 'Decorative Kitchen Surface',
    palette: 'Electric Aqua · Warm Ivory · Natural Vein',
    description:
      'Translucent turquoise river-inspired resin channel suspended beside warm ivory marble-effect swirls with a softly radiused mirror-polished front edge.',
    image: SURFACE_IMAGES.countertopAquaRiver,
    aspect: 'landscape',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'calacatta-silk-marble-floor',
    title: 'Calacatta Pearl Marble-Effect Floor',
    category: 'metallic-marble',
    categoryLabel: 'Metallic & Marble',
    application: 'Residential Kitchen & Dining',
    palette: 'Pearl White · Soft Marble · Cool Silver',
    description:
      'Grout-free marble-effect poured resin floor delivering sweeping organic veining and crisp sky-lit reflection across expansive dining and kitchen zones.',
    image: SURFACE_IMAGES.marbleCalacattaFloor,
    aspect: 'landscape',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'showroom-indigo-mirror-expanse',
    title: 'Architectural Showroom Graphite Indigo',
    category: 'commercial',
    categoryLabel: 'Commercial Spaces',
    application: 'Retail Gallery & Showroom',
    palette: 'Deep Midnight Blue · Royal Indigo · Silver Slate',
    description:
      'Continuous commercial epoxy floor system reflecting linear architectural lighting across broad showroom spans without visible seams or interruptions.',
    image: SURFACE_IMAGES.commercialShowroom,
    aspect: 'wide',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'boutique-reception-royal-indigo',
    title: 'Royal Indigo & Champagne Lobby',
    category: 'commercial',
    categoryLabel: 'Commercial Spaces',
    application: 'Commercial Reception Interior',
    palette: 'Royal Indigo · Metallic Champagne · Soft Slate',
    description:
      'Custom metallic reception floor harmonising deep royal indigo waves and subtle champagne streaks with warm timber and stone architectural millwork.',
    image: SURFACE_IMAGES.commercialReception,
    aspect: 'landscape',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'macro-metallic-champagne-pigment',
    title: 'Cured Metallic Pigment Depth Study',
    category: 'textures',
    categoryLabel: 'Close-Up Textures',
    application: 'Surface Finish Detail',
    palette: 'Metallic Champagne · Deep Midnight · Pearl',
    description:
      'Extreme close-up revealing suspended metallic mica swirls and glass-clear resin edge depth cured into a continuous optical topcoat.',
    image: SURFACE_IMAGES.closeupMetallicSwirl,
    aspect: 'portrait',
    originLabel: 'Original Artistic Concept',
  },
  {
    id: 'macro-3d-aqua-violet-strata',
    title: 'Layered 3D Aqua & Violet Strata',
    category: 'textures',
    categoryLabel: 'Close-Up Textures',
    application: '3D Resin Depth Detail',
    palette: 'Electric Aqua · Violet · Deep Indigo',
    description:
      'Macro view into multi-pour 3D translucent resin strata showcasing suspended aqua mist, deep violet crystalline flecks, and crisp specular clarity.',
    image: SURFACE_IMAGES.closeup3dAquaDepth,
    aspect: 'portrait',
    originLabel: 'Original Artistic Concept',
  },
];
