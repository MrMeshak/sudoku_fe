import { ISolverCell } from '@/sudoku/sudokuSolver/generateBoxBoardCells';

export interface ISolverSudokuCellProps {
  cellData: ISolverCell;
}

export default function SolverSudokuCell({ cellData }: ISolverSudokuCellProps) {
  return (
    <div className="flex h-full w-full items-center justify-center border ">
      <p>{cellData.value}</p>
    </div>
  );
}
