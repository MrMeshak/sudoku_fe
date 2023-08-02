import { solveBoard } from '@/sudoku/sudokuLogic/solveBoard';
import { generateFusedBoxBoardCells } from '@/store/solverStore/helper/generateFusedBoxBoardCells';
import { stringBoardToBoard } from '@/store/solverStore/helper/stringBoardToBoard';
import { create } from 'zustand';

interface ISolverStatus {
  status: 'success' | 'unsolvable' | 'error' | '';
  message: string;
}

interface ISolverState {
  puzzleBoard: number[];
  solutionBoard: number[];

  status: ISolverStatus;

  actions: {
    solve: (stringBoard: string) => void;
    reset: () => void;
  };
}

const useSolverStore = create<ISolverState>((set) => ({
  puzzleBoard: Array(81).fill(0),
  solutionBoard: Array(81).fill(0),
  status: {
    status: '',
    message: '',
  },

  actions: {
    solve: (stringBoard: string) => {
      const board = stringBoardToBoard(stringBoard);
      const solveBoardResult = solveBoard(board);

      if (solveBoardResult.__typename === 'SolveBoardSuccess') {
        set((state) => ({
          puzzleBoard: board,
          solutionBoard: solveBoardResult.solution,
          status: { status: 'success', message: solveBoardResult.message },
        }));
        return;
      }

      if (solveBoardResult.__typename === 'SolveBoardError') {
        set((state) => ({
          puzzleBoard: board,
          solutionBoard: Array(81).fill(0),
          status: {
            status: 'error',
            message: solveBoardResult.message,
          },
        }));
        return;
      }

      if (solveBoardResult.__typename === 'SolveBoardUnsolveable') {
        set(() => ({
          puzzleBoard: board,
          solutionBoard: Array(81).fill(0),
          status: {
            status: 'unsolvable',
            message: solveBoardResult.message,
          },
        }));
        return;
      }
    },

    reset: () => {
      set(() => ({
        puzzleBoard: Array(81).fill(0),
        solutionBoard: Array(81).fill(0),
        status: {
          status: '',
          message: '',
        },
      }));
    },
  },
}));

export const useSolverStatus = () => useSolverStore((state) => state.status);

export const useSolverActions = () => useSolverStore((state) => state.actions);

export const useSolverPuzzleBoard = () =>
  useSolverStore((state) => state.puzzleBoard);
export const useSolverSolutionBoard = () =>
  useSolverStore((state) => state.solutionBoard);

export const useSolverFusedBoxBoard = () =>
  useSolverStore((state) => {
    const puzzleBoard = state.puzzleBoard;
    const solutionBoard = state.solutionBoard;

    return generateFusedBoxBoardCells(puzzleBoard, solutionBoard);
  });
