import { TGameCell } from '@/store/gameStore/helper/game.model';
import GameCell from './gameCell';

export interface IGameBoardProps {
  boxBoardCells: TGameCell[][];
}

export default function GameBoard({ boxBoardCells }: IGameBoardProps) {
  return (
    <div className="grid aspect-square auto-cols-min grid-cols-3 border-2 border-slate-900">
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[0].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2  border-slate-900">
        {boxBoardCells[1].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[2].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[3].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[4].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[5].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-slate-900">
        {boxBoardCells[6].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-black">
        {boxBoardCells[7].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
      <div className="grid aspect-square grid-cols-3 border-2 border-black">
        {boxBoardCells[8].map((cell) => {
          return <GameCell cellData={cell} key={`cell_${cell.index}`} />;
        })}
      </div>
    </div>
  );
}
