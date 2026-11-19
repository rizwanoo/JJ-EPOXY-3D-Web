import test from 'node:test';
import assert from 'node:assert/strict';
import { DESIGN_CONCEPTS } from '../data/catalog';
import { filterConcepts, getAdjacentConceptIndex } from './galleryFilter';

test('filterConcepts returns all items for "all" category', () => {
  const all = filterConcepts(DESIGN_CONCEPTS, 'all');
  assert.equal(all.length, DESIGN_CONCEPTS.length);
});

test('filterConcepts isolates requested category items accurately', () => {
  const countertops = filterConcepts(DESIGN_CONCEPTS, 'countertops');
  assert.equal(countertops.length, 2);
  assert.ok(countertops.every((c) => c.category === 'countertops'));
});

test('getAdjacentConceptIndex wraps cleanly across bounds', () => {
  assert.equal(getAdjacentConceptIndex(0, 5, 'prev'), 4);
  assert.equal(getAdjacentConceptIndex(4, 5, 'next'), 0);
  assert.equal(getAdjacentConceptIndex(2, 5, 'next'), 3);
  assert.equal(getAdjacentConceptIndex(0, 0, 'next'), -1);
});
