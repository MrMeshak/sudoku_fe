import * as React from 'react';

export interface IGameHeaderProps {}

export default function GameHeader(props: IGameHeaderProps) {
  return (
    <div className=" border-b-2 border-t-2 bg-slate-50 px-8 py-6">
      <h1 className=" mb-1 text-5xl font-semibold">Player</h1>
      <p>Enjoy a game of Sudoku</p>
    </div>
  );
}
