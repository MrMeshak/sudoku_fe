import { generateSudoku } from '@/sudoku/sudokuLogic/generateSudoku';
import { create } from 'zustand';
import { IBoardHistory } from './helper/game.model';
import { generateFusedGameBoardBoxCells } from './helper/generateFusedGameBoardBoxCells';
import { generateIntialNotesBoard } from './helper/generateIntialNotesBoard';
import { findErrorIndexes } from './helper/findErrorIndexes';

interface IGameState {
  status: {
    status: 'success' | 'error' | '';
    message: string;
  };

  settings: {
    difficulty: number;
  };

  index: number | undefined;

  playerBoard: number[];
  puzzleBoard: number[];
  hintBoard: number[];
  solutionBoard: number[];

  notesBoard: Set<number>[];

  mistakeIndexes: Set<number>;
  errorIndexes: Set<number>;

  history: IBoardHistory[];

  actions: {
    generatePuzzle: () => void;
    setSettings: (settings: IGameState['settings']) => void;
    setIndex: (index: number) => void;
    makeNote: (value: number) => void;
    undo: () => void;
    erase: () => void;
  };
}

const useGameStore = create<IGameState>((set, get) => {
  return {
    status: {
      status: '',
      message: '',
    },

    settings: {
      difficulty: 1,
    },

    index: 2,

    playerBoard: Array(81).fill(0),
    puzzleBoard: Array(81).fill(0),
    hintBoard: Array(81).fill(0),
    solutionBoard: Array(81).fill(0),

    notesBoard: generateIntialNotesBoard(),

    mistakeIndexes: new Set<number>(),
    errorIndexes: new Set<number>(),

    history: [],

    actions: {
      generatePuzzle: () => {
        const generateSudokuResult = generateSudoku(get().settings.difficulty);

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

      setSettings: (settings: IGameState['settings']) => {
        set((state) => ({ settings: settings }));
      },

      setIndex: (index: number) => {
        set((state) => ({ index: index }));
      },

      makeMove: (value: number) => {
        const index = get().index;
        if (!index) {
          return;
        }
        const {
          puzzleBoard,
          playerBoard,
          hintBoard,
          notesBoard,
          solutionBoard,
          mistakeIndexes,
        } = get();

        const updatedHistory: IBoardHistory[] = [...get().history];
        updatedHistory.push({
          playerBoard: playerBoard,
          hintBoard: hintBoard,
          noteBoard: notesBoard,
        });

        const updatedPlayerBoard = [...playerBoard];
        updatedPlayerBoard[index] = value;

        if (solutionBoard[index] !== value) {
          mistakeIndexes.add(index);
        }

        const updatedErrorIndexes = findErrorIndexes(
          puzzleBoard,
          updatedPlayerBoard,
          hintBoard,
          mistakeIndexes,
        );

        set((state) => ({
          history: updatedHistory,
          playerBoard: updatedPlayerBoard,
          errorIndexes: updatedErrorIndexes,
        }));
      },

      makeNote: (value: number) => {
        const index = get().index;
        if (!index) {
          return;
        }

        const updatedHistory: IBoardHistory[] = [...get().history];
        updatedHistory.push({
          playerBoard: get().playerBoard,
          hintBoard: get().hintBoard,
          noteBoard: get().notesBoard,
        });

        const updatedNotesBoard = [...get().notesBoard];
        updatedNotesBoard[index].add(value);

        set(() => ({
          notesBoard: updatedNotesBoard,
        }));
      },

      undo: () => {
        const prevState = get().history.pop();
        if (!prevState) {
          return;
        }

        set((state) => ({
          playerBoard: prevState.playerBoard,
          hintBoard: prevState.hintBoard,
          notesBoard: prevState.noteBoard,
        }));
      },

      erase: () => {
        const index = get().index;
        if (!index) {
          return;
        }

        const updatedHistory = [...get().history];
        updatedHistory.push({
          playerBoard: get().playerBoard,
          hintBoard: get().hintBoard,
          noteBoard: get().notesBoard,
        });

        const updateNoteBoard = [...get().notesBoard];
        updateNoteBoard[index].clear();
        const updatedPlayerBoard = [...get().playerBoard];
        updatedPlayerBoard[index] = 0;

        set((state) => ({
          playerBoard: updatedPlayerBoard,
          notesBoard: updateNoteBoard,
          history: updatedHistory,
        }));
      },
    },
  };
});

export const useGameActions = () => useGameStore((state) => state.actions);

export const useGameStatus = () =>
  useGameStore((state) => {
    state.status;
  });

export const useGameIndex = () => useGameStore((state) => state.index);

export const useFusedGameBoardBoxCells = () => {
  return useGameStore((state) => {
    const { puzzleBoard, playerBoard, hintBoard, notesBoard, errorIndexes } =
      state;
    return generateFusedGameBoardBoxCells(
      puzzleBoard,
      playerBoard,
      hintBoard,
      notesBoard,
      errorIndexes,
    );
  });
};
