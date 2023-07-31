'use Client';
import { TGameCell } from '@/store/gameStore/helper/game.model';

export interface IGameCellProps {
  cellData: TGameCell;
}

export default function GameCell({ cellData }: IGameCellProps) {
  if (cellData.__typename === 'IPuzzleCell') {
    return (
      <div className=" flex aspect-square w-full items-center justify-center border text-lg font-semibold text-slate-900">
        <p>{cellData.value}</p>
      </div>
    );
  }

  if (cellData.__typename === 'IHintCell') {
    return (
      <div>
        <p>{cellData.value}</p>
      </div>
    );
  }

  if (cellData.__typename === 'IPlayerCell') {
    return (
      <div>
        <p>{cellData.value}</p>
      </div>
    );
  }

  if (cellData.__typename === 'INoteCell') {
    return (
      <div>
        {Array.from(cellData.notes).map((note, index) => {
          return <p key={`note_${cellData.index}_${index}`}>{note}</p>;
        })}
      </div>
    );
  }

  return (
    <div className=" flex aspect-square w-full items-center justify-center border text-lg font-semibold text-slate-900">
      <p>{cellData.value}</p>
    </div>
  );
}
