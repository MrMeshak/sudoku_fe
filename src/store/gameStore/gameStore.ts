import { create } from 'zustand';

interface IGameState {
  index: number | undefined;

  playerMoveValidBoard: number[];
  playerMoveErrorBoard: number[];
  puzzleBoard: number[];
  hintBoard: number[];
  solutionBoard: number[];
  notesBoard: TNote[];

  moveHistory: TGameMove[];

  generatePuzzle: () => void;
  setPostion: (index: number) => void;
  makeMove: (value: number) => void;
  makeNote: () => void;
  erase: () => void;
}

const useGameStore = create<IGameState>((set) => ({
  index: undefined,
  playerMoveValidBoard: Array(81).fill(0),
  playerMoveErrorBoard: Array(81).fill(0),
  puzzleBoard: Array(81).fill(0),
  hintBoard: Array(81).fill(0),
  solutionBoard: Array(81).fill(0),
  notesBoard: Array(81),

  moveHistory: [],

  generatePuzzle: () => {},
  setPostion: (index: number) => {},
  makeMove: (value: number) => {},
  makeNote: () => {},
  erase: () => {},
}));
