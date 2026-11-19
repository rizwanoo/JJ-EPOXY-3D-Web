import { DesignConcept, ConceptCategory } from '../data/catalog';

export function filterConcepts(
  concepts: readonly DesignConcept[],
  category: ConceptCategory
): DesignConcept[] {
  if (category === 'all') {
    return [...concepts];
  }
  return concepts.filter((item) => item.category === category);
}

export function getAdjacentConceptIndex(
  currentIndex: number,
  total: number,
  direction: 'prev' | 'next'
): number {
  if (total <= 0) {
    return -1;
  }
  const normalized = ((currentIndex % total) + total) % total;
  if (direction === 'next') {
    return (normalized + 1) % total;
  }
  return (normalized - 1 + total) % total;
}
