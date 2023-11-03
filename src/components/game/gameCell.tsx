'use Client';
import { useGameActions, useGameIndex } from '@/store/gameStore/gameStore';
import {
  IEmptyCell,
  IHintCell,
  INoteCell,
  IPlayerCell,
  IPuzzleCell,
  TGameCell,
} from '@/store/gameStore/helper/game.model';

export interface IGameCellProps {
  cellData: TGameCell;
}

export default function GameCell({ cellData }: IGameCellProps) {
  if (cellData.__typename === 'IPuzzleCell') {
    return <PuzzleCell cellData={cellData} />;
  }

  if (cellData.__typename === 'IHintCell') {
    return <HintCell cellData={cellData} />;
  }

  if (cellData.__typename === 'IPlayerCell') {
    return <PlayerCell cellData={cellData} />;
  }

  if (cellData.__typename === 'INoteCell') {
    return <NoteCell cellData={cellData} />;
  }

  return <EmptyCell cellData={cellData} />;
}

interface IPuzzleCellProps {
  cellData: IPuzzleCell;
}

function PuzzleCell({ cellData }: IPuzzleCellProps) {
  return (
    <div className=" flex aspect-square w-full items-center justify-center border font-semibold text-slate-900 sm:text-xl md:text-2xl">
      <p className="">{cellData.value}</p>
    </div>
  );
}

interface IHintCellProps {
  cellData: IHintCell;
}

function HintCell({ cellData }: IHintCellProps) {
  return (
    <div className="text-emerald-700md:text-xl flex aspect-square w-full items-center justify-center border bg-emerald-50 text-lg font-semibold sm:text-xl md:text-2xl">
      <p>{cellData.value}</p>
    </div>
  );
}

interface IPlayerCellProps {
  cellData: IPlayerCell;
}

function PlayerCell({ cellData }: IPlayerCellProps) {
  const { setIndex } = useGameActions();
  const index = useGameIndex();

  const handleClick = () => {
    setIndex(cellData.index);
  };

  if (cellData.hasError) {
    return (
      <div
        onClick={handleClick}
        className={`flex aspect-square w-full flex-wrap items-center justify-center border text-lg font-semibold text-rose-700 sm:text-xl  md:text-2xl 
      ${index === cellData.index ? 'bg-rose-200' : 'bg-rose-100'} `}
      >
        <p>{cellData.value}</p>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`flex aspect-square w-full flex-wrap items-center justify-center border text-lg font-semibold text-sky-700 sm:text-xl md:text-2xl
      ${index === cellData.index ? 'bg-slate-100' : 'bg-white'} `}
    >
      <p>{cellData.value}</p>
    </div>
  );
}

interface INoteCellProps {
  cellData: INoteCell;
}

function NoteCell({ cellData }: INoteCellProps) {
  const index = useGameIndex();
  const { setIndex } = useGameActions();

  const handleClick = () => {
    setIndex(cellData.index);
  };

  return (
    <div
      onClick={handleClick}
      className={` :text-sm flex flex-wrap items-start overflow-hidden border p-0.5 text-center text-sm text-amber-600 md:text-lg ${
        index === cellData.index ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      {Array.from(cellData.notes).map((note, index) => {
        return (
          <p key={`note_${cellData.index}_${index}`} className="pr-[0.1rem]">
            {note}
          </p>
        );
      })}
    </div>
  );
}

interface IEmptyCellProps {
  cellData: IEmptyCell;
}

function EmptyCell({ cellData }: IEmptyCellProps) {
  const { setIndex } = useGameActions();
  const index = useGameIndex();

  const handleClick = () => {
    setIndex(cellData.index);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex aspect-square w-full items-center justify-center border text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl ${
        index === cellData.index ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      <p>{cellData.value}</p>
    </div>
  );
}
