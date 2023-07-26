'use client';
import {
  useSolverPuzzleBoard,
  useSolverSolutionBoard,
  useSolverStatus,
} from '@/store/solverStore/solverStore';
import { generateFusedBoxBoardCells } from '@/sudoku/sudokuSolver/generateFusedBoxBoardCells';
import SolverBoard from './solverBoard';
export interface ISolverSolutionProps {}

export default function SolverSolution(props: ISolverSolutionProps) {
  const puzzleBoard = useSolverPuzzleBoard();
  const solutionBoard = useSolverSolutionBoard();
  const status = useSolverStatus();

  const boxBoardCells = generateFusedBoxBoardCells(puzzleBoard, solutionBoard);

  if (status.status === '') {
    return null;
  }

  return (
    <div className="m-8">
      <SolverBoard boxBoardCells={boxBoardCells} />
    </div>
  );
}
