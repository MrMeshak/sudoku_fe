import { escape } from 'querystring';
import { hasUniqueSolution } from '../hasUniqueSolution';

describe('sudoku - hasUniqueSolution', () => {
  describe('when given a sudoku board with no solution', () => {
    if ('should return false') {
      //prettier-ignore
      const noSolutionBoard = [
        0,0,9,0,2,8,7,0,0,
        8,0,6,0,0,4,0,0,5,
        0,0,3,0,0,0,0,0,4,
        6,0,0,0,0,0,0,0,4,
        0,2,0,7,1,3,4,5,0,
        0,0,0,0,0,0,0,0,2,
        3,0,0,0,0,0,5,0,0,
        9,0,0,4,0,0,8,0,7,
        0,0,1,2,5,0,3,0,0,
      ];

      const result = hasUniqueSolution(noSolutionBoard);
      const expected = false;

      expect(result).toBe(expected);
    }
  });

  describe('when given a sudoku board with multiple solutions', () => {
    it('should return false', () => {
      //prettier-ignore
      const multipleSolutionsBoard = [
        0,3,9,0,0,0,1,2,0,
        0,0,0,9,0,7,0,0,0,
        8,0,0,4,0,1,0,0,6,
        0,4,2,0,0,0,7,9,0,
        0,0,0,0,0,0,0,0,0,
        0,9,1,0,0,0,5,4,0,
        5,0,0,1,0,9,0,0,3,
        0,0,0,8,0,5,0,0,0,
        0,1,4,0,0,0,8,7,0
      ]

      const result = hasUniqueSolution(multipleSolutionsBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given a sudoku board with a single solution', () => {
    it('should return true', () => {
      //prettier-ignore
      const uniqueSolutionBoard = [
        0,0,5,4,0,0,0,0,0,
        0,0,0,0,0,0,1,9,6,
        6,0,0,0,1,8,0,0,0,
        0,6,7,0,3,0,0,0,0,
        1,8,0,0,4,9,0,0,7,
        0,0,0,0,2,0,0,1,0,
        0,4,0,9,0,2,3,0,0,
        0,0,0,1,0,0,4,2,0,
        8,0,0,0,7,0,5,0,0,
      ]

      const result = hasUniqueSolution(uniqueSolutionBoard);
      const expected = true;

      expect(result).toBe(expected);
    });
  });
});
