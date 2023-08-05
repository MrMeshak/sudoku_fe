import { generateSudoku } from '@/sudoku/sudokuLogic/generateSudoku';
import { create } from 'zustand';
import { IBoardHistory } from './helper/game.model';
import { generateFusedGameBoardBoxCells } from './helper/generateFusedGameBoardBoxCells';
import { generateIntialNotesBoard } from './helper/generateIntialNotesBoard';
import { findErrorIndexes } from './helper/findErrorIndexes';
import { findEmptyIndexes } from './helper/findEmptyIndexes';

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
    makeMove: (value: number) => void;
    makeNote: (value: number) => void;
    makeHint: () => void;
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
        if (index === undefined) {
          return;
        }
        const {
          puzzleBoard,
          playerBoard,
          hintBoard,
          notesBoard,
          solutionBoard,
          mistakeIndexes,
          errorIndexes,
          history,
        } = get();

        history.push({
          playerBoard: playerBoard,
          hintBoard: hintBoard,
          notesBoard: notesBoard,
          errorIndexes: errorIndexes,
          mistakeIndexes: mistakeIndexes,
        });

        const updatedPlayerBoard = [...playerBoard];
        updatedPlayerBoard[index] = value;

        const updatedMistakeIndexes = new Set(mistakeIndexes);
        if (solutionBoard[index] !== value) {
          updatedMistakeIndexes.add(index);
        }

        const updatedErrorIndexes = findErrorIndexes(
          puzzleBoard,
          updatedPlayerBoard,
          hintBoard,
          updatedMistakeIndexes,
        );

        set((state) => ({
          history: history,
          playerBoard: updatedPlayerBoard,
          mistakeIndexes: updatedMistakeIndexes,
          errorIndexes: updatedErrorIndexes,
        }));
      },

      makeNote: (value: number) => {
        const index = get().index;
        if (index === undefined) {
          return;
        }

        const {
          playerBoard,
          hintBoard,
          notesBoard,
          mistakeIndexes,
          errorIndexes,
          history,
        } = get();

        history.push({
          playerBoard: playerBoard,
          hintBoard: hintBoard,
          notesBoard: notesBoard,
          mistakeIndexes: mistakeIndexes,
          errorIndexes: errorIndexes,
        });

        const updatedNotesBoard = [...notesBoard];
        updatedNotesBoard[index] = new Set(updatedNotesBoard[index]).add(value);

        set(() => ({
          notesBoard: updatedNotesBoard,
        }));
      },

      makeHint: () => {
        const {
          puzzleBoard,
          playerBoard,
          hintBoard,
          notesBoard,
          solutionBoard,
          mistakeIndexes,
          errorIndexes,
          history,
        } = get();

        history.push({
          playerBoard,
          hintBoard,
          notesBoard,
          mistakeIndexes,
          errorIndexes,
        });

        const emptyIndexes = findEmptyIndexes(
          puzzleBoard,
          playerBoard,
          hintBoard,
        );
        if (emptyIndexes.length === 0) {
          return;
        }
        const index =
          emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];

        const updatedHintBoard = [...hintBoard];
        updatedHintBoard[index] = solutionBoard[index];

        set((state) => ({
          hintBoard: updatedHintBoard,
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
          notesBoard: prevState.notesBoard,
          mistakeIndexes: prevState.mistakeIndexes,
          errorIndexes: prevState.errorIndexes,
        }));
      },

      erase: () => {
        const index = get().index;
        if (!index) {
          return;
        }

        const {
          puzzleBoard,
          playerBoard,
          hintBoard,
          notesBoard,
          mistakeIndexes,
          errorIndexes,
        } = get();

        const updatedHistory = [...get().history];
        updatedHistory.push({
          playerBoard: playerBoard,
          hintBoard: hintBoard,
          notesBoard: notesBoard,
          mistakeIndexes: mistakeIndexes,
          errorIndexes: errorIndexes,
        });

        const updateNoteBoard = [...get().notesBoard];
        updateNoteBoard[index].clear();
        const updatedPlayerBoard = [...get().playerBoard];
        updatedPlayerBoard[index] = 0;
        const updatedMistakeIndexes = new Set(mistakeIndexes);
        updatedMistakeIndexes.delete(index);

        const updatedErrorIndexes = findErrorIndexes(
          puzzleBoard,
          updatedPlayerBoard,
          hintBoard,
          updatedMistakeIndexes,
        );

        set((state) => ({
          playerBoard: updatedPlayerBoard,
          notesBoard: updateNoteBoard,
          history: updatedHistory,
          mistakeIndexes: updatedMistakeIndexes,
          errorIndexes: updatedErrorIndexes,
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
