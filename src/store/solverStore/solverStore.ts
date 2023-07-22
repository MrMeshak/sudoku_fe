import { stringBoardToBoard } from '@/sudokuUi/sudokuUiHelper';
import { create } from 'zustand';

interface ISolverCell {
  status: string;
}

interface ISolverState {
  starterBoard: number[];
  solutionBoard: number[];

  updatePuzzleBoard: (stringBoard: string) => void;
}

const useSolverStore = create<ISolverState>((set) => ({
  starterBoard: Array(81).fill(0),
  solutionBoard: Array(81).fill(0),

  updatePuzzleBoard: (stringBoard: string) => {
    const updatedBoard = stringBoardToBoard(stringBoard);
    set(() => {
      return {
        starterBoard: updatedBoard,
      };
    });
  },
  generateSolutionBoard: () => {},
}));
