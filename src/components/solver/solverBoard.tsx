import { ISolverCell } from '@/store/solverStore/helper/solver.model';
import * as React from 'react';
import SolverCell from './solverCell';

export interface ISolverBoardProps {
  boxBoardCells: ISolverCell[][];
}

export default function SolverBoard({ boxBoardCells }: ISolverBoardProps) {
  return (
    <div className="grid aspect-square auto-cols-min grid-cols-3 border-2 border-slate-900">
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[0].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2  border-slate-900">
        {boxBoardCells[1].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[2].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[3].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[4].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[5].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[6].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-black">
        {boxBoardCells[7].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-black">
        {boxBoardCells[8].map((cell) => {
          return <SolverCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
    </div>
  );
}
