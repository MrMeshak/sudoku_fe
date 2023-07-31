'use client';
import { useFusedGameBoardBoxCells } from '@/store/gameStore/gameStore';
import GameBoard from './gameBoard';
import { generateFusedGameBoardBoxCells } from '@/store/gameStore/helper/generateFusedGameBoardBoxCells';

export interface IGameGameProps {}

export default function GameGame(props: IGameGameProps) {
  const boxBoardCells = useFusedGameBoardBoxCells();

  return (
    <div className="m-8">
      <GameBoard boxBoardCells={boxBoardCells} />
    </div>
  );
}
