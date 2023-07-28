'use client';
import {
  useSolverPuzzleBoard,
  useSolverSolutionBoard,
  useSolverStatus,
} from '@/store/solverStore/solverStore';
import { generateFusedBoxBoardCells } from '@/sudoku/sudokuSolver/generateFusedBoxBoardCells';
import SolverBoard from './solverBoard';
import { AlertError, AlertSuccess } from '../utils/alert/alert';
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
      <div className="mt-4">
        {status.status === 'success' ? (
          <AlertSuccess message={status.message} />
        ) : null}
        {status.status === 'error' || status.status === 'unsolvable' ? (
          <AlertError message={status.message} />
        ) : null}
      </div>
    </div>
  );
}
