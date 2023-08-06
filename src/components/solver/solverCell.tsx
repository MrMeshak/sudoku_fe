import { ISolverCell } from '@/store/solverStore/helper/solver.model';

export interface ISolverCellProps {
  cellData: ISolverCell;
}

export default function SolverCell({ cellData }: ISolverCellProps) {
  if (cellData.type === 'puzzle') {
    return (
      <div className=" flex aspect-square w-full items-center justify-center border text-lg font-semibold text-slate-900 md:text-xl">
        <p>{cellData.value}</p>
      </div>
    );
  }

  if (cellData.type === 'solution') {
    return (
      <div className=" flex aspect-square w-full items-center justify-center border text-lg font-semibold text-sky-700 md:text-xl">
        <p>{cellData.value}</p>
      </div>
    );
  }

  return (
    <div className="flex aspect-square w-full items-center justify-center border ">
      <p>{cellData.value}</p>
    </div>
  );
}
