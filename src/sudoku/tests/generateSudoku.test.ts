import { generateSudoku, hasUniqueSolution } from '../sudoku';

describe('sudoku - generateSudoku', () => {
  describe('when given a difficulty level', () => {
    it('should return GenratedSudokuSuccess ', () => {
      const generateSudokuResult = generateSudoku(3);
      const result = hasUniqueSolution(generateSudokuResult.board);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
});
