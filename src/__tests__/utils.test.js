// Your tests here
// src/__tests__/utils.test.js
import { pointsForWord } from '../utils';

describe('pointsForWord', () => {
  it('calculates the total points for a word (1 point per vowel, 2 per consonant)', () => {
    const word = 'test';
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it('handles uppercase and lowercase input', () => {
    const word = 'tEsT';
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it('handles an empty string', () => {
    const word = '';
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it('handles non-alphabetic characters', () => {
    const word = 't3st!';
    const points = pointsForWord(word);
    expect(points).toBe(7); // Only alphabetic characters should be considered
  });

  it('handles non-string input gracefully', () => {
    const word = 12345;
    expect(() => pointsForWord(word)).toThrow(); // Expecting a function error or to be handled
  });
});
