'use client';
import { useEffect } from 'react';
import {
  useFusedGameBoardBoxCells,
  useGameActions,
} from '@/store/gameStore/gameStore';
import GameBoard from './gameBoard';
import { generateFusedGameBoardBoxCells } from '@/store/gameStore/helper/generateFusedGameBoardBoxCells';

export interface IGameGameProps {}

export default function GameGame(props: IGameGameProps) {
  const { generatePuzzle } = useGameActions();
  const boxBoardCells = useFusedGameBoardBoxCells();

  useEffect(() => {
    generatePuzzle();
  }, []);

  return (
    <div className="mx-8">
      <GameBoard boxBoardCells={boxBoardCells} />
    </div>
  );
}
