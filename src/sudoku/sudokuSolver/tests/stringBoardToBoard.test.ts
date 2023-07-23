import exp from 'constants';
import { stringBoardToBoard } from '../stringBoardToBoard';

describe('sudokuSolver - stringBoardToBoard', () => {
  describe('when given a stringBoard that has characters other than . or [1-9]', () => {
    it('should return a full board that is partially/fully filled with data from stringBoard with incorrect charcters ignored', () => {
      const stringBoard = '..1a2b3c4d5e...';
      const result = stringBoardToBoard(stringBoard);

      const expected = [0, 0, 1, 2, 3, 4, 5, 0, 0, 0].concat(
        Array(81 - 10).fill(0),
      );

      expect(result).toEqual(expected);
    });
  });

  describe('when given a stringBoard that is less than 81 characters', () => {
    it('should return a full board that is partially filled with data from stringBoard', () => {
      const stringBoard =
        '172318315296364883447111892.65...9779533642158474193794813992.83856..263891541678';

      const result = stringBoardToBoard(stringBoard);

      const expected = [
        1, 7, 2, 3, 1, 8, 3, 1, 5, 2, 9, 6, 3, 6, 4, 8, 8, 3, 4, 4, 7, 1, 1, 1,
        8, 9, 2, 0, 6, 5, 0, 0, 0, 9, 7, 7, 9, 5, 3, 3, 6, 4, 2, 1, 5, 8, 4, 7,
        4, 1, 9, 3, 7, 9, 4, 8, 1, 3, 9, 9, 2, 0, 8, 3, 8, 5, 6, 0, 0, 2, 6, 3,
        8, 9, 1, 5, 4, 1, 6, 7, 8,
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('when given a stringBoard that is 81 characters or greater', () => {
    it('should return a full board that is fully filled with data from the first 81 characters in stringBoard', () => {
      const stringBoard =
        '172318315296364883447111892.65...9779533642158474193794813992.83856..26389154167812';

      const result = stringBoardToBoard(stringBoard);

      const expected = [
        1, 7, 2, 3, 1, 8, 3, 1, 5, 2, 9, 6, 3, 6, 4, 8, 8, 3, 4, 4, 7, 1, 1, 1,
        8, 9, 2, 0, 6, 5, 0, 0, 0, 9, 7, 7, 9, 5, 3, 3, 6, 4, 2, 1, 5, 8, 4, 7,
        4, 1, 9, 3, 7, 9, 4, 8, 1, 3, 9, 9, 2, 0, 8, 3, 8, 5, 6, 0, 0, 2, 6, 3,
        8, 9, 1, 5, 4, 1, 6, 7, 8,
      ];

      expect(result).toEqual(expected);
    });
  });
});
