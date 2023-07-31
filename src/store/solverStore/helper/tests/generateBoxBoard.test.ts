import { generateBoxBoardCells } from '../generateBoxBoardCells';

describe('sudokuSolver - generateBoxBoardCells', () => {
  describe('when given a board', () => {
    it('should should return a boxBoard made of cell objects', () => {
      //prettier-ignore
      const board = [
        5,3,0,0,7,0,0,0,0,
        6,0,0,1,9,5,0,0,0,
        0,9,8,0,0,0,0,6,0,
        8,0,0,0,6,0,0,0,3,
        4,0,0,8,0,3,0,0,1,
        7,0,0,0,2,0,0,0,6,
        0,6,0,0,0,0,2,8,0,
        0,0,0,4,1,9,0,0,5,
        0,0,0,0,8,0,0,7,9,
      ]

      const generateBoxBoardCellsResult = generateBoxBoardCells(board);

      expect(generateBoxBoardCellsResult[0][0]).toEqual({
        index: 0,
        value: '5',
        type: 'puzzle',
      });

      expect(generateBoxBoardCellsResult[0][2]).toEqual({
        index: 2,
        value: '',
        type: 'empty',
      });

      expect(generateBoxBoardCellsResult[8][8]).toEqual({
        index: 80,
        value: '9',
        type: 'puzzle',
      });
    });
  });
});
