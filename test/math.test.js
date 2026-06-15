import test from 'node:test';
import assert from 'node:assert';
import add from '../src/math.js';

test('add function should return the sum of two numbers', () => {
  const result = add(2, 3);
  assert.strictEqual(result, 5, 'Expected add(2, 3) to equal 5');
});

test('add function should handle negative numbers', () => {
  const result = add(-2, -3);
  assert.strictEqual(result, -5, 'Expected add(-2, -3) to equal -5');
});

test('add function should handle zero', () => {
  const result = add(0, 5);
  assert.strictEqual(result, 5, 'Expected add(0, 5) to equal 5');
});