import { describe, it, expect } from 'vitest';

// Example function to test
function sum(a: number, b: number): number {
  return a + b;
}

describe('Example Test Suite', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
