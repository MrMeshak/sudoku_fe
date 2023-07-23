import { printBoard } from '@/sudoku/sudokuHelper';
import { generateSudoku } from '@/sudoku/generateSudoku';
import { solveBoard } from '@/sudoku/solveBoard';
import {
  generateFusedBoard,
  generateFusedBoxBoard,
} from '@/sudoku/sudokuSolver/sudokuSolverHelper';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const generateSudokuResult = generateSudoku(1);
  if (generateSudokuResult.__typename === 'GenerateSudokuSuccess') {
    const { board, solution } = generateSudokuResult;
    const fusedBoard = generateFusedBoard(board, solution);
    console.log(fusedBoard);
    const fusedBoxBoard = generateFusedBoxBoard(board, solution);
    console.log(board);
    console.log(solution);
    console.log(fusedBoxBoard);
  }

  return <div></div>;
}
