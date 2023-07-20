import { isValidBoard } from '../sudokuHelper';

describe('sudoku - isValidBoard', () => {
  describe('when given an invalid sudoku board - invalid length', () => {
    it('should return false', () => {
      const invalidBoard: number[] = [];

      const result = isValidBoard(invalidBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given an invalid sudoku board - invalid numbers outside 1-9 range', () => {
    it('should return false', () => {
      // prettier-ignore
      const invalidBoard = [
        5,3,0,0,7,0,0,0,0,
        6,0,0,1,9,5,0,0,0,
        0,9,8,0,0,0,0,6,0,
        8,0,0,0,6,0,0,0,3,
        4,0,0,8,0,3,0,0,1,
        7,0,0,0,2,0,0,0,6,
        0,6,0,0,0,0,2,10,0,
        0,0,0,-1,1,9,0,0,5,
        0,0,0,0,8,0,0,7,9
      ]

      const result = isValidBoard(invalidBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given an invalid sudoku board layout - duplicate in Col', () => {
    it('should return false', () => {
      //prettier-ignore
      const invalidBoard: number[] = [
        6,0,1,5,9,0,0,0,0,
        0,9,0,0,1,0,0,0,0,
        0,0,0,0,0,0,0,0,4,
        0,7,0,3,1,4,0,0,6,
        0,2,4,0,0,0,0,0,5,
        0,0,3,0,0,0,0,1,0,
        0,0,6,0,0,0,0,0,3,
        0,0,0,9,0,2,0,4,0,
        0,0,0,0,0,1,6,0,0,
      ];

      const result = isValidBoard(invalidBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given an invalid sudoku board layout - duplicate in Row', () => {
    it('should return false', () => {
      //prettier-ignore
      const invalidBoard: number[] = [
        0,4,0,1,0,0,3,5,0,
        0,0,0,0,0,0,0,0,0,
        0,0,0,2,0,5,0,0,0,
        0,0,0,4,0,8,9,0,0,
        2,6,0,0,0,0,0,1,2,
        0,5,0,3,0,0,0,0,7,
        0,0,4,0,0,0,1,6,0,
        6,0,0,0,0,7,0,0,0,
        0,1,0,0,8,0,0,2,0,
      ];

      const result = isValidBoard(invalidBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given an invalid sudoku board layout - duplicate in box', () => {
    it('should return false', () => {
      // prettier-ignore
      const invalidBoard: number[] = [
        0,0,9,0,7,0,0,0,5,
        0,0,2,1,0,0,9,0,0,
        0,7,0,0,0,5,0,0,1,
        0,0,8,5,1,0,0,0,0,
        0,5,0,0,0,0,3,0,0,
        0,0,0,0,0,3,0,0,6,
        8,0,0,0,0,0,0,0,0,
        2,1,0,0,0,0,0,8,7,
      ];

      const result = isValidBoard(invalidBoard);
      const expected = false;

      expect(result).toBe(expected);
    });
  });

  describe('when given a valid sudoku board layout', () => {
    it('should return true', () => {
      // prettier-ignore
      const validBoard = [ 
        5,6,3,8,7,9,2,1,4,
        7,1,9,4,2,3,6,5,8,
        2,8,4,5,6,1,3,9,7,
        4,2,6,1,5,7,9,8,3,
        1,9,5,6,3,8,4,7,2,
        8,3,7,2,9,4,1,6,5,
        9,4,8,3,1,5,7,2,6,
        6,5,1,7,4,2,8,3,9,
        3,7,2,9,8,6,5,4,1,
      ]

      const result = isValidBoard(validBoard);
      const expected = true;

      expect(result).toBe(expected);
    });
  });
});
