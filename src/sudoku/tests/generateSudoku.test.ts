import { generateFilledBoard } from '../generateFilledBoard';
import { hasUniqueSolution } from '../hasUniqueSolution';
import { generateSudoku } from '../generateSudoku';

describe('sudoku - generateSudoku', () => {
  describe('when given a difficulty level', () => {
    it('should return GenratedSudokuSuccess ', () => {
      const generateSudokuResult = generateSudoku(3);

      expect(generateSudokuResult.__typename).toBe('GenerateSudokuSuccess');
      if (generateSudokuResult.__typename === 'GenerateSudokuSuccess') {
        const hasUniqueSolutionResult = hasUniqueSolution(generateSudokuResult.board);
        expect(hasUniqueSolutionResult).toBe(true);
      }
    });
  });
});
