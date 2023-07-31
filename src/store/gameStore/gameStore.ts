import { generateSudoku } from '@/sudoku/sudokuLogic/generateSudoku';
import { create } from 'zustand';
import { IBoardHistory } from './helper/game.model';
import { generateFusedGameBoardBoxCells } from './helper/generateFusedGameBoardBoxCells';

interface IGameState {
  status: {
    status: 'success' | 'error' | '';
    message: string;
  };

  index: number | undefined;

  playerBoard: number[];
  puzzleBoard: number[];
  hintBoard: number[];
  solutionBoard: number[];

  notesBoard: Set<number>[];

  history: IBoardHistory[];

  actions: {
    generatePuzzle: (difficulty: number) => void;
    setPostion: (index: number) => void;
    makeMove: (value: number) => void;
    makeNote: () => void;
    erase: () => void;
  };
}

const useGameStore = create<IGameState>((set) => ({
  status: {
    status: '',
    message: '',
  },

  index: undefined,

  playerBoard: Array(81).fill(0),
  puzzleBoard: Array(81).fill(0),
  hintBoard: Array(81).fill(0),
  solutionBoard: Array(81).fill(0),

  notesBoard: Array(81).map(() => new Set<number>()),
  history: [],

  actions: {
    generatePuzzle: (difficulty: number) => {
      const generateSudokuResult = generateSudoku(difficulty);

      if (generateSudokuResult.__typename === 'GenerateSudokuError') {
        set((state) => ({
          status: { status: 'error', message: generateSudokuResult.message },
        }));
        return;
      }

      set((state) => ({
        status: { status: 'success', message: generateSudokuResult.message },
        puzzleBoard: generateSudokuResult.board,
        solutionBoard: generateSudokuResult.solution,
      }));
      return;
    },

    setPostion: (index: number) => {
      set((state) => ({ index: index }));
    },
    makeMove: (value: number) => {},
    makeNote: () => {},
    erase: () => {},
  },
}));

export const useGameActions = () =>
  useGameStore((state) => {
    state.actions;
  });

export const useGameStatus = () =>
  useGameStore((state) => {
    state.status;
  });

export const useFusedGameBoardBoxCells = () => {
  return useGameStore((state) => {
    const { puzzleBoard, playerBoard, hintBoard, notesBoard } = state;
    return generateFusedGameBoardBoxCells(
      puzzleBoard,
      playerBoard,
      hintBoard,
      notesBoard,
    );
  });
};
