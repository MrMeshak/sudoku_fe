'use client';
import {
  EraserIcon,
  LightBulbIcon,
  NoteIcon,
  UndoIcon,
} from '../utils/icons/iconly';
import { useGameActions } from '@/store/gameStore/gameStore';

export interface IGameControllsProps {}

export default function GameControlls(props: IGameControllsProps) {
  const buttonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { makeMove, undo, erase } = useGameActions();

  return (
    <div className="m-8">
      <div className="mb-4 grid grid-cols-4 grid-rows-1 gap-2">
        <button
          onClick={() => undo()}
          className="flex items-center justify-center rounded-lg border-2 border-slate-200 p-4 text-slate-500 hover:border-slate-300"
        >
          <UndoIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => erase()}
          className="flex items-center justify-center rounded-lg border-2 border-slate-200 p-4 text-slate-500 hover:border-slate-300 "
        >
          <EraserIcon className="h-6 w-6" />
        </button>
        <button className="flex items-center justify-center rounded-lg border-2 border-slate-200 p-4 text-slate-500 hover:border-slate-300">
          <NoteIcon className="h-6 w-6" />
        </button>
        <button className="flex items-center justify-center rounded-lg border-2 border-slate-200 p-4 text-slate-500 hover:border-slate-300">
          <LightBulbIcon />
        </button>
      </div>

      <div className="grid grid-cols-9 grid-rows-1 gap-2">
        {buttonNumbers.map((number) => (
          <button
            onClick={() => makeMove(number)}
            key={`game-control-button-${number}`}
            className=" align-self flex aspect-square w-full items-center justify-center rounded  bg-slate-900 text-xl font-semibold text-white transition-all ease-in-out hover:bg-slate-500"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
