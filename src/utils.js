// src/utils.js
export function pointsForWord(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
    
    let points = 0;
    for (const char of word.toLowerCase()) {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        points += 1;
      } else if (char.match(/[a-z]/)) {
        points += 2;
      }
    }
    return points;
  }
  